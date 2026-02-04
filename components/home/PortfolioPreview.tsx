"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/data/gallery-items";
import { ArrowRight } from "lucide-react";

export function PortfolioPreview() {
  const previewItems = galleryItems.slice(0, 4);

  return (
    <Section variant="glow">
      <div className="text-center mb-16 space-y-4">
        <h2 className="h2">Real Transformations</h2>
        <p className="lead max-w-2xl mx-auto">
          See the difference precision makes. Every set of brows is unique.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {previewItems.map((item, i) => (
          <div 
            key={item.id} 
            className={`relative rounded-[2rem] overflow-hidden aspect-[4/5] group bg-muted ${i % 2 === 0 ? 'mt-0 md:mt-8' : ''}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <span className="text-white font-serif font-medium">{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12">
            <Link href="/portfolio">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </Button>
      </div>
    </Section>
  );
}
