import React from "react";

export default function Header() {
  return (
    <div className="d-flex px-0 px-sm-4 py-2">
      <div className="flex-grow-1 font-mono font-weight-bold d-flex align-items-center">
        pawan.dev
      </div>
      <div>
        <ul className="d-flex align-items-center">
          <li>
            <a
              href="https://www.linkedin.com/in/pawan-kumar-93a0a1115/"
              target="_blank"
              className="d-flex align-items-center"
            >
              <img src="/images/linkedin.svg" style={{ height: 25 }} />
            </a>
          </li>
          <li className="ml-3">
            <a
              href="https://github.com/jsartisan"
              target="_blank"
              className="d-flex align-items-center"
            >
              <img src="/images/github.svg" style={{ height: 25 }} />
            </a>
          </li>
          <li className="ml-3">
            <a
              className="btn btn-primary px-4"
              href="mailto:pawankumar2901@gmail.com"
              style={{ borderRadius: 25 }}
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
