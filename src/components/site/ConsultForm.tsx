"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/field";
import { EMAIL } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().regex(/^[\d\s()+.-]{7,}$/, "Enter a valid phone number").or(z.literal("")),
  service: z.string().min(1, "Choose a service"),
  message: z.string().trim().min(5, "Tell GG a little more"),
});
type Values = z.infer<typeof schema>;

const SERVICES = [
  "Nanoblading", "Powder Brows", "Combo Brows", "Lip Blush", "Touch Up",
  "Eyebrow Threading", "Henna Tinting", "Consultation", "Other",
];

export function ConsultForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });
  const onSubmit = (v: Values) => {
    const body = `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone}\nService: ${v.service}\n\n${v.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Consultation request: ${v.service}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const err = (m?: string) => m && <p role="alert" className="mt-1 text-sm text-destructive">{m}</p>;
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5" aria-label="Contact GG">
      <div><Label htmlFor="cf-name">Name</Label><Input id="cf-name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />{err(errors.name?.message)}</div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><Label htmlFor="cf-email">Email</Label><Input id="cf-email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />{err(errors.email?.message)}</div>
        <div><Label htmlFor="cf-phone">Phone</Label><Input id="cf-phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} {...register("phone")} />{err(errors.phone?.message)}</div>
      </div>
      <div><Label htmlFor="cf-service">Service</Label>
        <Select id="cf-service" aria-invalid={!!errors.service} {...register("service")}>
          <option value="">Select…</option>
          {SERVICES.map((s) => <option key={s}>{s}</option>)}
        </Select>{err(errors.service?.message)}</div>
      <div><Label htmlFor="cf-msg">Message</Label><Textarea id="cf-msg" aria-invalid={!!errors.message} {...register("message")} />{err(errors.message?.message)}</div>
      <div><Button type="submit" disabled={isSubmitting}>Send message</Button></div>
      {sent && <p role="status" className="text-sm">Your email app should open with your message. If it does not, write to {EMAIL}.</p>}
    </form>
  );
}
