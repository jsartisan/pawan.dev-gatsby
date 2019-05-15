import React from "react";

export default function SkillListItem({ skill }) {
  return (
    <div
      title={skill.name}
      style={{
        height: 60,
        width: 60,
        marginRight: 30,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${skill.logo})`,
      }}
    />
  );
}
