import React from "react";
import styles from "@/app/style/Footer.module.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Links Section */}
        <div className={styles.linksGrid}>
          <div>
            <h4>Categories</h4>
            <ul>
              <li>
                <a href="#">Nutrition and diet</a>
              </li>
              <li>
                <a href="#">Fitness training</a>
              </li>
              <li>
                <a href="#">Mindfulness</a>
              </li>
              <li>
                <a href="#">Mental health</a>
              </li>
              <li>
                <a href="#">Personal growth</a>
              </li>
              <li>
                <a href="#">Social well-being</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>About</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our partners</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Refund policies</a>
              </li>
              <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li>
                <a href="#">Cookie</a>
              </li>
              <li>
                <a href="#">Latest posts</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Get in touch</a>
              </li>
              <li>
                <a href="#">Visit our forum</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        {/* Social Media Section */}
        <div className={styles.socialMediaSection}>
          <h4>Join our official channels</h4>
          <div className={styles.icons}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
        <hr />

        {/* Footer Bottom Section */}
        <p className={styles.footerBottom}>
          © 2024 EduPath. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
