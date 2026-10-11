"use client";

import { useState } from "react";
import { Pause, Play, Sparkles } from "lucide-react";
import styles from "./styles/marquee.module.css";

const services = [
  "Shape & Style",
  "Perms",
  "Straightening",
  "Balayage",
  "Highlights",
  "Gentleman Fades",
  "Scalp Treatment",
  "Digital Perm",
  "Gloss Toning",
  "Full Coloring",
  "NakedzerO Hair Serum",
];

export default function ServiceMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section className={styles.marquee} aria-label="Our salon services">
      <div className={styles.viewport}>
        <div className={styles.track} data-paused={paused}>
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className={styles.group}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {services.map((service) => (
                <li key={service} className={styles.chip}>
                  <Sparkles size={16} strokeWidth={1.5} aria-hidden="true" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Resume service marquee" : "Pause service marquee"}
        >
          {paused ? (
            <Play size={12} aria-hidden="true" />
          ) : (
            <Pause size={12} aria-hidden="true" />
          )}
          {paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>
    </section>
  );
}
