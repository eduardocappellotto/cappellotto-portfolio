import React from "react";
import ProjectCard from "./Projects";

interface Project {
  name: string;
  githubLink: string;
  description: string;
  tags: string[];
}

const mockProjects: Project[] = [
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
  {
    name: "Portfolio",
    githubLink: "https://github.com/eduardocappellotto/cappellotto-portfolio",
    description: "The code for this own website, built in Next.js",
    tags: ["Next.js", "Typescript", "React.js"],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl mb-6 text-white font-semibold">Projects</h2>
      <section className="my-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
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
    </>
  );
};

export default ProjectsSection;
