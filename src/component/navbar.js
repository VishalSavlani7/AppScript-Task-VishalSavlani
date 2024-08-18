"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.bodyStyle}>
      <nav className={styles.navbar}>
        <div className={styles.topStrip}>
          <div className={styles.stripContent}>
            Welcome Ladies & Gentlemen to my store.
          </div>
        </div>

        <div className={styles.middleSection}>
          <button className={styles.menuToggle} onClick={toggleMenu}>
            &#9776;
          </button>
          <img
            src="/assets/logo.png"
            className={styles.navbarImage}
            alt="Logo"
          />
          <div className={styles.mainTextH2}>
            <h2>LOGO</h2>
          </div>
          <div className={styles.iconContainer}>
            <button className={styles.iconButton}>
              <i className="fas fa-search"></i>
            </button>
            <button className={styles.iconButton}>
              <i className="fas fa-heart"></i>
            </button>
            <button className={styles.iconButton}>
              <i className="fas fa-shopping-bag"></i>
            </button>
            <div
              className={`${styles.linksContainer} ${
                isOpen ? styles.open : ""
              }`}
              id={styles.userEng}
            >
              <button className={styles.iconButton}>
                <i className="fas fa-user"></i>
              </button>
              <button className={styles.languageButton}>
                ENG <i className="fas fa-caret-down"></i>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.navbarLinks}>
          <div
            className={`${styles.linksContainer} ${isOpen ? styles.open : ""}`}
          >
            <Link href="/" className={styles.navLink}>
              Shop
            </Link>
            <Link href="/skills" className={styles.navLink}>
              Skills
            </Link>
            <Link href="/stories" className={styles.navLink}>
              Stories
            </Link>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact Us
            </Link>
            <Link
              href="/about"
              className={styles.navLink}
              id={styles.userEngLink}
            >
              <i className="fas fa-user"></i>
            </Link>
            <Link
              href="/contact"
              className={styles.navLink}
              id={styles.userEngLink}
            >
              ENG <i className="fas fa-caret-down"></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
