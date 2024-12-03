"use client";
import React, { useState } from "react";
import styles from "@/app/style/Navbar.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.logo}>HealthHive</div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={`${styles.navLinks} ${
          isMenuOpen ? styles.navLinksActive : ""
        }`}
      >
        <li className={styles.dropdown}>
          Courses <IoIosArrowDown />
          <ul className={styles.subMenu}>
            <li>Web Development</li>
            <li>Data Science</li>
            <li>Graphic Design</li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          Instructors <IoIosArrowDown />
          <ul className={styles.subMenu}>
            <li>Jowel </li>
            <li>Ahmed</li>
            <li>Kamal</li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          Blogs <IoIosArrowDown />
          <ul className={styles.subMenu}>
            <li>Tech News</li>
            <li>Tutorials</li>
            <li>Updates</li>
          </ul>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.rightSection}>
        <HiOutlineShoppingBag className={styles.shoppingIcon} />
        <button className={styles.loginButton}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
