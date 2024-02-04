import React, { useState, useEffect } from "react";
import styles from "../styles/navBar.module.css";

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
        <img
          src={require("../resources/PXL_20230521_165428269-Photoroom.png-Photoroom (2).png")}
          className={styles.logo}
          alt="profileImage"
        />
        <div className={styles.name}>RITISH SRIVASTAVA</div>
      </div>
      <div className={styles.menu}>
        <div>HOME</div>
        <div>ABOUT</div>
        <div>PROJECTS</div>
        <div>CONTACT</div>
      </div>
    </div>
  );
}

export default NavBar;
