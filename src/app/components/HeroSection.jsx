import React from "react";
import styles from "@/app/style/HeroSection.module.scss";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <div className={styles.rating}>
          <span>⭐ 4.9 (566)</span>
        </div>
        <h1>#1 Platform Powering Health and Wellness</h1>
        <p>
          We're restoring home as the primary place of personal well-being.
          Health is not just about what you're eating. It's also about what
          you're thinking and saying.
        </p>
        <div className={styles.buttons}>
          <button className={styles.browseButton}>Browse Courses</button>
          <button className={styles.getStartedButton}>Get Started</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image 
        src="/hero-image.png" 
        alt="Health and Wellness" 
        height={200}
        width={200}/>
        <div className={styles.stats}>
          <h2>12,000+</h2>
          <p>Happy learners rely on us regularly</p>
          <span>Find your wellbeing</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
