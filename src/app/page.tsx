import Navbar from "@/components/navbar/navBar";
import HomePage from "@/modules/home/home";
import AboutPage from "@/modules/about/about";
import EducationPage from "@/modules/education/education";
import SkillsPage from "@/modules/skills/skills";
import ProjectPage from "@/modules/projects/projects";
import ContactPage from "@/modules/contact/contact";

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <EducationPage />
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
    </>
  );
}
