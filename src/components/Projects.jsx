import React from "react";
import styles from "../styles/projects.module.css";

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.heading_and_info}>
        <div className={styles.heading}>Projects</div>
        <div className={styles.info}>
          Here you will find some of the projects that I have made, and with
          each of them I have provided their Github link for reference
        </div>
      </div>
    </div>
  );
}

export default Projects;
