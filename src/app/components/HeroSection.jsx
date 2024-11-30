import React from "react";
import styles from "@/app/style/HeroSection.module.scss";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.heroText}>
        <h1>#1 Platform Powering Health and Wellness</h1>
        <p>We are restoring home as the primary place of personal well-being.</p>
        <div className={styles.buttons}>
          <button className={styles.browseButton}>Browse Courses</button>
          <button className={styles.getStartedButton}>Get Started</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image src="/hero-image.png" alt="Health" height={400} width={400} />
      </div>
    </section>
  );
};

export default HeroSection;
