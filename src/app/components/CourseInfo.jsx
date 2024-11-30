// pages/index.js
import styles from '@/app/style/Course.module.scss';
import CourseCard from '../components/CourseCard';

export default function CourseInfo() {
  const courses = [
    {
      title: 'Foundation of Sleep: Sleep Science and Sleep Disorders',
      category: 'Beginner | Nutrition and Diet',
      rating: 4.9,
      reviews: 566,
      duration: '6h 34m',
      lessons: 3,
      price: '$40',
      author: 'Kilian Murphe',
      image: '/image 28.png', // Replace with your image
    },
    {
      title: 'Parenting in the Digital Age: Navigating Screen Time',
      category: 'Intermediate | Health and Wellness',
      rating: 4.9,
      reviews: 456,
      duration: '6h 34m',
      lessons: 3,
      price: '$50',
      author: 'Sarah Hopkins',
      image: '/image 28.png', // Replace with your image
    },
    {
      title: 'Holistic Health: Integrating Mind, Body, and Spirit',
      category: 'Beginner | Nutrition and Diet',
      rating: 4.9,
      reviews: 389,
      duration: '6h 34m',
      lessons: 3,
      price: 'Enrolled',
      author: 'Luna Karim',
      image: '/image 28.png', // Replace with your image
    },
    {
      title: 'Introduction to Health and Nutrition',
      category: 'Beginner | Nutrition and Diet',
      rating: 4.9,
      reviews: 566,
      duration: '6h 34m',
      lessons: 3,
      price: '$40',
      author: 'Kate Winslate',
      image: '/image 28.png', // Replace with your image
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Our popular courses</h1>
      <p>
        By taking proactive steps to nurture mental health, we can enhance our quality of life, build resilience, and foster a sense of inner peace and balance.
      </p>
      <div className={styles.courseGrid}>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}
