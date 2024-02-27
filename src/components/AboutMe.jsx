import React from "react";
import styles from "../styles/aboutMe.module.css";

function AboutMe() {
  const description = (
    <>
      <div>
        {" "}
        I'm a <b>Full Stack developer</b> who loves developing websites with
        interactive designs and a solid robust backend to support it. You can
        check out some of my works in the Projects section below.
      </div>
      <br />
      <div>
        As per experience , I bag an experience of about 12 months of internship
        working in multiple companies, where I got a chance to work on different
        tech stacks. In these internships I primarily worked on React and Spring
        Boot with backend being MySQL, PostgreSQL, AWS, the rest of the skills
        have been acquired due to my curiosity about technology
      </div>
      <br />
      <div>
        I'm <b>open to Job opportunities</b> where I can contribute, learn and
        grow. If you have a good opportunity that matches my skills and
        experience then don't hesitate to <b>contact me</b>.
      </div>
    </>
  );

  const skills = [
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "Javascript",
    "React",
    "C++",
    "SQL",
    "Node",
    "Express",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "AWS",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.heading_and_info}>
        <div className={styles.heading}>ABOUT ME</div>
        <div className={styles.info}>
          Here you will find more information about me , what I do, and my
          current skills mostly in terms of programming and technology{" "}
        </div>
      </div>
      <div className={styles.know_me_and_skills}>
        <div className={styles.know_me}>
          <div className={styles.title}>Get to know me!</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.skills}>
          <div className={styles.my_skills}>My Skills</div>
          <div className={styles.skills_list}>
            {" "}
            {skills.map((skill, ind) => (
              <div className={styles.skill_item} key={ind}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
