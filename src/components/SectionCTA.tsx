import React from "react";
import styles from "./SectionCTA.module.css";

interface SectionCTAProps {
  text: string;
  microText?: string;
}

export default function SectionCTA({ text, microText }: SectionCTAProps) {
  return (
    <div className={styles.ctaWrapper}>
      <a href="#pricing" className={styles.ctaButton}>
        {text}
      </a>
      {microText && <p className={styles.microText}>{microText}</p>}
    </div>
  );
}
