"use client";
import { useEffect, useRef, useState } from "react";
import menu from "@/data/booking-menu.json";
import { BOOK, PHONE, PHONE_T } from "@/lib/site";
import { Icon } from "./Icon";

export function BookingDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const backdropPress = useRef(false);
  const [selection, setSelection] = useState("");
  const [status, setStatus] = useState("");
  const selected = menu.services.find(service => service.id === selection);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.href !== BOOK || link.closest("dialog")) return;
      event.preventDefault();
      trigger.current = link;
      const name = link.dataset.bookingService;
      setSelection(menu.services.find(service => service.name === name)?.id ?? "");
      setStatus("");
      dialog.current?.showModal();
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  function close() { dialog.current?.close(); }
  function continueBooking() {
    const width = Math.min(560, window.screen.availWidth);
    const height = Math.min(860, window.screen.availHeight);
    const left = Math.max(0, (window.screen.availWidth - width) / 2);
    const popup = window.open("about:blank", "eyebrows-by-gg-booking", `popup,width=${width},height=${height},left=${left},top=40`);
    if (popup) {
      popup.opener = null;
      popup.location.replace(BOOK);
      setStatus("Your booking window is open. This studio page will be here when you return.");
    } else {
      setStatus("Your browser blocked the booking window. Use the link below to open GlossGenius in a new tab.");
    }
  }
  return <dialog ref={dialog} className="booking-dialog" data-lenis-prevent aria-labelledby="booking-title" onKeyDown={event => {
    if (event.key !== "Tab") return;
    const first = event.currentTarget.querySelector<HTMLButtonElement>(".dialog-close");
    const last = event.currentTarget.querySelector<HTMLAnchorElement>(".booking-help a:last-child");
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }} onPointerDown={event => { backdropPress.current = event.target === event.currentTarget; }} onClick={event => { if (backdropPress.current && event.target === event.currentTarget) close(); backdropPress.current = false; }} onClose={() => trigger.current?.focus()}>
    <div className="booking-dialog-content">
      <button className="dialog-close" onClick={close} aria-label="Close appointment preview"><Icon name="close" size={22}/></button>
      <span className="booking-symbol" aria-hidden="true"><Icon name="treatments" size={30}/></span>
      <h2 id="booking-title">Your next beauty moment.</h2>
      <p>Find your treatment and a time with GG. Booking opens in a secure GlossGenius window; this studio page stays open.</p>
      <details className="treatment-picker">
        <summary><span>{selected?.name ?? "Explore the studio menu"}</span><Icon name="plus" size={18}/></summary>
        <fieldset id="booking-treatment"><legend>Choose a treatment to preview</legend>
          <label className="treatment-option"><input type="radio" name="booking-treatment" value="" checked={selection === ""} onChange={() => setSelection("")}/><span>Browse all appointments</span></label>
          {menu.services.map(service => <label className="treatment-option" key={service.id}><input type="radio" name="booking-treatment" value={service.id} checked={selection === service.id} onChange={() => setSelection(service.id)}/><span><strong>{service.name}</strong><small>${service.price.toLocaleString("en-US")} · {service.minutes} minutes</small></span></label>)}
        </fieldset>
      </details>
      {selected && <div className="booking-preview"><strong>${selected.price.toLocaleString("en-US")}{selected.variable ? "+" : ""}</strong><span>{selected.minutes} minutes{selected.deposit > 0 ? ` · $${selected.deposit} deposit listed` : ""}</span></div>}
      <p className="small muted">Select your treatment again in GlossGenius to confirm availability and the final total. No appointment is reserved here.</p>
      <button className="button" onClick={continueBooking}>Continue to booking<Icon name="diagonal" size={18}/></button>
      <p role="status" className="booking-status">{status}</p>
      <div className="booking-help"><a href={BOOK} target="_blank" rel="noopener noreferrer">Open booking in a new tab</a><a href={PHONE_T}>Call {PHONE}</a></div>
      <span className="small muted">972 Boston Post Rd · Milford, CT</span>
    </div>
  </dialog>;
}
