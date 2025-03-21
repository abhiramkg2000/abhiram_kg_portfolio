"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles in your component

import Grid from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";

import webDevelopmentImage from "../../assests/web-development.png";

import styles from "./about.module.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for the animation
    });
  }, []);

  return (
    <div id="about">
      <div className={styles["about-section"]}>
        <div
          className={styles["section-title"]}
          data-aos="fade-left"
          data-aos-offset="0"
        >
          <PersonIcon className={styles["about-icon"]} />
          <h1>About Me</h1>
        </div>
        <Grid container spacing={2} margin={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
            <div
              className={styles["center"]}
              data-aos="fade-up"
              data-aos-offset="0"
            >
              <img
                src={webDevelopmentImage.src}
                alt="Web Development"
                className={styles["about-me-image"]}
              />
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
            <div
              className={styles["center"]}
              data-aos="fade-up"
              data-aos-offset="0"
            >
              <p className={styles["about-me"]}>
                I am a computer science graduate, I always look for
                opportunities to grow and expand my knowledge. When I feel that
                I lack in certain areas I would work on it and improve those
                areas. Always on a mission to become a Better version of myself
                to inspire others and also help them in the Journey.
                <br />
                <br />
                In my Professional experience, I am working at Qburst
                Technologies Private Limited as a Front-End Developer, where I
                gained hands-on experience with React, TypeScript, Material UI,
                SCSS, and Vite.
                <br />
                <br />
                Additionally, I have integrated Google Analytics using Google
                Tag Manager, optimized app performance by Lazy loading
                components, and added Skeletons to improve user experience. I
                have worked on multiple carousels and banners using React Slick,
                customized Vite build configurations, and sanitized and parsed
                HTML content. Additionally, I have handled various bug fixes and
                UI changes to enhance the overall application.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
