import React from "react";
import { Check, ShieldCheck, Lock } from "lucide-react";
import styles from "./PricingSection.module.css";
import SeatScarcity from "~/components/SeatScarcity";

interface PricingSectionProps {
  seats: number;
}

export default function PricingSection({ seats }: PricingSectionProps) {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.glowBackground} />

      <div className={styles.contentContainer}>
        {/* Headline */}
        <h2 className={styles.headline}>Join IncomeCraft Labs Today</h2>
        <p className={styles.subheadline}>
          Access the Plug & Profit System, digital product resources, and the exact roadmap to start building your digital income.
        </p>

        {/* Price Display */}
        <div className={styles.priceContainer}>
          <span className={styles.oldPrice}>₹4,999</span>
          <span className={styles.newPrice}>₹349</span>
        </div>

        {/* Inline Founder Notice */}
        <div className={styles.inlineFounderNotice}>
          Early access price <span className={styles.founderHighlight}>₹349</span> for the first <span className={styles.founderHighlight}>50 members</span>.<br />
          Once all spots are filled, the price increases to <span className={styles.founderHighlight}>₹999</span>.
        </div>

        <div className={styles.priceMetaDivider}>
          <span className={styles.priceMeta}>
            One-Time Payment • Lifetime Access • All Future Updates Included
          </span>
        </div>



        {/* CTA Button */}
        <a href="https://payments.cashfree.com/forms?code=income-craft-labs" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
          Secure Your Spot — ₹349
        </a>
        <div className={styles.trustLine}>
          <Lock size={14} />
          <span>Secure checkout • Instant access after payment</span>
        </div>

        {/* Live Seats Progress Bar */}
        <div className={styles.scarcityContainer}>
          <SeatScarcity seats={seats} />
        </div>

        {/* Refund Guarantee */}
        <div className={styles.refundContainer}>
          <div className={styles.refundTitle}>
            <ShieldCheck size={20} className={styles.refundIcon} />
            30-Day Implementation Guarantee
          </div>
          <p className={styles.refundText}>
            If you go through the training, follow the steps, and still feel the program did not help you understand how to start your digital product journey, simply reach out and we will refund your payment.
          </p>
        </div>
      </div>
    </section>
  );
}
