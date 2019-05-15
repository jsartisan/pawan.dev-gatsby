import React from "react";

import { SKILLS, PROJECTS, JOBS } from "constants/data";
import Root from "components/layout/Root";
import JobList from "components/jobs/JobList";
import SkillList from "components/skills/SkillList";
import ProjectList from "components/projects/ProjectList";

const IndexPage = () => (
  <Root>
    <div className="d-block d-md-flex flex-grow-1 align-items-center">
      <div className="flex-grow-1 w-100 px-2 py-5 p-md-5">
        <h1 className="display-3 font-weight-bold">Hi, I am Pawan</h1>
        <h2 className="font-mono h6 font-weight-bold mt-3 text-primary">
          Full Stack Developer
        </h2>
        <p className="font-pop mt-4">
          I am Full Stack web Developer based in India. I am a dreamer and a
          fanatic of all digital things. I have many years of experience in
          developer stuffs in all areas of web.
        </p>

        <div className="mt-5">
          <h3 className="font-mono text-muted h6">Skills / Frameworks</h3>
          <SkillList skills={SKILLS} />
        </div>
      </div>
      <div className="w-100 px-2 py-5 p-md-5">
        <div>
          <h3 className="font-mono h6">Projects</h3>
          <div className="mt-3">
            <ProjectList projects={PROJECTS} />
          </div>
          <div className="mt-5">
            <h3 className="font-mono text-muted h6">Experiences</h3>
            <JobList jobs={JOBS} />
          </div>
        </div>
      </div>
    </div>
  </Root>
);

export default IndexPage;
