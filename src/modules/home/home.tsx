"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles in your component

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import ParticlesComponent from "@/components/particles/particles";

import styles from "./home.module.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for the animation
    });
  }, []);

  return (
    <div id="home">
      <div className={styles["hero-section"]}>
        <ParticlesComponent />
        <div data-aos="fade-left" data-aos-offset="0">
          <div>
            <h1 className={styles["hero-title"]}>ABHIRAM K G</h1>
            <h1 className={styles["hero-subtitle"]}>- Frontend Developer</h1>
          </div>
          <div className={styles["socials"]}>
            <div className={styles["social"]}>
              <Link href="https://www.linkedin.com/in/abhiram-kg-581084206">
                <LinkedInIcon className={styles["linkedin"]} />
              </Link>
            </div>
            <div className={styles["social"]}>
              <Link href="https://github.com/abhiramkg2000">
                <GitHubIcon className={styles["github"]} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
