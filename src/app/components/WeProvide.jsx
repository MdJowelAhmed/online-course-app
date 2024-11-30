import Image from "next/image";
import React from "react";

const WeProvide = () => {
  return (
    <div>
      <section className={styles.weProvide}>
        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <h2>We provide...</h2>
            <ul className={styles.featuresList}>
              <li>Personalized routine</li>
              <li>Follow-up after completing courses</li>
              <li className={styles.highlighted}>
                <span className={styles.checkIcon}>✔</span> Access to additional
                resources
                <p className={styles.description}>
                  We offer access to a variety of additional resources to
                  enhance your experience, including exclusive tools, guides,
                  and support materials designed to help you achieve your goals
                  more effectively.
                </p>
              </li>
              <li>Free community support</li>
            </ul>
            <button className={styles.learnMoreBtn}>
              Learn More About Our Services
            </button>
          </div>
          <div className={styles.imageContent}>
            <Image 
            src="/WeProvide.png" 
            alt="Mother and Daughter" 
            height={200}
            width={200}/>
            <div className={styles.badgeIcon}>✔</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeProvide;
