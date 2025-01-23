import React from "react";
import Card from "./Card";

const ExperienceSection: React.FC = () => {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <section className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 lg:col-span-1">
        <Card style={{ backgroundColor: "primary" }}>
          <div className="flex flex-wrap">
            <h2 className="text-6xl font-bold self-start ml-2 mt-1">{yearsOfExperience}+</h2>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Years in software development
              </h3>
              <h3 className="text-lg">
                Adapting and creating solutions for customer&apos;s needs
              </h3>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-span-1 lg:col-span-1">
        <Card style={{ backgroundColor: "primary" }}>
          <div className="flex flex-wrap">
            <div className="flex items-start">
              <h2 className="text-6xl font-bold self-start ml-2 mt-1">2+</h2>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold">Blog Posts</h3>
              <p className="text-lg">
                In dev.to, I write about career and cool tutorials.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;
