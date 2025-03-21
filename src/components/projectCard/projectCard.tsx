import React from "react";
import Link from "next/link";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import { ProjectType } from "@/types/types";

import styles from "./projectCard.module.css";

type ProjectCardPropsType = {
  project: ProjectType;
};

function ProjectCard({ project }: ProjectCardPropsType) {
  return (
    <Card className={styles["project-card"]}>
      <CardContent>
        <h1 className={styles["project-title"]}>{project.title}</h1>
        <p className={styles["project-description"]}>{project.description}</p>
      </CardContent>
      <CardActions className={styles["project-link-container"]}>
        <div className={styles["project-link"]}>
          <Link href={project.github}>
            <GitHubIcon className={styles["github"]} />
          </Link>
        </div>
        <div className={styles["project-link"]}>
          <Link href={project.production}>
            <RocketLaunchIcon className={styles["production"]} />
          </Link>
        </div>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
