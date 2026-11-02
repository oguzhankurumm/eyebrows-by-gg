export const QUESTIONS = [
  {
    q: "Which brow treatment fits me?",
    a: "Start with the finish you like: hair-like detail, soft shading or both. GG can help you compare options against your existing brows. If you are unsure which service to select, call before booking.",
  },
  {
    q: "Where can I see prices and times?",
    a: "The service menu lists treatment prices. GlossGenius shows booking options and availability. Confirm the total and appointment length there before reserving.",
  },
  {
    q: "Can I book if I have previous brow work?",
    a: "Tell GG about any existing pigmentation before choosing a treatment. Share when it was done and what you would like to change so you can discuss the right appointment.",
  },
  {
    q: "How do I prepare for my appointment?",
    a: "Ask GG for instructions for your chosen treatment. Bring reference photos and questions about the shape, color and follow-up. Discuss suitability before booking.",
  },
  {
    q: "What if I need to change my booking?",
    a: "Give at least 48 hours’ notice to change or cancel. The current GlossGenius policy lists a 30% fee for cancellations within 48 hours and no-shows. Use your confirmation or call GG to discuss your appointment.",
  },
];
export function Faq({
  items = QUESTIONS,
}: {
  items?: { q: string; a: string }[];
}) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            {item.q}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
