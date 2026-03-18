import React, { useEffect, useRef, useState } from "react";
import styles from "./ProofSection.module.css";
import { useInView } from "framer-motion";
import { Play } from "lucide-react";
import SectionCTA from "./SectionCTA";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": any;
    }
  }
}

export default function ProofSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasStarted(true);
    }
  }, [inView]);

  return (
    <section ref={ref} className={`${styles.section} ${hasStarted ? styles.inView : ""}`}>
      <div className={styles.container}>
        {/* Main Header */}
        <div className={styles.headerBlock}>
          <h2 className={styles.mainHeadline}>Real Results From Clients I’ve Worked With</h2>
          <p className={styles.subheadline}>
            These are real dashboards, payment screenshots, and testimonials from content creators I worked with directly while helping them build and launch their digital product systems.
          </p>
        </div>

        {/* Proof Grid */}
        <div className={styles.proofGrid}>
          {/* Card 1 - Video Testimonial 1 */}
          <div className={`${styles.proofCard} ${hasStarted ? styles.animIn : ""}`} style={{ animationDelay: "120ms" }}>
            <div className={styles.cardInner}>
              <div className={styles.playOverlay}>
                <Play fill="currentColor" size={24} />
              </div>
              <script src="https://fast.wistia.com/player.js" async></script>
              <script src="https://fast.wistia.com/embed/uuxwdj34va.js" async type="module"></script>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    wistia-player[media-id='uuxwdj34va']:not(:defined) {
                      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/uuxwdj34va/swatch');
                      display: block;
                      filter: blur(5px);
                      padding-top:56.56%;
                    }
                  `,
                }}
              />
              {React.createElement("wistia-player", {
                "media-id": "uuxwdj34va",
                aspect: "1.7679558011049723",
              })}
            </div>
            <div className={styles.cardTitle}>Client Result</div>
          </div>

          {/* Card 2 - Video Testimonial 2 (Vertical) */}
          <div className={`${styles.proofCard} ${hasStarted ? styles.animIn : ""}`} style={{ animationDelay: "240ms" }}>
            <div className={styles.cardInner}>
              <div className={styles.playOverlay}>
                <Play fill="currentColor" size={24} />
              </div>
              <script src="https://fast.wistia.com/player.js" async></script>
              <script src="https://fast.wistia.com/embed/y1w94lcmuv.js" async type="module"></script>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    wistia-player[media-id='y1w94lcmuv']:not(:defined) {
                      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/y1w94lcmuv/swatch');
                      display: block;
                      filter: blur(5px);
                      padding-top:178.06%;
                    }
                  `,
                }}
              />
              {React.createElement("wistia-player", {
                "media-id": "y1w94lcmuv",
                aspect: "0.5616224648985959",
              })}
            </div>
            <div className={styles.cardTitle}>Creator Testimonial</div>
          </div>

          {/* Card 3 - Video Testimonial 3 */}
          <div className={`${styles.proofCard} ${hasStarted ? styles.animIn : ""}`} style={{ animationDelay: "360ms" }}>
            <div className={styles.cardInner}>
              <div className={styles.playOverlay}>
                <Play fill="currentColor" size={24} />
              </div>
              <script src="https://fast.wistia.com/player.js" async></script>
              <script src="https://fast.wistia.com/embed/ljqrjlpfi7.js" async type="module"></script>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    wistia-player[media-id='ljqrjlpfi7']:not(:defined) {
                      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/ljqrjlpfi7/swatch');
                      display: block;
                      filter: blur(5px);
                      padding-top:56.25%;
                    }
                  `,
                }}
              />
              {React.createElement("wistia-player", {
                "media-id": "ljqrjlpfi7",
                aspect: "1.7777777777777777",
              })}
            </div>
            <div className={styles.cardTitle}>Client Result</div>
          </div>

          {/* Card 4 - Image Result 1 */}
          <div className={`${styles.proofCard} ${hasStarted ? styles.animIn : ""}`} style={{ animationDelay: "480ms" }}>
            <div className={styles.cardInner}>
              <img src="/images/result1.jpg" alt="Digital Product Sales Result" className={styles.proofImage} />
            </div>
            <div className={styles.cardTitle}>Digital Product Sales Result</div>
          </div>

          {/* Card 5 - Image Result 2 */}
          <div className={`${styles.proofCard} ${hasStarted ? styles.animIn : ""}`} style={{ animationDelay: "600ms" }}>
            <div className={styles.cardInner}>
              <img src="/images/result2.jpg" alt="Client Sales Dashboard" className={styles.proofImage} />
            </div>
            <div className={styles.cardTitle}>Client Sales Dashboard</div>
          </div>
        </div>

        {/* Section Footer Micro Text */}
        <p className={styles.trustLine}>
          These results come from creators I personally worked with while helping them launch and sell digital products.
        </p>

        <SectionCTA 
          text="Start Your Digital Product Journey Today" 
          microText="Follow the same system used to generate these results" 
        />

        {/* --- Own Results Section --- */}
        <div className={styles.ownHeaderBlock}>
          <h2 className={styles.ownHeadline}>My Own Results From Selling Digital Products</h2>
          <p className={styles.ownSubheadline}>
            These are real results from digital products I've personally sold using the same systems taught inside IncomeCraft Labs.
          </p>
        </div>

        <div className={styles.proofGrid}>
          {/* Own Result 1 - Video Result */}
          <div className={`${styles.proofCard} ${hasStarted ? styles.animIn : ""}`} style={{ animationDelay: "120ms" }}>
            <div className={styles.cardInner}>
              <div className={styles.playOverlay}>
                <Play fill="currentColor" size={24} />
              </div>
              <script src="https://fast.wistia.com/player.js" async></script>
              <script src="https://fast.wistia.com/embed/1mdci6nv79.js" async type="module"></script>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    wistia-player[media-id='1mdci6nv79']:not(:defined) {
                      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/1mdci6nv79/swatch');
                      display: block;
                      filter: blur(5px);
                      padding-top:56.56%;
                    }
                  `,
                }}
              />
              {React.createElement("wistia-player", {
                "media-id": "1mdci6nv79",
                aspect: "1.7679558011049723",
              })}
            </div>
          </div>

          {/* Own Result 2 - Vertical Video Result */}
          <div className={`${styles.proofCard} ${hasStarted ? styles.animIn : ""}`} style={{ animationDelay: "240ms" }}>
            <div className={styles.cardInner}>
              <div className={styles.playOverlay}>
                <Play fill="currentColor" size={24} />
              </div>
              <script src="https://fast.wistia.com/player.js" async></script>
              <script src="https://fast.wistia.com/embed/974lix68d7.js" async type="module"></script>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    wistia-player[media-id='974lix68d7']:not(:defined) {
                      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/974lix68d7/swatch');
                      display: block;
                      filter: blur(5px);
                      padding-top:180%;
                    }
                  `,
                }}
              />
              {React.createElement("wistia-player", {
                "media-id": "974lix68d7",
                aspect: "0.5555555555555556",
              })}
            </div>
          </div>

          {/* Own Result 3 - Screenshot Image */}
          <div className={`${styles.proofCard} ${hasStarted ? styles.animIn : ""}`} style={{ animationDelay: "360ms" }}>
            <div className={styles.cardInner}>
              <img src="/images/own_result.jpg" alt="Single Day Sales" className={styles.proofImage} />
            </div>
            <div className={styles.ownCaption}>Single Day Sales</div>
          </div>
        </div>

        {/* Own Results Footer Micro Text */}
        <p className={styles.trustLine}>
          These results are from digital products sold using the same system taught inside IncomeCraft Labs.
        </p>

        <SectionCTA 
          text="Learn The System Behind These Results" 
          microText="Access the complete step-by-step framework" 
        />
      </div>
    </section>
  );
}
