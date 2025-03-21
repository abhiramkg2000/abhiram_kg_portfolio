"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles in your component

import ContactsIcon from "@mui/icons-material/Contacts";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "./contact.module.css";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for the animation
    });
  }, []);

  return (
    <div id="contact">
      <div className={styles["contact-section"]}>
        <div
          className={styles["section-title"]}
          data-aos="fade-left"
          data-aos-offset="0"
        >
          <ContactsIcon className={styles["contact-icon"]} />
          <h1>Contact Me</h1>
        </div>
        <div
          className={styles["socials"]}
          data-aos="fade-up"
          data-aos-offset="0"
        >
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
  );
}
