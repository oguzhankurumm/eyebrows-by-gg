"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { EMAIL } from "@/lib/site";
const schema = z.object({
  name: z.string().trim().min(2, "Enter your name (at least 2 characters)."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(
      /^[\d\s()+.-]{7,}$/,
      "Enter a phone number with at least 7 characters, or leave this field blank.",
    )
    .or(z.literal("")),
  service: z.string().min(1, "Choose a treatment or select ‘Help me choose’."),
  message: z
    .string()
    .trim()
    .min(5, "Add your question (at least 5 characters)."),
});
type Values = z.infer<typeof schema>;
export function ConsultForm() {
  const [prepared, setPrepared] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });
  function submit(values: Values) {
    const body = `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nTreatment: ${values.service}\n\n${values.message}`;
    window.location.assign(
      `mailto:${EMAIL}?subject=${encodeURIComponent(`Brow question: ${values.service}`)}&body=${encodeURIComponent(body)}`,
    );
    setPrepared(true);
  }
  function error(field: keyof Values) {
    return (
      errors[field] && (
        <p className="field-error" id={`error-${field}`} role="alert">
          {errors[field]?.message}
        </p>
      )
    );
  }
  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit(submit)}
      noValidate
      aria-label="Email GG"
    >
      <div>
        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          autoComplete="name"
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "error-name" : undefined}
          {...register("name")}
        />
        {error("name")}
      </div>
      <div>
        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "error-email" : undefined}
          {...register("email")}
        />
        {error("email")}
      </div>
      <div>
        <label htmlFor="contact-phone">
          Phone number <span>(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "error-phone" : undefined}
          {...register("phone")}
        />
        {error("phone")}
      </div>
      <div>
        <label htmlFor="contact-service">What are you considering?</label>
        <select
          id="contact-service"
          required
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "error-service" : undefined}
          {...register("service")}
        >
          <option value="">Choose a treatment</option>
          {[
            "Powder brows",
            "Nanoblading",
            "Microblading",
            "Combo brows",
            "Lip blush",
            "Brow threading",
            "Henna tinting",
            "Brow touch-up",
            "Help me choose",
          ].map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
        {error("service")}
      </div>
      <div>
        <label htmlFor="contact-message">Your question</label>
        <textarea
          id="contact-message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : undefined}
          {...register("message")}
        />
        {error("message")}
      </div>
      <button className="button" type="submit" disabled={isSubmitting}>
        Prepare email
      </button>
      <p className="small muted">
        Your email app opens with these details. Review and send your email
        there.
      </p>
      {prepared && (
        <p role="status">
          Email prepared. Send it in your email app. If it did not open, email{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      )}
    </form>
  );
}
