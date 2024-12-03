import Image from "next/image";
import styles from "@/app/style/Course.module.scss";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { MdMenuBook, MdCardMembership } from "react-icons/md";

export default function CourseCard({ course }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHoverEffect}>
        <AiOutlineHeart className={styles.loveIcon} />
        <MdCardMembership className={styles.cardIcon} />
      </div>
      <Image
        src={course.coverImage}
        alt={course.title}
        className={styles.cardImage}
        height={200}
        width={300}
      />
      <div className={styles.cardContent}>
        <span className={styles.category}>{course.category}</span>
        <h3>{course.title}</h3>
        
        <div className={styles.rating}>
          <div>
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <FaStarHalfStroke size={20} />
          </div>
          <p>4.9 (566)</p>
        </div>
        <div className={styles.clock}>
          <p>
            <FaRegClock /> {course.duration}
          </p>
          <p>
            <MdMenuBook /> {course.lessons} Lessons
          </p>
        </div>

        <hr />

        <div className={styles.footer}>
          <div className={styles.authorC}>
            <Image
              src={course.image}
              alt={course.title}
              height={40}
              width={40}
              className={styles.authorProfile}
            />
            <p className={styles.author}>{course.author}</p>
          </div>
          <p className={styles.price}>{course.price}</p>
        </div>
      </div>
    </div>
  );
}
