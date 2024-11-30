import React from "react";
import styles from "@/app/style/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.navLinks}>
        <li>Courses</li>
        <li>Instructors</li>
        <li>Blogs</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className={styles.loginButton}>Login</button>
    </nav>
  );
};

export default Navbar;
