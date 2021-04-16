import React from "react";
export default function Resume(props) {
  const { resumeData } = props;
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item, index) => {
              return (
                <div key={index} className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <span className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </span>
                    <span>{item.Achievements}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.work &&
            resumeData.work.map((item, index) => {
              return (
                <div key={index} className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <span className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthStart} {item.YearStart} -{" "}
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </span>
                    <span className="info">{item.Achievements}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>

          <div className="bars">
            <ul className="skills">
              {resumeData.skills &&
                resumeData.skills.map((item, index) => {
                  return (
                    <li key={index}>
                      <span
                        className={`bar-expand ${item.cssName.toLowerCase()}`}
                      ></span>
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Languages</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>

          <div className="bars">
            <ul className="skills">
              {resumeData.languages &&
                resumeData.languages.map((item, index) => {
                  return (
                    <li key={index}>
                      <span
                        className={`bar-expand ${item.cssName.toLowerCase()}`}
                      ></span>
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
