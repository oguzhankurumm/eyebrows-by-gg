import { Icon } from "./Icon";
export function Credentials() {
  return (
    <section
      className="container credentials"
      aria-label="GG’s experience and credentials"
    >
      <div className="credential experience">
        <strong>28 years</strong>
        <span>Eyebrow threading experience</span>
      </div>
      <div className="credential">
        <Icon name="check" />
        <strong>Licensed PMU artist</strong>
        <span>Connecticut</span>
      </div>
      <div className="credential">
        <Icon name="check" />
        <strong>AAM Gold Certified</strong>
        <span>New Jersey</span>
      </div>
      <div className="credential">
        <Icon name="treatments" />
        <strong>Shape expert</strong>
        <span>Threading & makeup artistry</span>
      </div>
    </section>
  );
}
