"use client";

import * as React from "react";
import Image from "next/image";
import { galleryItems } from "@/data/gallery-items";
import { Lightbox } from "./lightbox";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function GalleryGrid() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number | null>(null);
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handleOpen = (index: number) => {
    setSelectedItemIndex(index);
  };

  const handleClose = () => {
    setSelectedItemIndex(null);
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
    }
  };

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : prev));
    }
  };

  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <section className="container py-8 md:py-12 space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="rounded-full transition-all duration-300"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={item.id}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[2rem] bg-muted"
              onClick={() => handleOpen(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P//fwAJCAGCLc8tJwAAAABJRU5ErkJggg=="
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white text-xs font-medium font-serif">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Lightbox
        item={selectedItem}
        isOpen={selectedItemIndex !== null}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedItemIndex !== null && selectedItemIndex > 0}
        hasNext={selectedItemIndex !== null && selectedItemIndex < filteredItems.length - 1}
      />
    </section>
  );
}
