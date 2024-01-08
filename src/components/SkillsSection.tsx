import React from "react";
import SkillCategory from "./SkillCategory";

export interface Skill {
  name: string;
  experience?: string;
  description: string;
}

const technicalSkills: Skill[] = [
  {
    name: "Programming languages",
    experience: "+ 5 years",
    description: "Since college: HTML5, CSS3, JS, (TS)",
  },
  {
    name: "Frontend and Backend frameworks",
    experience: "+ 4 years",
    description:
      "Frontend: Vue.js, Nuxt, Quasar, Vuetify\nBackend: Express.js, Nest.js",
  },
  {
    name: "Testing Tools",
    experience: "+ 3 years",
    description: "E2E using Cypress, Unit and Integration using Jest, Vitest",
  },
  {
    name: "Build Tools and Server admin",
    experience: "+ 3 years",
    description:
      "Deploy via: Azure CI & CD, Github Actions with test coverage in Docker yaml files\nConfig Linux via: script bash\nVirtualization with: Docker",
  },
  {
    name: "Databases and Transport Layers",
    experience: "+ 3 years",
    description:
      "MySQL, MongoDB, Neo4J, PostgreSQL, Google Cloud Firestore, Firebase, Redis, RabbitMQ",
  },
  {
    name: "Data treatment and DevOps",
    experience: "+ 3 years",
    description:
      "AWS SQS, SES, Route 53, Lambda knowledge. Using python and node.js with puppeteer to scrape and treat data, manage development/homologation stage data",
  },
];

const peopleSkills: Skill[] = [
  {
    name: "Agile",
    description:
      "Sprint management using SCRUM. Thorough deadlines for each item on the sprint. Constant feedback gatherer from the P.O and stakeholders.",
  },
  {
    name: "Design Systems",
    description:
      "Experience in the creation of multiple Design Systems using Storybook.js, specifically the Qualicorp one was awarded by IF Design Award 2023.",
  },
  {
    name: "Team Management ",
    description:
      "Protector of entry and mid level team members. \n Encourage exchange of experiences between members via meetups or small group discussion around a work relatable topic.",
  },
];

const test =
  "https://www.qualicorp.com.br/qualicorp-explica/qualicorp-conquista-premio-internacional-de-design-com-nova-marca/";

const interests: Skill[] = [
  {
    name: "Automation",
    description:
      "Crawlers, bots, webscraping for best deals/finding 'hidden' listings. Perfect for finding that old bmw that will ruin you marriage!",
  },
  {
    name: "AI for Productivity",
    description:
      "Interest in using AI for more productivity. Good prompts are everything!",
  },
  {
    name: "Personal",
    description: "In my personal life, i love cars, cats, gym and cooking!",
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <SkillCategory
        categoryTitle="Technical Skills"
        skills={technicalSkills}
      />
      <SkillCategory
        categoryTitle="Skills and Experiences"
        skills={peopleSkills}
      />
      <SkillCategory categoryTitle="Interests" skills={interests} />
    </section>
  );
};

export default SkillsSection;
