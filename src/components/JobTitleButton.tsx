import React from "react";

interface JobTitleButtonProps {
  text: string;
}

const JobTitleButton: React.FC<JobTitleButtonProps> = ({ text }) => {
  return (
    <a className="bg-white text-primary px-4 py-2 mt-4 lg:mt-0 text-lg inline-block font-semibold rounded">
      {text}
    </a>
  );
};

export default JobTitleButton;
