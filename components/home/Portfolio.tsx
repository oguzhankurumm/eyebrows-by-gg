import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const portfolioImages = [
  { src: "/assets/images/portfolio-1.jpg", alt: "Brows transformation 1" },
  { src: "/assets/images/portfolio-2.jpg", alt: "Brows transformation 2" },
  { src: "/assets/images/portfolio-3.jpg", alt: "Brows transformation 3" },
];

export function Portfolio() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold">Real Results</h2>
          <p className="text-muted-foreground mt-2">See the transformations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {portfolioImages.map((img, i) => (
                <div key={i} className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            ))}
        </div>
        <div className="flex justify-center">
             <Button asChild variant="secondary">
                <Link href="https://instagram.com" target="_blank" rel="noreferrer" className="gap-2">
                    <Instagram className="w-4 h-4" />
                    View on Instagram
                </Link>
             </Button>
        </div>
      </div>
    </section>
  );
}
