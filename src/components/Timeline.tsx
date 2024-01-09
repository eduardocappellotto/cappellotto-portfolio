import React from "react";

interface Job {
  jobTitle: string;
  date: string;
}

const jobHistory: Job[] = [
  {
    jobTitle: "Job 1",
    date: "Sept/2021 - Sept/2022",
  },
  {
    jobTitle: "Job 2",
    date: "Sept/2022 - Sept/2023",
  },
  {
    jobTitle: "Software Engineer @Demarco",
    date: "Sept/2023 - Today",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="timeline">
      <h2 className="text-2xl mb-6 text-white font-semibold">Job History</h2>
      <ul>
        {jobHistory.map((job, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-item-content">
              <span className="timeline-date">{job.date}</span>
              <h3 className="text-white font-semibold">{job.jobTitle}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
