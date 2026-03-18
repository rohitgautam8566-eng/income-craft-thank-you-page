import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import styles from "../styles/home.module.css";
import { FlaskConical, Check, BookOpen, Package, GraduationCap, Users, MessageCircle, TrendingUp, Play } from "lucide-react";
import ProgramBreakdown from "~/components/ProgramBreakdown";
import BonusSection from "~/components/BonusSection";
import SeatScarcity from "~/components/SeatScarcity";
import RecentPurchaseNotification, { type NotificationData } from "~/components/RecentPurchaseNotification";
import PricingSection from "~/components/PricingSection";
import ProofSection from "~/components/ProofSection";
import SectionCTA from "~/components/SectionCTA";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": any;
    }
  }
}


// --- Constants ---
const PHASES = [
  {
    id: "phase-1",
    title: "PHASE 01 — Foundation & Clarity",
    goal: "Goal: Remove confusion.",
    modules: [
      {
        id: "module-1",
        title: "MODULE 01 — Digital Product Foundations",
        lessons: [
          "Lesson 1.1 — Introduction to IncomeCraft Labs",
          "Lesson 1.2 — What Are Digital Products",
        ],
      },
      {
        id: "module-2",
        title: "MODULE 02 — Product Selection & Market Research",
        lessons: [
          "Lesson 2.1 — How to Choose a High-Demand Product",
        ],
      },
    ],
  },
  {
    id: "phase-2",
    title: "PHASE 02 — Build Your Digital Asset",
    goal: "Goal: Create & package product properly.",
    modules: [
      {
        id: "module-3",
        title: "MODULE 03 — Creating Your Digital Product",
        lessons: [
          "Lesson 3.1 — Creating Your Digital Product with AI",
          "Lesson 3.2 — Hosting Your Digital Product",
        ],
      },
      {
        id: "module-4",
        title: "MODULE 04 — Pricing & Product Packaging",
        lessons: [
          "Lesson 4.1 — Creating a Powerful Offer Structure",
          "Lesson 4.2 — Choosing the Right Launch Price",
        ],
      },
    ],
  },
  {
    id: "phase-3",
    title: "PHASE 03 — Build Your Selling System",
    goal: "Goal: Build professional presence.",
    modules: [
      {
        id: "module-5",
        title: "MODULE 05 — Landing Page & Sales Page",
        lessons: [
          "Lesson 5.1 — Creating a High-Converting Landing Page",
        ],
      },
      {
        id: "module-6",
        title: "MODULE 06 — Marketing Assets & VSL",
        lessons: [
          "Lesson 6.1 — Creating a Video Sales Letter",
        ],
      },
    ],
  },
  {
    id: "phase-4",
    title: "PHASE 04 — Launch & Traffic",
    goal: "Goal: Start making sales.",
    modules: [
      {
        id: "module-7",
        title: "MODULE 07 — Payment Setup & Delivery",
        lessons: [
          "Lesson 7.1 — Payment Setup and Delivery",
        ],
      },
      {
        id: "module-8",
        title: "MODULE 08 — Ads & Traffic Basics",
        lessons: [
          "Lesson 8.1 — Facebook Ads Basics",
          "Lesson 8.2 — Launching Your First Ad",
          "Lesson 8.3 — Creating Ad Creatives with AI",
        ],
      },
    ],
  },
  {
    id: "phase-5",
    title: "PHASE 05 — Automation & Scaling",
    goal: "Goal: Turn it into system.",
    modules: [
      {
        id: "module-9",
        title: "MODULE 09 — Sales Funnel & Automation",
        lessons: [
          "Lesson 9.1 — Sales Funnel Automation",
        ],
      },
      {
        id: "module-10",
        title: "MODULE 10 — Scaling & Optimization",
        lessons: [
          "Lesson 10.1 — Scaling Your Digital Product",
        ],
      },
    ],
  },
];

// --- Feature Cards Data ---
const FEATURE_CARDS = [
  {
    icon: BookOpen,
    title: "Predictable Plug-&-Profit Framework",
    desc: "Follow the complete step-by-step system designed to help beginners build and launch their first digital product business without confusion.",
  },
  {
    icon: Package,
    title: "50 Million+ Trending Digital Products",
    desc: "Get access to a massive library of digital products you can study, learn from, and even resell to start faster.",
  },
  {
    icon: GraduationCap,
    title: "Complete Step-By-Step Training",
    desc: "Access the full training program including 10 modules and 60+ in-depth lessons guiding you from idea to launch.",
  },
  {
    icon: Users,
    title: "Private Community Access",
    desc: "Join a focused community where you can ask questions, share progress, and learn from others building their digital product businesses.",
  },
  {
    icon: MessageCircle,
    title: "Direct Chat Support",
    desc: "Get direct help whenever you feel stuck so you can keep moving forward without wasting time figuring things out alone.",
  },
  {
    icon: TrendingUp,
    title: "Weekly Product Opportunities",
    desc: "Discover trending digital product opportunities every week so you always know what to build or sell next.",
  },
];

function FeatureCard({ icon: Icon, title, desc, index }: { icon: React.ElementType; title: string; desc: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className={styles.featureCard}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`,
      }}
    >
      <div className={styles.featureCardIcon}>
        <Icon size={22} color="#00FF88" />
      </div>
      <h3 className={styles.featureCardTitle}>{title}</h3>
      <p className={styles.featureCardDesc}>{desc}</p>
    </div>
  );
}

function FeatureGridSection() {
  return (
    <section className={styles.featureGridSection}>
      <div className={styles.featureGridContainer}>
        {/* Label */}
        <p className={styles.featureGridLabel}>INSIDE INCOMECRAFT LABS</p>

        {/* Headline */}
        <h2 className={styles.featureGridHeadline}>
          Everything You Need To Build Your First &#8377;10,000 Digital Product System
        </h2>

        {/* Subheadline */}
        <p className={styles.featureGridSubheadline}>
          From the Predictable Plug-&-Profit Framework to product libraries, community support, and step-by-step training — everything you need to launch and sell your first digital product is included inside.
        </p>

        {/* Micro Badge */}
        <div className={styles.featureMicroBadge}>
          &#10004; ONE ENROLLMENT. COMPLETE DIGITAL PRODUCT SYSTEM.
        </div>

        {/* Card Grid */}
        <div className={styles.featureCardGrid}>
          {FEATURE_CARDS.map((card, i) => (
            <FeatureCard key={i} index={i} icon={card.icon} title={card.title} desc={card.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Notification Constants ---
const NAMES = ["Rahul", "Amit", "Vikram", "Arjun", "Rohit", "Karan", "Aditya", "Sahil", "Manish", "Ankit", "Vivek", "Sandeep", "Ajay", "Neeraj", "Varun", "Nikhil", "Tarun", "Deepak", "Rakesh", "Akash"];
const CITIES = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Jaipur", "Ahmedabad", "Lucknow", "Indore", "Chandigarh", "Kolkata", "Surat"];
const MESSAGES = [
  "just secured a spot",
  "just joined IncomeCraft Labs",
  "just grabbed a seat",
  "Plug & Profit System unlocked"
];
const TIMES = ["just now", "1 minute ago"];
const AVATAR_COLORS = ["#2ecc71", "#3498db", "#9b59b6", "#e67e22", "#e74c3c", "#1abc9c", "#f1c40f", "#27ae60"];

const getRandomElement = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
// Custom video progress bar uses the main Home component hook now


export default function Home() {
  const progressRef = useRef<HTMLDivElement>(null);

  // --- Scarcity Logic ---
  const [seatsClaimed, setSeatsClaimed] = useState(38);
  const [notification, setNotification] = useState<{
    visible: boolean;
    data: NotificationData | null;
  }>({ visible: false, data: null });

  useEffect(() => {
    // --- Wistia Progress Bar Logic ---
    (window as any)._wq = (window as any)._wq || [];
    (window as any)._wq.push({
      id: "p9oil32w2r",
      onReady: function(video: any) {
        video.bind("timechange", function(t: number) {
          const duration = video.duration();
          if (!duration) return;

          let real = t / duration;
          let fake;

          // 🔥 Fast illusion at start
          if (real < 0.15) {
            fake = real * 2.5;
          } else if (real < 0.5) {
            fake = 0.375 + (real - 0.15) * 1.2;
          } else {
            fake = 0.8 + (real - 0.5) * 0.4;
          }

          const final = Math.min(fake, 1);

          if (progressRef.current) {
            progressRef.current.style.width = final * 100 + "%";
          }
        });

        // Sync on skip
        video.bind("seek", function(t: number) {
          const percent = (t / video.duration()) * 100;
          if (progressRef.current) {
            progressRef.current.style.width = percent + "%";
          }
        });
      }
    });

    // 1. Initial Seat Randomization (37 or 38)
    const initialSeats = Math.random() > 0.5 ? 38 : 37;
    setSeatsClaimed(initialSeats);

    // Timer refs to clear on unmount
    let eventTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    let seatUpdateTimer: NodeJS.Timeout;

    const scheduleNextEvent = () => {
      // Random delay between 120s (2m) and 360s (6m)
      const delay = getRandomInt(120000, 360000);
      
      eventTimer = setTimeout(() => {
        triggerEvent();
      }, delay);
    };

    const triggerEvent = () => {
      // Generate notification data
      const name = getRandomElement(NAMES);
      const city = getRandomElement(CITIES);
      const messageAction = getRandomElement(MESSAGES);
      // The prompt structure: "Rahul from Delhi just secured a spot"
      // The component renders: "{name} from {city} {message}"
      // So messageAction works directly.
      const message = messageAction; 

      const time = getRandomElement(TIMES);
      const initial = name.charAt(0);
      const color = getRandomElement(AVATAR_COLORS);

      const newData: NotificationData = {
        name,
        city,
        message,
        time,
        initial,
        color
      };

      // Show notification
      setNotification({ visible: true, data: newData });

      // Update seats 1-2 seconds after notification appears
      seatUpdateTimer = setTimeout(() => {
        setSeatsClaimed((prev) => {
          if (prev >= 46) return prev;
          return prev + 1;
        });
      }, 1500); // 1.5s delay

      // Hide notification after 5s
      hideTimer = setTimeout(() => {
        setNotification((prev) => ({ ...prev, visible: false }));
        // Schedule next event only after this one finishes
        scheduleNextEvent();
      }, 5000);
    };

    // Start the loop
    scheduleNextEvent();

    return () => {
      clearTimeout(eventTimer);
      clearTimeout(hideTimer);
      clearTimeout(seatUpdateTimer);
    };
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <FlaskConical className={styles.navLogoIcon} />
          <span>IncomeCraft Labs</span>
        </div>
        <a href="#pricing" className={styles.navBtn}>
          Get Your Spot Now
        </a>
      </nav>

      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.sectionDark}`}>
        <div className={styles.heroBackground} />

        <div className={styles.heroContainer}>
          <div className={styles.attentionBadge}>
            <span className={styles.badgeTextTop}>
              FOR STUDENTS <span className={styles.badgeDot}>●</span> SIDE HUSTLERS
            </span>
            <span className={styles.badgeTextBottom}>
              <span className={`${styles.badgeDot} ${styles.badgeDotDesktop}`}>●</span> WORKING PROFESSIONALS
            </span>
          </div>

          <h1 className={`${styles.headlineHero} ${styles.animHeroFade}`}>
            Learn to Make Your <span className={styles.gradientHighlight}>First ₹10,000</span> Online Within Next <span className={styles.gradientHighlight}>7 Days</span>
            <br />
            With Digital Product Business
            <br />
            Using <span className={styles.gradientHighlight}>A Predictable Plug-&-Profit Framework</span>
          </h1>

          <p className={`${styles.subheadlineHero} ${styles.animHeroFade}`} style={{ animationDelay: "0.1s" }}>
            Without a big investment, building everything from scratch,
            <br />
            or guessing what product to sell.
          </p>

          <div className={`${styles.heroVideoWrapper} ${styles.animVideoReveal}`}>
            <div className={styles.videoWrapper}>
              <div id="wistia-player-container" className="videoContainer" style={{ width: "100%", height: "100%", position: "relative" }}>
                <script src="https://fast.wistia.com/player.js" async></script>
                <script src="https://fast.wistia.com/embed/p9oil32w2r.js" async type="module"></script>
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                  wistia-player[media-id='p9oil32w2r']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/p9oil32w2r/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                  }
                `,
                  }}
                />
                {React.createElement("wistia-player", {
                  "media-id": "p9oil32w2r",
                  aspect: "1.7777777777777777",
                  style: { width: "100%", height: "100%" },
                })}
              </div>

              <div className={styles.progressTrack}>
                <div className={styles.progressFill} ref={progressRef}></div>
              </div>
            </div>
          </div>

          <div className={styles.animHeroFade} style={{ animationDelay: "0.3s", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <a href="#pricing" className={`${styles.ctaButton} ${styles.heroCtaButton}`}>
              Get Your Spot Now
            </a>
            <p className={styles.ctaSubtext}>One-Time Payment • Lifetime Access • Beginner Friendly</p>
            <SeatScarcity seats={seatsClaimed} />
          </div>
        </div>
      </section>

      {/* Target Audience Section - Dark */}
      <section className={styles.sectionTarget}>
        <div className={styles.targetContainer}>
          <h2 className={styles.targetHeadline}>This Is For You If…</h2>
          <p className={styles.targetSubheadline}>
            You want to start making money online but you feel stuck because you don't know what product to sell or where to begin.
          </p>

          <div className={styles.targetBullets}>
            {[
              "You want to build your first online income stream but you don't have an audience, product, or clear plan.",
              "You are a student or beginner who wants to start earning \u20b95k\u2013\u20b915k per month online without complicated tech or big investment.",
              "You are a working professional who wants to build a side income so you're not fully dependent on a job.",
              "You\u2019ve tried watching YouTube tutorials and saving \u201cmake money online\u201d reels\u2026 but nothing actually turned into real income.",
            ].map((text, i) => (
              <div key={i} className={styles.targetBulletItem}>
                <Check className={styles.targetCheckIcon} size={24} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <a href="#pricing" className={styles.ctaButton}>
            Start Building Your Digital Income
          </a>
        </div>
      </section>

      {/* Course Curriculum - Premium Module Explorer */}
      <section
        className={`${styles.section} ${styles.sectionGlass}`}
        style={{ position: "relative", overflow: "hidden", flexDirection: "column", alignItems: "center" }}
      >
        <div className={styles.container} style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <ProgramBreakdown phases={PHASES} />
          <SectionCTA 
            text="Start Building Your Digital Product System" 
            microText="See how you can start for just ₹349 today" 
          />
        </div>
      </section>

      {/* Bonuses / Resources Section - Dark Green */}
      <BonusSection />
      <SectionCTA 
        text="Get Instant Access To All Resources" 
        microText="Everything you need is included inside one system" 
      />

      {/* Everything You Need - Glass Card Grid */}
      <FeatureGridSection />

      {/* Pricing - Dark */}
      <PricingSection seats={seatsClaimed} />

      {/* Proof / Testimonials */}
      <ProofSection />

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <FlaskConical className={styles.footerBrandIcon} />
          <span className="font-bold">IncomeCraft Labs</span>
        </div>
        <p>© 2026 IncomeCraft Labs. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#" className={styles.footerLink}>
            Terms
          </a>
          <a href="#" className={styles.footerLink}>
            Privacy
          </a>
          <a href="#" className={styles.footerLink}>
            Support
          </a>
        </div>
      </footer>
      <RecentPurchaseNotification isVisible={notification.visible} data={notification.data} />
    </div>
  );
}
