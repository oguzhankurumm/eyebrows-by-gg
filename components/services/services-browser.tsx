"use client";

import { useState, useMemo } from "react";
import { Service, ServiceCategory } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { ServiceGrid } from "@/components/blocks/service-grid";
import { ServiceCard } from "@/components/blocks/service-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface ServicesBrowserProps {
  initialServices: Service[];
}

const CATEGORIES: (ServiceCategory | "All")[] = [
  "All",
  "Brows",
  "Lips",
  "Touch-ups",
  "Consultation",
  "Removal",
];

export function ServicesBrowser({ initialServices }: ServicesBrowserProps) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "All">("All");
  const [sortBy, setSortBy] = useState<string>("default");

  const filteredServices = useMemo(() => {
    let result = [...initialServices];

    if (selectedCategory !== "All") {
      result = result.filter((s) => s.category === selectedCategory);
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.priceValue - a.priceValue);
    } else if (sortBy === "duration-asc") {
      result.sort((a, b) => a.durationValue - b.durationValue);
    } else if (sortBy === "duration-desc") {
      result.sort((a, b) => b.durationValue - a.durationValue);
    }

    return result;
  }, [initialServices, selectedCategory, sortBy]);

  return (
    <div className="space-y-12">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white p-4 rounded-3xl border border-border/50 shadow-sm">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-transparent",
                selectedCategory === cat
                  ? "bg-foreground text-background shadow-md"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Sort */}
        <div className="w-full md:w-auto min-w-[200px]">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full rounded-full border-border/60 bg-white h-10">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Recommended</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="duration-asc">Duration: Short to Long</SelectItem>
              <SelectItem value="duration-desc">Duration: Long to Short</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid of New Service Cards */}
      <ServiceGrid>
        {filteredServices.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center gap-4">
            <div className="size-16 rounded-full bg-muted flex items-center justify-center text-2xl">🔍</div>
            <p className="text-xl text-muted-foreground font-light">No services found in this category.</p>
            <Button variant="link" onClick={() => setSelectedCategory("All")}>Clear filters</Button>
          </div>
        ) : (
          filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.image || "/images/stock/services/services-hero.jpg"}
              price={service.price}
              href={`/services/${service.slug}`}
              bookingHref={service.glossgeniusUrl}
            />
          ))
        )}
      </ServiceGrid>
    </div>
  );
}
