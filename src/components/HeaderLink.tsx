import React from "react";

interface HeaderLinkProps {
  href: string;
  text: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, text }) => {
  return (
    <a href={href} className="text-gray-400 text-xl lg:text-2xl mr-4 lg:mr-6">
      {text}
    </a>
  );
};

export default HeaderLink;
