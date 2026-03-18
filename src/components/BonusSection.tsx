import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./BonusSection.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BonusItem {
  headline: string;
  description: string;
  bullets: string[];
  tagline?: string;
  imageSrc?: string;
  imageAlt?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const BONUSES: BonusItem[] = [
  {
    headline: "Direct Community Support & Private Chat Group",
    description:
      "Inside IncomeCraft Labs you won't be building alone. You will get access to a private community where you can ask questions, get help, and connect with other members building their digital product businesses.",
    bullets: [
      "Direct support for questions and doubts",
      "Private chat group with members",
      "A supportive community helping each other grow",
    ],
    imageSrc: "/bundles/community-support.png",
    imageAlt: "Direct Community Support & Private Chat Group",
  },
  {
    headline: "Weekly Trending Digital Product Opportunities",
    description:
      "Every week you will receive access to digital products that are currently trending in the market. You will see what products are working right now along with marketing angles so you can launch faster without guessing.",
    bullets: [
      "Weekly trending product ideas",
      "Products validated in the market",
      "Marketing angles for selling",
      "Selected products with resell rights",
    ],
    imageSrc: "/bundles/weekly-trending.png",
    imageAlt: "Weekly Trending Digital Product Opportunities",
  },
  {
    headline: "50,000+ eBooks Mega Bundle",
    description:
      "A massive library of ready-to-use ebooks across multiple categories including business, money, productivity, psychology, and self-development.",
    bullets: [
      "50,000+ ebooks",
      "Multiple categories and niches",
      "Ready for instant download",
      "Can be used or resold",
    ],
    tagline: "Download • Resell • Use Instantly",
    imageSrc: "/bundles/ebook-bundle.jpeg",
    imageAlt: "50,000+ eBooks Mega Bundle",
  },
  {
    headline: "1000+ Premium Courses Bundle",
    description:
      "Access a huge library of premium courses worth over $50,000 covering business, marketing, AI tools, editing, trading, and many other skills.",
    bullets: [
      "Indian and international courses",
      "Marketing and business training",
      "AI, editing, and trading courses",
      "Skill-building learning library",
    ],
    tagline: "Download • Resell • Use Instantly",
    imageSrc: "/bundles/courses-bundle.jpeg",
    imageAlt: "1000+ Premium Courses Bundle",
  },
  {
    headline: "2 Lakh+ Viral Reels Bundle",
    description:
      "A massive collection of ready-to-use viral reels across trending niches so you can create content faster and grow your audience easily.",
    bullets: [
      "Anime reels",
      "Motivational reels",
      "AI reels",
      "Story reels",
      "Trending viral formats",
    ],
    tagline: "Download • Resell • Use Instantly",
    imageSrc: "/bundles/reels-bundle.jpeg",
    imageAlt: "2 Lakh+ Viral Reels Bundle",
  },
  {
    headline: "5 Lakh+ Digital Assets Vault",
    description:
      "A massive creator vault containing thousands of digital tools, templates, workflows, and resources that help you build and launch digital products faster.",
    bullets: [
      "PLR assets",
      "Graphics libraries",
      "WordPress plugins",
      "Workflow templates",
      "Editing assets and design tools",
    ],
    tagline: "Instant Access • Lifetime Use",
    imageSrc: "/bundles/digital-assets-vault.jpeg",
    imageAlt: "5 Lakh+ Digital Assets Vault",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function BonusBlock({ bonus, index }: { bonus: BonusItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;
  const hasImage = !!bonus.imageSrc;

  return (
    <motion.div
      ref={ref}
      className={`${styles.bonusBlock} ${hasImage ? styles.bonusBlockWithImage : styles.bonusBlockNoImage}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {hasImage ? (
        <>
          {/* Image left on even, right on odd */}
          {isEven ? (
            <>
              <div className={styles.imageColumn}>
                <div className={styles.imageWrapper}>
                  <motion.img
                    src={bonus.imageSrc}
                    alt={bonus.imageAlt}
                    className={styles.productImage}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className={styles.imageGlow} />
                </div>
              </div>
              <div className={styles.textColumn}>
                <BonusText bonus={bonus} />
              </div>
            </>
          ) : (
            <>
              <div className={styles.textColumn}>
                <BonusText bonus={bonus} />
              </div>
              <div className={styles.imageColumn}>
                <div className={styles.imageWrapper}>
                  <motion.img
                    src={bonus.imageSrc}
                    alt={bonus.imageAlt}
                    className={styles.productImage}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className={styles.imageGlow} />
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <div className={styles.textColumnFull}>
          <BonusText bonus={bonus} />
        </div>
      )}
    </motion.div>
  );
}

function BonusText({ bonus }: { bonus: BonusItem }) {
  return (
    <div className={styles.textContent}>
      <h3 className={styles.bonusHeadline}>{bonus.headline}</h3>
      <p className={styles.bonusDescription}>{bonus.description}</p>
      <ul className={styles.bonusBullets}>
        {bonus.bullets.map((b, i) => (
          <li key={i} className={styles.bulletItem}>
            <span className={styles.bulletDot} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {bonus.tagline && <div className={styles.tagline}>{bonus.tagline}</div>}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BonusSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className={styles.section}>
      {/* Ambient background glow */}
      <div className={styles.ambientGlow} />

      {/* Timeline continuation line */}
      <div className={styles.timelineContinuation}>
        <div className={styles.timelineLine} />
        <div className={styles.timelineDotEnd} />
      </div>

      <div className={styles.inner}>
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className={styles.sectionBadge}>INCLUDED WITH INCOMECRAFT LABS</div>
          <h2 className={styles.sectionTitle}>
            Plus — Everything Else You Get Inside IncomeCraft Labs
          </h2>
          <p className={styles.sectionSubtext}>
            Along with the Predictable Plug-&-Profit Framework, you also get access to powerful
            resources and digital asset libraries designed to help you move faster and start
            building immediately.
          </p>
        </motion.div>

        {/* Bonus Blocks */}
        <div className={styles.bonusList}>
          {BONUSES.map((bonus, i) => (
            <BonusBlock key={i} bonus={bonus} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
