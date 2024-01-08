// pages/index.tsx
import React from "react";
import Header from "../components/Header";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import Timeline from "../components/Timeline";
import ProjectCard from "@/components/Projects";

const mockProjects = [
  {
    name: "Visibility POC",
    githubLink: "https://github.com/eduardocappellotto/visibility-poc",
    description:
      "Proof of concept to monitor user interactions within a tab (tab out, clicks, focus out). Imagine it being used in an assessment module.",
    tags: ["Vue 3", "Typescript", "LGPD"],
  },
  {
    name: "Brazilian Bank Validation",
    githubLink:
      "https://github.com/eduardocappellotto/validacao-bancaria-brasileira",
    description:
      "Package for validating Brazilian bank accounts input. Validates for the biggest 7 brazilian banks.",
    tags: ["Finance", "Node.js", "Jest"],
  },
  {
    name: "Prove.it",
    githubLink: "https://github.com/eduardocappellotto/proveit-interface",
    description:
      "Prove.it is a POC of a full-stack project where teachers can create assessments and ",
    tags: ["Quasar", "Vue 3", "Nest.js"],
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="h-full m-auto w-4/5">
      <Header />
      <h1 className="text-xl font-thin text-white my-10">
        Experienced in full-stack development professionally since 2019, from
        coding to deploy, embracing DevOps culture. Skilled in building and
        maintaining systems for various industries, from startups to established
        companies. Proficient in developing Design Systems, implementing
        microservices architectures, and ensuring seamless communication within
        applications.
      </h1>
      <SkillsSection />
      <ExperienceSection />
      <section className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockProjects.map((project, index) => (
          <div key={index} className="col-span-1">
            <ProjectCard
              name={project.name}
              githubLink={project.githubLink}
              description={project.description}
              tags={project.tags}
            />
          </div>
        ))}
      </section>
      <Timeline />
    </div>
  );
};

export default HomePage;
