import type { HeaderProps } from "./schema";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

export default function HeaderApp({
  countdownSeconds,
  affirmation,
}: HeaderProps) {
  const [secondsLeft, setSecondsLeft] = useState(countdownSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prevSeconds) => Math.max(prevSeconds - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        Nerest Tutorial
      </a>
      <nav className={styles.nav}>
        <div>{affirmation}</div>
      </nav>
      <div className={styles.countdown}>{secondsLeft} seconds left</div>
    </header>
  );
}
