"""Capture and sanitize the owner's old website reference without reusing its design."""
from html.parser import HTMLParser
from html import escape, unescape
from pathlib import Path
import json, re, hashlib, urllib.request

ORIGIN='https://www.eyebrowsbygg.com'
ROOT=Path(__file__).resolve().parents[1]
ORIGINAL=ROOT.parent/'site/data/pages.json'

def clean_text(value):
    value=re.sub(r'\[FAQPage schema renders[^\]]*\]','',value,flags=re.I)
    value=re.sub(r'\[latepoint[^\]]*\]','',value,flags=re.I)
    return value

class ReferenceParser(HTMLParser):
    allowed={'h1','h2','h3','h4','h5','p','ul','ol','li','table','thead','tbody','tr','th','td','blockquote','strong','em','br','a','b','i','caption'}
    def __init__(self, known):
        super().__init__(convert_charrefs=True);self.parts=[];self.suppressed=0;self.known=known;self.stack=[];self.text=[];self.dead=set()
    def handle_starttag(self,tag,attrs):
        if tag in {'script','style','noscript'}:self.suppressed+=1;return
        if self.suppressed:return
        if tag not in self.allowed:self.parts.append(' ');return
        mapped='h3' if tag=='h1' else tag
        attr='';a=dict(attrs)
        if tag=='a':
            href=a.get('href','')
            href=re.sub(r'^https?://(?:www\.)?eyebrowsbygg\.com','',href)
            if href.startswith('/'):
                target=href.split('?')[0].split('#')[0]
                if target not in self.known:
                    shorter=re.sub(r'^/(blog|services)/','/',target)
                    if shorter in self.known:href=href.replace(target,shorter)
                    else:self.dead.add(target);href=''
            if href.startswith(('https://','http://','mailto:','tel:','/')):attr=' href="'+escape(href.split('#')[0],quote=True)+'"'
            else:mapped='span'
        if tag in {'th','td'}:
            for key in ['colspan','rowspan']:
                if a.get(key,'').isdigit():attr+=' '+key+'="'+a[key]+'"'
        self.parts.append('<'+mapped+attr+'>')
        if tag!='br':self.stack.append((tag,mapped))
    def handle_endtag(self,tag):
        if tag in {'script','style','noscript'}:
            self.suppressed=max(0,self.suppressed-1);return
        if self.suppressed or tag not in self.allowed or tag=='br':return
        # Keep the source nesting balanced, including malformed old markup.
        for i in range(len(self.stack)-1,-1,-1):
            if self.stack[i][0]==tag:
                for _,mapped in reversed(self.stack[i:]):self.parts.append('</'+mapped+'>')
                self.stack=self.stack[:i];break
    def handle_data(self,value):
        if not self.suppressed:
            value=clean_text(value);self.parts.append(escape(value));self.text.append(value)
    def finish(self):
        for _,tag in reversed(self.stack):self.parts.append('</'+tag+'>')
        self.stack=[]
        return ''.join(self.parts)

def normalized(value):return ' '.join(re.findall(r'\w+',unescape(value).lower()))
def text_of(html):
    p=ReferenceParser(set());p.feed(html);p.finish();return normalized(' '.join(p.text))

def main():
    old=json.loads(ORIGINAL.read_text());known={p['path'] for p in old}
    live=[]
    for kind in ['pages','posts']:
        request=urllib.request.Request(f'{ORIGIN}/wp-json/wp/v2/{kind}?per_page=100',headers={'User-Agent':'EyebrowsByGG-content-audit/1.0'})
        with urllib.request.urlopen(request,timeout=45) as response:live.extend(json.load(response))
    live_map={re.sub(r'^https?://[^/]+','',p['link']):p for p in live}
    rows=[];report=[];dead=set()
    for page in old:
        route=page['path'];entry=live_map.get(route);live_html=(entry or {}).get('content',{}).get('rendered','')
        parser=ReferenceParser(known);parser.feed(page['body']);old_html=parser.finish();dead.update(parser.dead)
        old_text=text_of(page['body']);live_text=text_of(live_html)
        html=old_html
        if live_text and live_text not in text_of(old_html):
            parser=ReferenceParser(known);parser.feed(live_html);live_clean=parser.finish();dead.update(parser.dead)
            html+='<section><h3>Website details</h3>'+live_clean+'</section>'
        faq=[]
        def scan(value):
            if isinstance(value,list):
                for x in value:scan(x)
            if isinstance(value,dict):
                if value.get('@type')=='FAQPage':
                    for item in value.get('mainEntity',[]):
                        q=item.get('name','');a=item.get('acceptedAnswer',{}).get('text','')
                        if q and a:faq.append((q,a))
                for key in ['@graph']:scan(value.get(key))
        scan(page.get('jsonld',[]))
        for q,a in faq:
            parser=ReferenceParser(known);parser.feed(a)
            html+='<section><h3>'+escape(unescape(q))+'</h3>'+parser.finish()+'</section>'
        rendered=text_of(html)
        old_ok=not old_text or old_text in rendered
        live_ok=not live_text or live_text in rendered
        rows.append({'path':route,'url':ORIGIN+route,'html':html,'sourceHash':hashlib.sha256(page['body'].encode()).hexdigest(),'liveHash':hashlib.sha256(live_html.encode()).hexdigest(),'faqCount':len(faq)})
        report.append({'path':route,'sourceWords':len(old_text.split()),'liveWords':len(live_text.split()),'handoffTextPreserved':old_ok,'liveTextPreserved':live_ok,'liveFound':entry is not None,'faqCount':len(faq)})
    (ROOT/'src/data/source-pages.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
    (ROOT/'docs/audit/content-coverage.json').write_text(json.dumps(report,indent=2)+'\n')
    (ROOT/'docs/audit/live-route-index.json').write_text(json.dumps([{'path':r,'url':p['link'],'modified':p['modified_gmt']} for r,p in live_map.items()],indent=2)+'\n')
    failures=[r for r in report if not all([r['handoffTextPreserved'],r['liveTextPreserved'],r['liveFound']])]
    lines=['# Original website coverage proof','','Source checked: November 2, 2026. Live WordPress REST endpoints at https://www.eyebrowsbygg.com/wp-json/wp/v2/pages?per_page=100 and https://www.eyebrowsbygg.com/wp-json/wp/v2/posts?per_page=100. The non-www URL redirects to this canonical host.','','The user approved new marketing copy and metadata. Complete old information is retained in the internal source archive. The user rejected the public reference panel; do not republish it. Coverage measurements below refer to the archive, not word-for-word public coverage. Old claims, dates, quotes and price tables are source material, not newly invented claims. Current credentials supersede the older experience summaries.','','## Measured result','',f'- Live routes: {len(live_map)}. Handoff routes: {len(old)}. All handoff routes found live: {all(r["liveFound"] for r in report)}.',f'- Complete normalized handoff body text preserved: {sum(r["handoffTextPreserved"] for r in report)}/{len(report)}.',f'- Complete normalized live body text preserved: {sum(r["liveTextPreserved"] for r in report)}/{len(report)}.',f'- Source FAQ questions restored from handoff JSON-LD: {sum(r["faqCount"] for r in report)}.','- Comparison normalizes whitespace, HTML entities and punctuation. It verifies contiguous normalized body text, not a guessed topic similarity score. Raw source/live SHA-256 hashes are stored per route.','- Exclusions: scripts, styles, tracking, image presentation, broken booking shortcodes and the literal FAQ-schema placeholder. Their informational FAQ content is restored. Original client images remain in the gallery; new Instagram media has its own provenance.','- Known dead legacy links are rendered as text; routes that exist under a top-level slug are corrected. No dead URL is silently invented.','','## Price conflicts','', 'The user approved the current GlossGenius menu as the sole price/duration authority. Earlier conflicting rates remain only in the internal archive. No competitor rate is used.','','## Per-route evidence','','| Route | Handoff words | Live words | Handoff body | Live body | FAQ |','| --- | ---: | ---: | --- | --- | ---: |']
    lines.extend(f'| {r["path"]} | {r["sourceWords"]} | {r["liveWords"]} | {"PASS" if r["handoffTextPreserved"] else "FAIL"} | {"PASS" if r["liveTextPreserved"] else "FAIL"} | {r["faqCount"]} |' for r in report)
    lines+=['','## Dead source targets','']+[f'- {x}' for x in sorted(dead)]
    (ROOT/'docs/content-parity.md').write_text('\n'.join(lines)+'\n')
    print(f'Source audit: {len(report)} routes; {len(failures)} failures; {sum(r["faqCount"] for r in report)} source FAQ questions.')
    if failures:print(failures);raise SystemExit(1)

if __name__=='__main__':main()
