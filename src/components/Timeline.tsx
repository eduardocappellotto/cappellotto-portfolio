import React from "react";

interface Job {
  jobTitle: string;
  description: string;
  date: string;
}

const jobHistory: Job[] = [
  {
    jobTitle: "Software Engineer @ SolarMarket",
    description:
      "Implemented a design system for the new front-end version of the solar energy CRM",
    date: "Sept/2020 - Mar/2021",
  },
  {
    jobTitle: "Software Engineer @ Qualicorp",
    description:
      "Developed a whole marketing-CRM capable of filtering and sending marketing and transactional messages within multiple channels (SMS, WhatsApp, E-mail). Also developed a awarded design system using Storybook.js",
    date: "Mar/2021 - Aug/2023",
  },
  {
    jobTitle: "Software Engineer @Demarco",
    description:
      "Working especifically on a migration to enable the insert of new clients (BRFoods, MercadoLivre)",
    date: "Sept/2023 - Today",
  },
];

const Timeline: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl mb-6 text-white font-semibold my-8">
        Latest Job Experiences
      </h2>
      <ol className=" sm:flex items-start">
        {jobHistory.map((job, index) => (
          <li key={index} className="relative mb-6 sm:mb-0 sm:w-1/3">
            <div className="flex items-center">
              <div className="z-10 flex bg-primary-light items-center justify-center w-6 h-6 rounded-full ring-0 ring-white dark:primary-dark sm:ring-8 dark:ring-primary shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-primary-dark dark:primary-light"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {job.jobTitle}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {job.date}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {job.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Timeline;
