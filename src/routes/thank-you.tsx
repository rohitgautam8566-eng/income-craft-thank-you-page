import React, { useEffect } from "react";
import styles from "../styles/thank-you.module.css";
import { PlayCircle, MessageCircle, Mail } from "lucide-react";

export default function ThankYou() {
  useEffect(() => {
    // Scroll to top automatically
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Prehead + Secure Headline */}
      <h1 className={styles.headline}>
        Payment <span className={styles.highlightGreenUnderline}>Successful!</span>
      </h1>
      <p style={{ fontSize: "18px", opacity: 0.8, marginBottom: "30px", fontWeight: "500" }}>
        Your IncomeCraft Labs membership has been secured.
      </p>

      {/* 2. Mandatory Watch Bar */}
      <div className={styles.videoLabelBar}>
        <PlayCircle size={20} />
        STEP 1. WATCH THIS SHORT VIDEO ABOUT YOUR LOGIN ACCESS
      </div>

      {/* 3. Pure Wistia Video Section */}
      <div className={styles.videoSectionWrapper}>
        <div className={styles.videoContainer}>
            <script src="https://fast.wistia.com/player.js" async></script>
            <script src="https://fast.wistia.com/embed/tdmpakz6we.js" async type="module"></script>
            <style
              dangerouslySetInnerHTML={{
                __html: `
              wistia-player[media-id='tdmpakz6we']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/tdmpakz6we/swatch');
                display: block;
                filter: blur(5px);
                padding-top: 56.25%;
              }
            `,
              }}
            />
            {React.createElement("wistia-player", {
              "media-id": "tdmpakz6we",
              aspect: "1.7777777777777777",
              style: { width: "100%", height: "100%" },
            })}
        </div>
      </div>

      {/* 4. Action CTA */}
      <div className={styles.ctaWrapper}>
        <div style={{ marginBottom: "16px", fontWeight: "700", opacity: 0.6, fontSize: "14px", letterSpacing: "1px" }}>
          STEP 2. CLAIM YOUR BONUSES
        </div>
        <a href="https://chat.whatsapp.com/L1M4k6yU8sZ21Z5mYkQ" target="_blank" rel="noopener noreferrer" className={styles.step2Button}>
          Join VIP WhatsApp Community Now
        </a>
      </div>

      {/* 5. Direct Support Block */}
      <div className={styles.supportSection}>
        <h2 className={styles.supportHeadline}>Still need help?</h2>
        <div className={styles.supportLinks}>
          <a href="https://wa.me/918368812604" target="_blank" rel="noopener noreferrer" className={styles.supportLink}>
            <MessageCircle size={24} color="#00FF88" />
            Chat on WhatsApp
          </a>
          <a href="mailto:support@incomecraft.in" className={styles.supportLink}>
            <Mail size={24} color="#ff9000" />
            Email Support Team
          </a>
        </div>
      </div>
    </div>
  );
}
