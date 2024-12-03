import React from "react";
import styles from "@/app/style/Testimonials.module.scss";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      text: "It's not just about physical health but mental and emotional too.",
      name: "Luna Karim",
      avatar: "/profile1.png",
    },
    {
      text: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! ",
      name: "Kilian Murphe",
      avatar: "/profile4.png",
    },
    {
      text: "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch .",
      name: "Sarah Hopkins",
      avatar: "/profile2.png",
    },
    {
      text: "It's not just about physical health but mental and emotional well-being too.",
      name: "Luna Karim",
      avatar: "/profile4.png",
    },
    {
      text: "I love the flexibility of the courses. I can learn at my own pace and revisit the material  I need to.",
      name: "Kate Winslate",
      avatar: "/profile1.png",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div>
        <h2 className={styles.heading}>
          Learners love EduPath. See why they rate us 4.9 out of 5
        </h2>
        <div className={styles.testimonialCards}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.avatarContainer}>
                <Image
                  src={item.avatar}
                  alt={`${item.name}'s avatar`}
                  className={styles.avatar}
                  height={30}
                  width={30}
                />
                <h3 className={styles.authorName}>{item.name}</h3>
                <div className={styles.quoteMark}>“</div>
              </div>
              <p className={styles.quote}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Circle Indicator */}
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={`${styles.circle} bgCircle`}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
