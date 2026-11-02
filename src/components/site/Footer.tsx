import Link from "next/link";
import { BOOK, EMAIL, FB, HOURS, IG, MAPS, NAV, PHONE, PHONE_T, WA } from "@/lib/site";

export function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="foot-photo"><img src="/assets/img/2023_07_portfolio-12.webp" alt="Lip blush result by Eyebrows by GG" loading="lazy" /></div>
        <div className="foot-body">
          <p className="big">Eyebrows <i>by</i> GG</p>
          <nav aria-label="Footer">
            <ul className="foot-menu">
              {NAV.map(([n, u]) => <li key={u}><Link href={u}>{n}</Link></li>)}
              <li><a href={BOOK} rel="noopener">Book Online</a></li>
            </ul>
          </nav>
          <div className="foot-cols">
            <div>
              <span className="fh">Visit</span>
              <p>972 Boston Post Rd,<br />Milford, CT 06461</p>
              <p><a href={MAPS} rel="noopener">Get directions</a></p>
              <span className="fh">Hours</span>
              <ul>{HOURS.map(([d, h]) => <li key={d}>{d.slice(0, 3)} &nbsp; {h}</li>)}</ul>
            </div>
            <div>
              <span className="fh">Contact</span>
              <ul>
                <li><a href={PHONE_T}>{PHONE}</a></li>
                <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li><a href={IG} rel="noopener">Instagram</a></li>
                <li><a href={FB} rel="noopener">Facebook</a></li>
                <li><a href={WA} rel="noopener">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="fine">
            <span>© 2026 Eyebrows By GG. All rights reserved.</span>
            <span>Website: Oğuzhan Kurum</span>
          </div>
        </div>
      </footer>
      <div className="dock">
        <a href={BOOK} rel="noopener">Book</a>
        <a href={PHONE_T}>Call</a>
      </div>
    </>
  );
}
