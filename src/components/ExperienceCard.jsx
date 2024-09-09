import React from "react";
import styles from "../styles/experienceCard.module.css";
const ExperienceCard = ({ role, tenure, logo, name, location }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.details}>
        <div className={styles.role}>{role}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.tenure}>{tenure}</div>
        <div className={styles.location}>{location}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
