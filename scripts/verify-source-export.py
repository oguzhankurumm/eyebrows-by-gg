"""Verify retained original text actually ships in each exported page."""
import importlib.util,json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('source_sync',root/'scripts/sync-source.py')
module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
rows=json.loads((root/'src/data/source-pages.json').read_text())
errors=[]
for row in rows:
 file=root/'out'/row['path'].strip('/')/'index.html'
 html=file.read_text()
 if 'data-source-path="'+row['path']+'"' not in html:errors.append(row['path']+': source reference missing')
 if module.text_of(row['html']) not in module.text_of(html):errors.append(row['path']+': complete normalized reference text missing')
if errors:raise SystemExit('\n'.join(errors))
print(f'PASS: complete normalized original reference text appears in all {len(rows)} exported routes.')
