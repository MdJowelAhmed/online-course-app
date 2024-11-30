import React from "react";
import styles from "@/app/style/Testimonials.module.scss";

const Testimonials = () => {
  const testimonials = [
    {
      text: "The mindfulness courses have helped me manage stress better and find balance in my daily life.",
      name: "Kilian Murphe",
    },
    {
      text: "EduPath's courses are well-structured and offer incredible value.",
      name: "Sarah Hopkins",
    },
    {
      text: "I love the personalized routines they provide!",
      name: "Luna Karim",
    },
    {
      text: "Their holistic approach to wellness has been transformative.",
      name: "Kate Winslate",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2>Learners love EduPath. See why they rate us 4.9 out of 5</h2>
        <div className={styles.testimonialCards}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p>{item.text}</p>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
