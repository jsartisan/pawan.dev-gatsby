import React from "react";

import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
  return (
    <ul className="d-flex mt-3 flex-wrap">
      {skills.map(skill => (
        <SkillListItem skill={skill} />
      ))}
    </ul>
  );
}
