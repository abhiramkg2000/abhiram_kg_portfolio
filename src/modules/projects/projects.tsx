"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles in your component

import Grid from "@mui/material/Grid2";
import LaptopIcon from "@mui/icons-material/Laptop";

import ProjectCard from "@/components/projectCard/projectCard";

import { PROJECTS } from "@/constants/constants";

import styles from "./project.module.css";

export default function ProjectPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for the animation
    });
  }, []);

  return (
    <div id="projects">
      <div className={styles["project-section"]}>
        <div
          className={styles["section-title"]}
          data-aos="fade-left"
          data-aos-offset="0"
        >
          <LaptopIcon className={styles["project-icon"]} />
          <h1>Projects</h1>
        </div>
        <Grid container spacing={2} margin={2}>
          {PROJECTS.map((project, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}
              key={index}
              className={styles["project-column"]}
              data-aos={project.fadeDirection}
              data-aos-offset="0 "
            >
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
