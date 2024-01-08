// components/SkillCategory.tsx
import React from "react";
import { Skill } from "./SkillsSection";

interface SkillCategoryProps {
  categoryTitle: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  categoryTitle,
  skills,
}) => {
  return (
    <div className="col-span-1">
      <h2 className="text-2xl mb-6 text-white font-semibold">
        {categoryTitle}
      </h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4 flex flex-col md:flex-row">
          {skill.experience && (
            <div className="md:w-1/4">
              <p className="text-primary font-bold">{skill.experience}</p>
            </div>
          )}
          <div className={skill.experience ? "md:w-3/4" : "md:w-full"}>
            <h3 className="text-xl font-semibold text-primary-light">
              {skill.name}
            </h3>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCategory;
