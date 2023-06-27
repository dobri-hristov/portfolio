import React from "react";

const About = ({ data }) => {
  return (
    <section id="about" className="bg-dark">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src="images/profilepic.jpg"
            alt="my pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{data.aboutme}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p id="address">
                <i className="fa fa-user name"></i>
                <span>Dobri Hristov</span>
                <br></br>
                <i className="fa fa-home town"></i>
                <span>Sofia, Bulgaria</span>
                <br></br>
                <i className="fa fa-envelope email"></i>
                <span>dobrihristov95@abv.bg</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
