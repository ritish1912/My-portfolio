import React from "react";
import styles from "../styles/experience.module.css";
import ExperienceCard from "./ExperienceCard";
import logo from "../resources/company_logos/pngegg.png";
const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <div className={styles.heading}>EXPERIENCE</div>
        <div className={styles.info}>
          Hi, here you will get to explore my professional journey, including
          the roles I have undertaken, and the skills I have honed over time.
        </div>
        <div className={styles.card_container}>
          <ExperienceCard
            role={"Associate Software Engineer"}
            name={"Tech Mahindra - Full-time"}
            logo={logo}
            tenure={"Mar 2024 - Present"}
            location={"Pune - On-site"}
          />
          {/* <ExperienceCard />
          <ExperienceCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
