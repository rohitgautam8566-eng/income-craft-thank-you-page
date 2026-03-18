import React, { useEffect } from "react";
import styles from "../styles/thank-you.module.css";
import { MessageCircle, Mail } from "lucide-react";

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* SECTION 1 - SUCCESS MESSAGE */}
        <h1 className={styles.headline}>Payment Successful!</h1>
        <p className={styles.subtext}>
          Your IncomeCraft Labs membership has been secured.
        </p>

        {/* SECTION 2 - VIDEO INSTRUCTION */}
        <div className={styles.videoLabelBar}>
          STEP 1: WATCH THIS SHORT VIDEO ABOUT YOUR LOGIN ACCESS
        </div>

        {/* SECTION 3 - VIDEO */}
        <div className={styles.videoWrapper}>
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
          })}
        </div>

        {/* SECTION 4 - CTA */}
        <div className={styles.ctaLabel}>STEP 2: CLAIM YOUR BONUSES</div>
        <a 
          href="https://chat.whatsapp.com/L1M4k6yU8sZ21Z5mYkQ" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.ctaButton}
        >
          Join VIP WhatsApp Community Now
        </a>

        {/* SECTION 5 - SUPPORT BOX */}
        <div className={styles.supportSection}>
          <h2 className={styles.supportHeadline}>Still need help?</h2>
          <div className={styles.supportLinks}>
            <a href="https://wa.me/918368812604" target="_blank" rel="noopener noreferrer" className={styles.supportLink}>
              <MessageCircle size={20} color="#00ff88" />
              WhatsApp Support
            </a>
            <a href="mailto:support@incomecraft.in" className={styles.supportLink}>
              <Mail size={20} color="#00c2ff" />
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
