import React from "react";

const Resume = ({ data }) => {
  return (
    <section id="resume" className="bg-dark">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {data.education &&
            data.education.map((item, i) => {
              return (
                <div className="row item" key={i}>
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {data.work &&
            data.work.map((item, i) => {
              return (
                <div className="row item" key={i}>
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
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
          <p>{data.skillsDescription}</p>
          <div className="bars">
            <ul className="skills">
              {data.skills &&
                data.skills.map((item, i) => {
                  return (
                    <li key={i}>
                      <span
                        className={`bar-expand ${item.skillname.toLowerCase()}`}
                      ></span>
                      <em style={{ color: "#E1D9D1" }}>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
