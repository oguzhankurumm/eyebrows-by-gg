"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/ui/glass-card";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        alert("Message sent! (Demo)");
    };

    return (
        <GlassCard className="p-8 md:p-10 space-y-8">
            <div className="space-y-2">
                <h3 className="font-serif text-3xl font-medium">Send a Message</h3>
                <p className="text-muted-foreground">
                    Have a question about a service? Drop us a note.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium ml-2">
                            Name
                        </label>
                        <Input id="name" placeholder="Your name" required className="bg-white/50" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium ml-2">
                            Email
                        </label>
                        <Input id="email" type="email" placeholder="you@example.com" required className="bg-white/50" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium ml-2">
                        Phone (Optional)
                    </label>
                    <Input id="phone" type="tel" placeholder="(555) 000-0000" className="bg-white/50" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium ml-2">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        required
                        className="min-h-[150px] bg-white/50 resize-none"
                    />
                </div>

                <Button type="submit" size="default" className="w-full text-lg h-12" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </GlassCard>
    );
}
