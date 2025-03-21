"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles in your component

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
          <h1 className={styles["hero-title"]}>ABHIRAM K G</h1>
          <h1 className={styles["hero-subtitle"]}>- Frontend Developer</h1>
        </div>
      </div>
    </div>
  );
}
