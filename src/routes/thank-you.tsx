import React, { useEffect } from "react";
import styles from "../styles/thank-you.module.css";
import { Check, Play, FlaskConical } from "lucide-react";

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* BRANDING HEADER */}
      <div className={`${styles.navbar} ${styles.fadeIn}`}>
        <FlaskConical className={styles.logoIcon} size={24} />
        <span className={styles.logo}>IncomeCraft Labs</span>
      </div>

      <div className={styles.container}>
        {/* 1 - TOP SUCCESS BAR */}
        <div className={styles.topSuccessBar}>
          <Check size={16} strokeWidth={4} />
          Payment Done! Welcome to IncomeCraft Labs
        </div>

        {/* 2 - MAIN HEADLINE */}
        <div className={`${styles.headlineWrapper} ${styles.fadeIn}`}>
          <div className={styles.mainHeadline}>
            First:{" "}
            <span className={styles.highlight}>
              Watch This Short Guide Video
            </span>
            <br />
            To See How You Can{" "}
            <span className={styles.gradientText}>Get Your Access</span>
            <br />
            And{" "}
            <span className={styles.gradientText}>Join The Community</span>{" "}
            Within A Few Minutes
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
        <div className={`${styles.videoWrapper} ${styles.fadeIn}`} style={{ animationDelay: '0.2s' }}>
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
          className={`${styles.ctaButton} ${styles.fadeIn}`}
          style={{ animationDelay: '0.4s' }}
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32} fill="#00ff88">
                  <path d="M12.031 0C5.399 0 0 5.405 0 12.046c0 2.128.556 4.197 1.611 6.02L.032 24l6.096-1.597A11.968 11.968 0 0 0 12.031 24c6.626 0 12.022-5.4 12.022-12.031S18.656 0 12.031 0zm6.186 17.159c-.267.755-1.531 1.455-2.094 1.543-.538.083-1.187.126-3.328-.755-2.583-1.074-4.228-3.705-4.353-3.873-.13-.172-1.042-1.385-1.042-2.641 0-1.256.65-1.879.882-2.13.23-.25.502-.313.67-.313.17 0 .337.003.486.012.164.009.38-.063.593.447.228.547.886 2.152.964 2.308.08.156.128.341.026.541-.1.2-.153.322-.303.498-.152.176-.32.378-.456.516-.145.148-.299.314-.131.603.167.288.742 1.229 1.599 1.993 1.107.985 2.023 1.288 2.316 1.432.292.144.464.12.636-.076.17-.197.74-.863.938-1.161.196-.296.394-.246.663-.146.269.102 1.706.804 1.997.949.292.146.486.218.556.342.068.125.068.72-.2 1.475z" />
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32} fill="#ff3b3b">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
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
