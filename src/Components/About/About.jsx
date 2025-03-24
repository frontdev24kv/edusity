import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="" className="about-img" />
          <img src={play_icon} alt="" className="play-icon" onClick={() => setPlayState(true)}/>
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERCITY</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive educational programs. Our cutting-edge curriculum is
            designed to provide students with the knowledge, skills, and
            experience necessary to succeed in the dynamic field of education.
          </p>
          <p>
            Our programs, focused on innovation, hands-on learning, and
            personalized mentoring, prepare beginning educators to make a
            significant impact on classrooms, schools, and communities..
          </p>
          <p>
            Whether you aspire to become a teacher, administrator, consultant,
            or educational leader, our wide selection of programs offers the
            perfect path to achieve your goals and unleash your full potential
            in shaping the future of education.
          </p>
        </div>
      </div>
  );
};

export default About;
