"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export interface Row { name: string; price: string; href?: string; img: string }

export function ServiceMenu({ rows }: { rows: Row[] }) {
  const [on, setOn] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28 });
  const sy = useSpring(y, { stiffness: 260, damping: 28 });
  return (
    <div
      className="svc"
      onPointerMove={(e) => { x.set(e.clientX + 24); y.set(e.clientY - 140); }}
      onPointerLeave={() => setOn(null)}
    >
      <ul className="menu-list">
        {rows.map((r, k) => (
          <li key={r.name} data-dim={on !== null && on !== k} onPointerEnter={(e) => e.pointerType === "mouse" && setOn(k)}>
            {r.href ? <Link href={r.href}>{r.name}</Link> : <span>{r.name}</span>}
            <span className="pr">{r.price}</span>
          </li>
        ))}
      </ul>
      <motion.div className="svc-peek" aria-hidden="true" style={{ x: sx, y: sy }} animate={{ opacity: on === null ? 0 : 1, scale: on === null ? 0.85 : 1 }} transition={{ duration: 0.25 }}>
        {rows.map((r, k) => (
          <img key={r.img + k} src={`/assets/img/${r.img}.webp`} alt="" style={{ opacity: on === k ? 1 : 0 }} />
        ))}
      </motion.div>
    </div>
  );
}
