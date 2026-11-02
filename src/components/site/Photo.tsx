import Image from "next/image";
import photos from "@/data/photos.json";
export function Photo({
  name,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, 50vw",
}: {
  name: keyof typeof photos;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const { width, height } = photos[name];
  return (
    <Image
      src={`/assets/photos/${name}`}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  );
}
