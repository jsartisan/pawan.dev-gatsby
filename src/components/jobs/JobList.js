import React from "react";

import JobListItem from "./JobListItem";

export default function JobList({ jobs }) {
  return (
    <div className="d-block d-md-flex mt-3 justify-content-between">
      {jobs.map((job, index) => (
        <JobListItem key={`j-${index}`} job={job} />
      ))}
    </div>
  );
}
