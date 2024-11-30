import { FaInstagram, FaFacebook, FaDiscord, FaTimes } from "react-icons/fa";
import styles from "@/app/style/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Categories Section */}
        <div>
          <h4>Categories</h4>
          <ul>
            <li>Nutrition and diet</li>
            <li>Fitness training</li>
            <li>Mindfulness</li>
            <li>Mental health</li>
            <li>Personal growth</li>
            <li>Social well-being</li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h4>About</h4>
          <ul>
            <li>About us</li>
            <li>Our partners</li>
            <li>Investors</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4>Resources</h4>
          <ul>
            <li>FAQ</li>
            <li>Refund policies</li>
            <li>Terms and conditions</li>
            <li>Cookie</li>
            <li>Latest posts</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4>Support</h4>
          <ul>
            <li>Get in touch</li>
            <li>Visit our forum</li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className={styles.socialMedia}>
        <h4>Join our official channels</h4>
        <div className={styles.icons}>
          <FaInstagram />
          <FaTimes />
          <FaFacebook />
          <FaDiscord />
        </div>
      </div>

      {/* Copyright */}
      <p>© 2024 EduPath. All rights reserved</p>
    </footer>
  );
};

export default Footer;
