import React from "react";

export default function App(props) {
  const { resumeData } = props;
  return (
    <section id="about">
      <div className="row">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="three columns">
            <img className="profile-pic" src="images/tjo.jpg" alt="" />
          </div>
          <div className="three columns">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
          </div>
          <div className="three columns">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{resumeData.name}</span>
              <br></br>
              <span>{resumeData.address}</span>
              <br></br>
              <span>{resumeData.website}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
