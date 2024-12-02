import React from "react";
import styles from "@/app/style/HeroSection.module.scss";
import "@/app/style/globals.scss";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";


const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.containerH} container`} >
        {/* Text Section */}
        <div className={styles.textSection}>
          <div className={styles.rating}>
            {/* React Icons */}
            <div>
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <FaStarHalfStroke size={20} />
            </div>
            <p>4.9 (566)</p>
          </div>
          <h1>
            #1 Platform <br /> Powering Health <br /> and Wellness
          </h1>

          <h3>
            We are restoring home as the primary place of personal well-being.
          </h3>
          <p>
            Health is not just about what you are eating. It is also about what
            you are thinking and saying.
          </p>
          <div className={styles.buttons}>
            <button className={styles.browseButton}>Browse Courses</button>
            <button className={styles.getStartedButton}>Get Started</button>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/hero-image.png"
              alt="Wellness illustration"
              className={styles.image}
              height={760}
              width={648}
            />
              {/* Circle with Leaf Icon */}
        <div className={styles.circleIcon}>
          <FaLeaf className={styles.icon} />
        </div>
            {/* Absolute Positioned Stats */}
            <div className={styles.stats}>
              <div className={styles.number}>
                <h2>12,000+</h2>
                <p>
                  Happy learners rely on <br />
                  us regularly
                </p>
              </div>
              <div className={styles.text}>
                <h2>Find your wellbeing</h2>
                <p className={styles}>
                  By prioritizing self-care and making informed choices,
                  <br /> one can enhance their overall quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
