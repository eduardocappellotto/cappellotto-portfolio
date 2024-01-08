import React from "react";

interface JobTitleButtonProps {
  href: string;
  text: string;
}

const JobTitleButton: React.FC<JobTitleButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="bg-white text-primary px-4 py-2 mt-4 lg:mt-0 text-lg inline-block font-semibold rounded"
    >
      {text}
    </a>
  );
};

export default JobTitleButton;
