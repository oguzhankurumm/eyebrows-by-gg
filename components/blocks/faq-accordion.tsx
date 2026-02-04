import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ title, items, className }: FAQAccordionProps) {
  return (
    <Section width="narrow" className={cn("bg-background", className)}>
        {title && (
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
        )}
        <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </Section>
  );
}
