import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <Accordion type="multiple" className="my-8">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`q${i}`}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent><p>{f.a}</p></AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
