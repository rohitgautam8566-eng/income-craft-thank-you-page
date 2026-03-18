import React, { useEffect } from "react";
import styles from "../styles/thank-you.module.css";
import { MessageCircle, Mail, Check, Play, FlaskConical } from "lucide-react";

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* BRANDING HEADER */}
      <div className={styles.headerBrand}>
        <FlaskConical className={styles.brandIcon} size={24} />
        IncomeCraft Labs
      </div>

      <div className={styles.container}>
        {/* 1 - TOP SUCCESS BAR */}
        <div className={styles.topSuccessBar}>
          <Check size={16} strokeWidth={4} />
          Payment Done! Welcome to IncomeCraft Labs
        </div>

        {/* 2 - MAIN HEADLINE */}
        <div className={styles.headlineContainer}>
          <div className={styles.headlineFirstLine}>
            First: <span className={styles.highlightYellow}>Watch This Short Guide Video</span>
          </div>
          <div className={styles.headlineSecondLine}>
            To See How You Can Get Your Access
            <br />
            And Join The Community Within A Few Minutes
          </div>
        </div>

        {/* 3 - STEP 1 LABEL */}
        <div className={styles.step1LabelWrapper}>
          <div className={styles.step1Label}>
            <Play size={14} fill="black" />
            STEP 1: WATCH THIS QUICK GUIDE VIDEO
          </div>
        </div>

        {/* 4 - VIDEO SECTION */}
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

        {/* 5 - STEP 2 CTA */}
        <a 
          href="https://chat.whatsapp.com/L1M4k6yU8sZ21Z5mYkQ" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.ctaButton}
        >
          STEP 2: "CLICK HERE" TO JOIN THE COMMUNITY!
        </a>

        {/* 6 - SUPPORT SECTION */}
        <div className={styles.supportSection}>
          <p className={styles.supportText}>
            If you face any issue while joining or accessing your account, don't worry — we're here to help you.<br/>Please contact us here... :)
          </p>
          <div className={styles.supportLinkContainer}>
            {/* WhatsApp Card */}
            <div className={styles.supportCard}>
              <div className={styles.supportIconWrapper}>
                <MessageCircle size={32} color="#00ff88" fill="#00ff88" stroke="#02140f" strokeWidth={1} />
              </div>
              <div className={styles.supportDetails}>
                <div className={styles.supportNumber}>+91 85760 36794</div>
                <a href="https://wa.me/918576036794" target="_blank" rel="noopener noreferrer" className={styles.supportActionBtn}>
                  WhatsApp Support
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className={styles.supportCard}>
              <div className={styles.supportIconWrapper}>
                <Mail size={32} color="#ff3b3b" fill="#ff3b3b" stroke="#fff" strokeWidth={1.5} />
              </div>
              <div className={styles.supportDetails}>
                <div className={styles.supportNumber} style={{fontSize: "14px"}}>support.incomecraft<br/>@gmail.com</div>
                <a href="mailto:support.incomecraft@gmail.com" className={styles.supportActionBtn}>
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7 - FOOTER */}
      <footer className={styles.footerArea}>
        <div className={styles.footerBrandContainer}>
          <FlaskConical className={styles.brandIcon} size={20} />
          IncomeCraft Labs
        </div>
        <div>© 2026 IncomeCraft Labs. All rights reserved.</div>
        <div className={styles.footerLinks}>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  );
}
