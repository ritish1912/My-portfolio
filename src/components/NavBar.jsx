import React, { useState, useEffect } from "react";
import styles from "../styles/navBar.module.css";
import profileImage from "../resources/PXL_20230521_165428269-Photoroom.png-Photoroom (2).png"; // Import image at the top

function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!isScrollingDown || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`${styles.container} ${
        visible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.name_and_logo}>
        <img src={profileImage} className={styles.logo} alt="profileImage" />
        <div className={styles.name}>RITISH SRIVASTAVA</div>
      </div>
      <div className={styles.menu}>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#project">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  );
}

export default NavBar;
