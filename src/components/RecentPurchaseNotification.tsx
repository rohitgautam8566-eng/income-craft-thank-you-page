import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./RecentPurchaseNotification.module.css";

// --- Types ---
export interface NotificationData {
  name: string;
  city: string;
  message: string;
  time: string;
  initial: string;
  color: string;
}

interface RecentPurchaseNotificationProps {
  isVisible: boolean;
  data: NotificationData | null;
}

const InnerContent = ({ data }: { data: NotificationData }) => (
  <>
    <div className={styles.avatar} style={{ backgroundColor: data.color }}>
      {data.initial}
    </div>
    <div className={styles.content}>
      <div className={styles.message}>
        <span className={styles.name}>{data.name}</span> from {data.city} {data.message}
      </div>
      <div className={styles.meta}>
        Joined IncomeCraft Labs • {data.time}
      </div>
    </div>
  </>
);

export default function RecentPurchaseNotification({ isVisible, data }: RecentPurchaseNotificationProps) {
  return (
    <AnimatePresence>
      {isVisible && data && (
        <motion.div
          className={styles.notificationCard}
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
           <InnerContent data={data} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
