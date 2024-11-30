import React from "react";
import testimonialsStyles from "@/app/style/Testimonials.module.scss";

const Testimonials = () => {
  return (
    <div>
      <section className={testimonialsStyles.testimonials}>
        <h2>Learners love EduPath. See why they rate us 4.9 out of 5</h2>
        <div className={testimonialsStyles.testimonialCards}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={testimonialsStyles.testimonialCard}>
              <p>
                The mindfulness courses have helped me manage stress better and
                find balance in my daily life. The guided meditations are a
                highlight!
              </p>
              <h3>Kilian Murphe</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
