import React from "react";

export default function Header() {
  return (
    <div className="d-flex">
      <div className="flex-grow-1 font-mono font-weight-bold">pawan.dev</div>
      <div>
        <ul className="d-flex align-items-center">
          <li className="ml-3">
            <a
              className="btn btn-primary px-4"
              href="mailto:pawankumar2901@gmail.com"
              style={{ borderRadius: 25 }}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
