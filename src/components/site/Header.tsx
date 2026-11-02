import Link from "next/link";
import { BOOK } from "@/lib/site";
import { NavLinks, MobileMenu } from "./NavClient";

export function Header() {
  return (
    <>
      <div className="topbar">
        SPECIAL OFFER $100 OFF ON PERMANENT MAKE-UP —{" "}
        <a href={BOOK} rel="noopener">Book online</a>
      </div>
      <header className="nav">
        <div className="wrap">
          <Link className="logo" href="/">Eyebrows <i>by</i> GG</Link>
          <NavLinks />
          <a className="btn btn-book" href={BOOK} rel="noopener">Book Online</a>
          <MobileMenu />
        </div>
      </header>
    </>
  );
}
