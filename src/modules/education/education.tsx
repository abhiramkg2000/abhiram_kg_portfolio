"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles in your component

import SchoolIcon from "@mui/icons-material/School";

import styles from "./education.module.css";

export default function EducationPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for the animation
    });
  }, []);

  return (
    <div className={styles["education-section"]}>
      <div
        className={styles["section-title"]}
        data-aos="fade-left"
        data-aos-offset="0"
      >
        <SchoolIcon className={styles["section-title-icon"]} />
        <h1>Education</h1>
      </div>
      <div
        className={styles["timeline"]}
        data-aos="fade-down"
        data-aos-offset="0"
      >
        <div data-aos="fade-down" data-aos-offset="0">
          <div className={`${styles["container"]} ${styles["left"]}`}>
            <div className={styles["content"]}>
              <h2 className={styles["education-title"]}>
                Chimaya Vidhyalaya Kannamaly(High School)
              </h2>
              <br />
              <p className={styles["education-description"]}>
                Computer Science(2016-2018)
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-offset="0">
          <div className={`${styles["container"]} ${styles["right"]}`}>
            <div className={styles["content"]}>
              <h2 className={styles["education-title"]}>
                Adi Shankara Institute of Engineering and Technology
              </h2>
              <br />
              <p className={styles["education-description"]}>
                Computer Science Engineering(2018-2022)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
