"use client";
import type { ImageLoaderProps } from "next/image";
export default function imageLoader({ src, width }: ImageLoaderProps) {
  const size = [320, 640, 960, 1440].find((size) => size >= width) ?? 1440;
  return `${src}-${size}.webp`;
}
