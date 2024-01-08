// components/Header.tsx
import React from "react";
import HeaderLink from "./HeaderLink";
import JobTitleButton from "./JobTitleButton";

const Header: React.FC = () => {
  return (
    <header className="p-4 flex flex-col lg:flex-row justify-between items-center">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQE_7j22GVeZUg/profile-displayphoto-shrink_800_800/0/1664902432478?e=1710374400&v=beta&t=8UPP2H-Pba_CwU3JApJPw7aGyLt-byMcc3ZSkZfRMFE"
        alt="Your Photo"
        className="h-36 rounded-full mb-4 lg:mb-0"
      />
      <section className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
          Eduardo <span className="font-normal"> Cappellotto</span>
        </h1>
        <div className="flex justify-center lg:justify-start">
          <HeaderLink
            href="https://www.linkedin.com/in/eduardo-cappellotto-991529170/"
            text="linkedin"
          />
          <HeaderLink
            href="mailto:contato@eduardocappellotto.com"
            text="email"
          />
          <HeaderLink
            href="https://github.com/eduardocappellotto"
            text="github"
          />
        </div>
      </section>

      <JobTitleButton href="/current-job" text="Software Engineer @ Demarco" />
    </header>
  );
};

export default Header;
