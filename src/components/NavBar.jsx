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
          src={
            "https://lh3.googleusercontent.com/drive-storage/ANtge_FmvPq3WcqkuONn0u1CQNrnOf2TiFTJNBOfh7jFtWMI_oIyAoleEU1sNiflxG08ZHNyXc4AyCCksWU9NYbdN579hgbg8dfdDoq_jdUiUw=s220"
          }
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
