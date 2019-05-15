import React from "react";

export default function JobListItem({ job }) {
  return (
    <a className="w-100 d-block mb-3 mb-md-0" href={job.url}>
      <h5>{job.name}</h5>
      <p className="text-muted">{job.year}</p>
    </a>
  );
}
