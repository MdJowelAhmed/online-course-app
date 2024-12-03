"use client";
import { useRef } from "react";
import CourseCard from "./CourseCard";
import styles from "@/app/style/Course.module.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "@/app/style/globals.scss";

const CourseInfo = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const courses = [
    {
      title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
      category: "Beginner | Nutrition and Diet",
      coverImage: "/cover1.png",
      rating: 4.9,
      reviews: 566,
      duration: "6h 34m",
      lessons: 3,
      price: "$40",
      author: "Kilian Murphe",
      image: "/profile1.png",
    },
    {
      title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
      category: "Beginner | Nutrition and Diet",
      coverImage: "/cover2.png",
      rating: 4.9,
      reviews: 566,
      duration: "6h 34m",
      lessons: 3,
      price: "$40",
      author: "Kilian Murphe",
      image: "/profile2.png",
    },
    {
      title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
      category: "Beginner | Nutrition and Diet",
      coverImage: "/cover3.png",
      rating: 4.9,
      reviews: 566,
      duration: "6h 34m",
      lessons: 3,
      price: "$40",
      author: "Kilian Murphe",
      image: "/profile3.png",
    },
    {
      title: "Parenting in the Digital Age: Navigating Screen Time",
      category: "Intermediate | Health and Wellness",
      coverImage: "/cover4.png",
      rating: 4.9,
      reviews: 456,
      duration: "6h 34m",
      lessons: 3,
      price: "$50",
      author: "Sarah Hopkins",
      image: "/profile4.png",
    },
    {
      title: "Holistic Health: Integrating Mind, Body, and Spirit",
      category: "Beginner | Nutrition and Diet",
      coverImage: "/cover1.png",
      rating: 4.9,
      reviews: 389,
      duration: "6h 34m",
      lessons: 3,
      price: "Enrolled",
      author: "Luna Karim",
      image: "/profile1.png",
    },
    {
      title: "Introduction to Health and Nutrition",
      category: "Beginner | Nutrition and Diet",
      rating: 4.9,
      coverImage: "/cover2.png",
      reviews: 566,
      duration: "6h 34m",
      lessons: 3,
      price: "$40",
      author: "Kate Winslate",
      image: "/profile2.png",
    },
  ];

  return (
    <div className={styles.containerC}>
      <div className={`${styles.header} container`}>
        <div className={styles.courseTitle}>
          <h1>Our Popular Courses</h1>
          <p>
            By taking proactive steps to nurture mental health, we can enhance
            our quality of life,
            <br /> build resilience, and foster a sense of inner peace and
            balance.
          </p>
        </div>
        <div className={styles.arrowButtons}>
          <button onClick={() => handleScroll("left")}>
            <IoIosArrowBack size={24} />
          </button>
          <button onClick={() => handleScroll("right")}>
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>

      <div className={styles.extraM}>
        <div className={styles.sliderWrapper} ref={sliderRef}>
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
