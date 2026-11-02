import pages from "@/data/pages.json";
export type Page = (typeof pages)[number];
export const DATA = pages;
export const PAGES: Record<string, Page> = Object.fromEntries(
  pages.map((page) => [page.path, page]),
);
export const POSTS = DATA.filter((page) => page.type === "post");
