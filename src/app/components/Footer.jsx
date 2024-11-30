import React from "react";
import styles from "@/app/style/Footer.module.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.branding}>
            <h3>EduPath</h3>
            <p>Your journey to holistic learning and mindfulness starts here.</p>
          </div>
          <div className={styles.quickLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQs</a></li>
            </ul>
          </div>
          <div className={styles.socialMedia}>
            <h4>Connect with Us</h4>
            <div className={styles.icons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <p>© 2024 EduPath. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
