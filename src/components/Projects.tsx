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
  const handleCardClick = () => {
    window.open(githubLink, "_blank");
  };

  return (
    <div
      className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-md cursor-pointer hover:opacity-70"
      onClick={handleCardClick}
    >
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-primary text-white px-2 py-1 text-sm font-bold rounded-full mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
