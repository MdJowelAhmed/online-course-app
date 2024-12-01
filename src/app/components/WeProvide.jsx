import Image from "next/image";
import styles from "@/app/style/WeProvide.module.scss";

const WeProvide = () => {
  return (
    <div>
      <section className={styles.weProvide}>
        <div className="container">
          <div className={styles.contentContainer}>
            <div className={styles.textContent}>
              <h2>We provide...</h2>
              <ul className={styles.featuresList}>
                <li>Personalized routine</li>
                <li>Follow-up after completing courses</li>
                <li className={styles.highlighted}>
                  <span>✔ Access to additional resources</span>
                  <p className={styles.description}>
                    We offer exclusive tools, guides, and materials to help you
                    achieve your goals.
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
                height={400}
                width={400}
              />
              <div className={styles.badgeIcon}>✔</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeProvide;
