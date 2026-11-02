import Link from "next/link";
import { BOOK } from "@/lib/site";
import { Navigation } from "./NavClient";
export function Header() {
  return <header className="header"><div className="container header-inner"><Link className="wordmark" href="/" aria-label="Eyebrows by GG home">eyebrows<span>by GG</span></Link><Navigation /><a className="button header-book" href={BOOK}>Book appointment</a></div></header>;
}
