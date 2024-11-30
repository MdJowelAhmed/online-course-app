// components/CourseCard.js
import Image from 'next/image';
import styles from '@/app/style/Course.module.scss';

export default function CourseCard({ course }) {
  return (
    <div className={styles.card}>
      <Image 
      src={course.image} 
      alt={course.title} 
      className={styles.cardImage} 
      height={200}
      width={200}/>
      <div className={styles.cardContent}>
        <span className={styles.category}>{course.category}</span>
        <h3>{course.title}</h3>
        <p>
          ⭐ {course.rating} ({course.reviews})
        </p>
        <p>
          ⏱ {course.duration} | 📚 {course.lessons} Lessons
        </p>
        <div className={styles.footer}>
          <p className={styles.author}>{course.author}</p>
          <p className={styles.price}>{course.price}</p>
        </div>
      </div>
    </div>
  );
}
