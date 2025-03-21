import styles from "./skillCard.module.css";

type SkillCardPropsType = {
  image: string;
  alt: string;
};

export default function SkillCard({ image, alt }: SkillCardPropsType) {
  return (
    <div className={styles["skill"]}>
      <img src={image} alt={alt} />
    </div>
  );
}
