// pages/index.tsx
import React from "react";
import Header from "../components/Header";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CareerSummary from "@/components/CareerSummary";
import JobTimeline from "../components/Timeline";

const HomePage: React.FC = () => {
  return (
    <div className="h-full m-auto w-4/5">
      <Header />
      <CareerSummary />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
