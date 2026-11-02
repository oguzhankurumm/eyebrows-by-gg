import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container section">
      <h1>This page has moved</h1>
      <p className="lead">Find a treatment or get in touch with GG.</p>
      <div className="inline-links">
        <Link href="/">Studio homepage</Link>
        <Link href="/services/">Browse treatments</Link>
        <Link href="/contact/">Contact GG</Link>
      </div>
    </main>
  );
}
