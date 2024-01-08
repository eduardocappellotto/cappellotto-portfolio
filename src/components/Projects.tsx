import React from "react";

interface ProjectCardProps {
  name: string;
  githubLink: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  githubLink,
  description,
  tags,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 px-2 py-1 text-sm rounded-full mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 inline-block"
      >
        GitHub Repository
      </a>
    </div>
  );
};

export default ProjectCard;
