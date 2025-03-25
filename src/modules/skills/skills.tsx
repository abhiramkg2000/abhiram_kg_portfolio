"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles in your component

import Grid from "@mui/material/Grid2";
import CodeIcon from "@mui/icons-material/Code";

import SkillCard from "@/components/skillCard/skillCard";

import { SKILLS } from "@/constants/constants";

import styles from "./skills.module.css";

export default function SkillsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for the animation
    });
  }, []);

  return (
    <div className={styles["skills-section"]}>
      <div
        className={styles["section-title"]}
        data-aos="fade-left"
        data-aos-offset="0"
      >
        <CodeIcon className={styles["section-title-icon"]} />
        <h1>Technical Skills</h1>
      </div>
      <Grid
        container
        spacing={2}
        margin={2}
        data-aos="fade-up"
        data-aos-offset="0"
      >
        {SKILLS.map((skill, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            className={styles["skill-column"]}
          >
            <SkillCard image={skill.image} alt={skill.alt} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
