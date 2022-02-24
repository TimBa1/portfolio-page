import React from "react";
import { Fade } from "react-reveal";
import "./skill.css"

const Skills = () => {
  return (
    <div className="container">
      <Fade right duration={1000} >
        <div className="skills-text mt-5 pt-5 ml-1 mb-5 pb-5">
          <h1 className="skills-title tc">specializing in</h1>
          <h3 className="skills-subtitle pb-3">
            Innovative frontend engineer that loves bringing ideas to life
          </h3>
          <h4 className="skills pb-4">
            ⚡ Develop highly interactive Front end / User Interfaces for your web applications<br/>
            ⚡ Integration of REST APIS to make application functional<br/>
            ⚡ Responsive designs and mobile first applications<br/>
          </h4>
        </div>
      </Fade>
      <Fade left duration={1000}>
          <div className="container educational-section">
              <h1 className="education-heading">EDUCATION</h1>
                  <div className="education-card-container">
                      <img src={require("../../assets/home/unilag.png")} alt="no-internet" />
                      <div className="education-content">
                          <h2>University Of Lagos</h2>
                          <h4>Bachelor Of Science In Physics Education<br />2013-2017</h4>
                      </div>
                     
                  </div>
                  <div className="line"></div>
          </div>
      </Fade>
    </div>
  );
};

export default Skills;
