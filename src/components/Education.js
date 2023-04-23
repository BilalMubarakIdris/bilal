import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="edu-wrapper" id="education">
      <div className="container">
        <div className="col-2">
          <div className="education">
            <h2>Education</h2>
            <div className="edu-container">
              <h3>Bachelor of Computer Application</h3>
              <p>Gandhi Institute of Technology and Management(GITAM), India</p>
              <p>2020-2023</p>
            </div>
            <div className="edu-container">
              <h3>National Diploma</h3>
              <p>
                Nigerian Institute of Leather and Science Technology
                (Zaria,Samaru, Nigeria)
              </p>
              <p>2018-2020</p>
            </div>
          </div>
          <div className="education">
            <h2>Certificates</h2>
            <div className="edu-container">
              <ul>
                <li>
                  The Frontend Developer Career path,{" "}
                  <strong>Scrimba - 2020.</strong>
                </li>
                <li>
                  The React Bootcamp, <strong>Scrimba.</strong>
                </li>
                <li>
                  The Responsive Web Design Bootcamp, <strong>Scrimba.</strong>
                </li>
                <li>
                  The UI Design Bootcamp, <strong>Scrimba.</strong>
                </li>
                <li>
                  Responsive Web Design, <strong>FreeCodeCamp.</strong>
                </li>
                <li>
                  javaScript Algorithms and Data Structures,{" "}
                  <strong>FreeCodeCamp.</strong>
                </li>
                <li>
                  Full-stack Nano Degree: <strong>Udacity</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
