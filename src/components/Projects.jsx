import React from "react";
import styles from "../styles/projects.module.css";
import ProjectCard from "./ProjectCard";
import portfolioImg from "../resources/Portfolio_laptop.png";

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
      <ProjectCard
        laptopImg={portfolioImg}
        description={
          "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally"
        }
        isDeployed={true}
      />
      <ProjectCard
        laptopImg={portfolioImg}
        description={
          "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally"
        }
        isDeployed={true}
      />
      <ProjectCard
        laptopImg={portfolioImg}
        description={
          "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally"
        }
        isDeployed={true}
      />
      <ProjectCard
        laptopImg={portfolioImg}
        description={
          "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally"
        }
        isDeployed={true}
      />
    </div>
  );
}

export default Projects;
