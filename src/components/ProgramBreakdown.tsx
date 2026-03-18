import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./ProgramBreakdown.module.css";

// ─── Types ───────────────────────────────────────────────────────────────────

interface LessonData {
  title: string;
  description: string;
}

interface EnrichedModule {
  id: string;
  title: string;
  lessons: LessonData[];
}

interface EnrichedPhase {
  id: string;
  title: string;
  goal: string;
  modules: EnrichedModule[];
}

// External prop shape (matching PHASES constant in home.tsx)
interface RawModule {
  id: string;
  title: string;
  lessons: string[];
}

interface RawPhase {
  id: string;
  title: string;
  goal: string;
  modules: RawModule[];
}

interface ProgramBreakdownProps {
  phases: RawPhase[];
}

// ─── Lesson Descriptions map ─────────────────────────────────────────────────

const LESSON_DESCRIPTIONS: Record<string, string> = {
  "Lesson 1.1 — Introduction to IncomeCraft Labs":
    "In this lesson you will understand how the IncomeCraft Labs program works and what the complete roadmap looks like. We will walk through what you will be building step by step so you know exactly what to expect.",
  "Lesson 1.2 — What Are Digital Products":
    "In this lesson we will understand what digital products are and why they are so powerful today. We will also compare digital and physical business models, explore different types of digital products, and set realistic income expectations before starting.",
  "Lesson 2.1 — How to Choose a High-Demand Product":
    "In this lesson you will learn how to find a product that people actually want to buy. We will look at simple competitor research, trend research methods, and how to avoid saturated markets.",
  "Lesson 3.1 — Creating Your Digital Product with AI":
    "In this lesson you will learn how to create your digital product using simple AI tools. We will also design it using Canva, package it professionally, add bonuses, and finalize the product files.",
  "Lesson 3.2 — Hosting Your Digital Product":
    "In this lesson you will learn where and how to host your digital product. We will explore different tools and software that allow you to deliver your product automatically to customers.",
  "Lesson 4.1 — Creating a Powerful Offer Structure":
    "In this lesson you will learn how to turn your product into a strong offer. We will structure the core product, add bonuses, create urgency, and build a clear unique selling point.",
  "Lesson 4.2 — Choosing the Right Launch Price":
    "In this lesson you will learn how to pick the right price for your product. We will also understand pricing psychology, value stacking, and common pricing mistakes.",
  "Lesson 5.1 — Creating a High-Converting Landing Page":
    "In this lesson you will learn how to build a landing page using AI tools. We will write headlines and copy, understand domains, and publish your page online.",
  "Lesson 6.1 — Creating a Video Sales Letter":
    "In this lesson you will learn how to create a simple video sales letter that sells your product. We will write the script, structure the video, edit it, and place it on your sales page.",
  "Lesson 7.1 — Payment Setup and Delivery":
    "In this lesson you will learn how to accept payments for your product. We will set up Cashfree, create the checkout page, and connect it with automatic product delivery.",
  "Lesson 8.1 — Facebook Ads Basics":
    "In this lesson you will understand how Meta ads work. We will set up Ads Manager, learn campaign structure, and understand important ad metrics.",
  "Lesson 8.2 — Launching Your First Ad":
    "In this lesson you will learn how to launch your first ad campaign. We will cover budget strategy, audience targeting, and how to go live with your ad.",
  "Lesson 8.3 — Creating Ad Creatives with AI":
    "In this lesson you will learn how to create ad creatives using AI tools. We will design banners, write video ad copy, and create hooks that grab attention.",
  "Lesson 9.1 — Sales Funnel Automation":
    "In this lesson you will learn how to create an automated sales funnel. We will also set up product delivery, upsells, and order bumps.",
  "Lesson 10.1 — Scaling Your Digital Product":
    "In this lesson we will talk about common beginner mistakes and how to improve conversion rates. You will also learn how to turn your product into a long-term digital asset.",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function LessonItem({ lesson, index }: { lesson: LessonData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.32 }}
      className={styles.lessonItem}
    >
      <div className={styles.lessonContent}>
        <span className={styles.lessonTitle}>{lesson.title}</span>
        {lesson.description && <p className={styles.lessonDesc}>{lesson.description}</p>}
      </div>
    </motion.div>
  );
}

function ModuleCard({
  module,
  isOpen,
  onToggle,
}: {
  module: EnrichedModule;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`${styles.moduleCard} ${isOpen ? styles.moduleCardOpen : ""}`}>
      <button className={styles.moduleHeader} onClick={onToggle} aria-expanded={isOpen}>
        <div className={styles.moduleInfo}>
          <h3 className={styles.moduleTitle}>{module.title}</h3>
          {!isOpen && (
            <span className={styles.moduleCta}>
              Click to explore lessons
            </span>
          )}
        </div>
        <ChevronDown
          className={`${styles.arrowIcon} ${isOpen ? styles.rotateArrow : ""}`}
          size={20}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="lessons"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className={styles.lessonList}>
              {module.lessons.map((lesson, idx) => (
                <LessonItem key={idx} lesson={lesson} index={idx} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PhaseSection({ phase, phaseIndex, isFirst }: { phase: EnrichedPhase; phaseIndex: number; isFirst: boolean }) {
  const [openModuleId, setOpenModuleId] = useState<string | null>(isFirst ? phase.modules[0]?.id ?? null : null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const phaseNumber = String(phaseIndex + 1).padStart(2, "0");
  // Strip "PHASE XX — " prefix to get just the name
  const phaseName = phase.title.replace(/^PHASE \d+\s*[—–-]\s*/i, "");

  const toggleModule = (id: string) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
  };

  return (
    <div ref={ref} className={styles.phaseSection}>
      {/* Phase Header */}
      <motion.div
        className={styles.phaseHeader}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.phaseNumberLabel}>PHASE {phaseNumber}</div>
        <h2 className={styles.phaseTitle}>{phaseName}</h2>
        <div className={styles.phaseAccentLine} />
        <p className={styles.phaseGoal}>{phase.goal}</p>
      </motion.div>

      {/* Modules */}
      <div className={styles.modulesStack}>
        {phase.modules.map((module, mIdx) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + mIdx * 0.1 }}
          >
            <ModuleCard
              module={module}
              isOpen={openModuleId === module.id}
              onToggle={() => toggleModule(module.id)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProgramBreakdown({ phases }: ProgramBreakdownProps) {
  // Enrich lesson data with descriptions
  const enrichedPhases: EnrichedPhase[] = phases.map((phase) => ({
    ...phase,
    modules: phase.modules.map((mod) => ({
      ...mod,
      lessons: (mod.lessons as string[]).map((lessonTitle) => ({
        title: lessonTitle,
        description: LESSON_DESCRIPTIONS[lessonTitle] ?? "",
      })),
    })),
  }));

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className={styles.wrapper}>
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65 }}
      >
        <h2 className={styles.sectionTitle}>The Predictable Plug-&-Profit Framework — Explained Phase by Phase</h2>
        <p className={styles.sectionSubtext}>Every phase, module, and lesson inside IncomeCraft Labs is designed to move you from confusion to a fully working digital product system. Follow the step-by-step roadmap to create, launch, and grow your own digital product business.</p>
      </motion.div>

      {/* Timeline connector */}
      <div className={styles.timelineTrack}>
        <div className={styles.timelineLine} />

        <div className={styles.phasesContainer}>
          {enrichedPhases.map((phase, idx) => (
            <div key={phase.id} className={styles.phaseRow}>
              <div className={styles.timelineDot} />
              <div className={styles.phaseContent}>
                <PhaseSection phase={phase} phaseIndex={idx} isFirst={idx === 0} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
