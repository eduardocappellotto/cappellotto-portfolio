// components/Header.tsx
import React from "react";
import HeaderLink from "./HeaderLink";
import JobTitleButton from "./JobTitleButton";

const Header: React.FC = () => {
  return (
    <header className="p-4 flex flex-col lg:flex-row justify-between items-center">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQHXhrznD6LrMA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710283000443?e=1741824000&v=beta&t=F7LWxUB5LvJTu_Gw8ZisLy7VVyxnMivtcmSh5qW4Nl8"
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
          <HeaderLink href="https://dev.to/eduardocappellotto" text="dev.to" />
        </div>
      </section>

      <JobTitleButton text="Full-stack Software Engineer" />
    </header>
  );
};

export default Header;
