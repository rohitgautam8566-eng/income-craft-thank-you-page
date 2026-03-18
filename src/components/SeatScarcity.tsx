import React from "react";
import styles from "./SeatScarcity.module.css";

interface SeatScarcityProps {
  seats?: number;
}

export default function SeatScarcity({ seats = 38 }: SeatScarcityProps) {
  const totalSeats = 50;
  // Ensure we don't exceed max limit in display, though logic should handle it
  const displaySeats = Math.min(seats, 46);
  const progressPercentage = (displaySeats / totalSeats) * 100;
  const remainingSeats = totalSeats - displaySeats;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.seatsCount}>
          <span className={styles.highlight}>{displaySeats}</span> / {totalSeats} Seats Claimed
        </span>
        <div className={styles.status}>
          <span className={styles.statusDot}></span>
          Live
        </div>
      </div>

      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${progressPercentage}%`, transition: "width 0.8s ease-out" }}
        ></div>
      </div>

      <div className={styles.footer}>
        Only <span className={styles.highlight}>{remainingSeats}</span> spots left before price increases to ₹999
      </div>
    </div>
  );
}
