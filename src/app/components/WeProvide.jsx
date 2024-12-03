import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa"; // For checkmark icon
import styles from "@/app/style/WeProvide.module.scss";
import { FaLeaf } from "react-icons/fa6";

const WeProvide = () => {
  return (
    <section className={styles.weProvide}>
      <div className="container">
        <div className={styles.contentContainer}>
          {/* Text Section */}
          <div className={styles.textContent}>
            <h2>We provide...</h2>
            <ul className={styles.featuresList}>
              <li>
                <FaCheckCircle className={styles.checkIcon} />
                Personalized routine
              </li>
              <li>
                <FaCheckCircle className={styles.checkIcon} />
                Follow-up after completing courses
              </li>
              <hr />
              <li className={styles.active}>
                <FaCheckCircle className={`${styles.third} `} />

                <div>
                  <p>Access to additional resources</p>
                  <p className={styles.description}>
                    {" "}
                    We offer access to a variety of additional resources to{" "}
                    <br /> enhance your experience, including exclusive tools,
                    guides, <br /> and support materials designed to help you{" "}
                    <br /> achieve your goals more effectively.
                  </p>
                </div>
              </li>
              <hr />
              <li>
                <FaCheckCircle className={styles.checkIcon} />
                Free community support
              </li>
            </ul>
            <button className={styles.learnMoreBtn}>
              Learn More About Our Services
            </button>
          </div>

          {/* Image Section */}
          <div className={styles.imageContent}>
            <Image
              src="/WeProvide.png" // Replace with the actual image path
              alt="Mother and Daughter"
              height={600}
              width={621}
              className={styles.responsiveImage}
            />
            <div className={styles.circleIcon}>
              <Image
                src="/vector.png"
                alt="vectore image"
                height={40}
                width={40}
                className={styles.icon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeProvide;
