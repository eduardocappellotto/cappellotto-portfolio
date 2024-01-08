// components/Card.tsx
import React, { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, style, className }) => {
  return (
    <div
      className={`bg-primary h-full p-10 rounded-lg text-white ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
