import React from "react";
import "./Placements.css";

const recruiters = [
  "Zoom",
  "Nutanix",
  "Uber",
  "Gainsight",
  "Rubrik",
  "Zendesk",
  "AppsFlyer",
  "Okta",
];

const placementStats = [
  {
    value: "95%",
    label: "Placement Rate",
  },
  {
    value: "33 LPA",
    label: "Highest Package",
  },
  {
    value: "50+",
    label: "Recruiters",
  },
  {
    value: "7.5 LPA",
    label: "Average Package",
  },
];

function RecruiterTrack() {
  return (
    <div className="recruiter-track" aria-hidden="true">
      {[0, 1].map((group) => (
        <div className="recruiter-group" key={group}>
          {recruiters.map((recruiter) => (
            <span className="recruiter-logo" key={`${recruiter}-${group}`}>
              {recruiter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function Placements() {
  return (
    <section id="placements" className="placements-section">
      <div className="placements-content">
        <div className="placements-heading-wrap">
          <h2>Placements</h2>
        </div>

        <div className="recruiters-wrap" aria-label="Top recruiters">
          <p>Our Top Recruiters</p>
          <div className="recruiter-marquee">
            <RecruiterTrack />
          </div>
        </div>

        <div className="placement-stats">
          {placementStats.map((stat) => (
            <article className="placement-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Placements;
