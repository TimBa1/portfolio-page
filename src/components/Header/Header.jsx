import Typical from "react-typical";
import './Header.css';

function Header({foo}) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="col">
            <div className="col-icons pa-3">
              <a href="https://github.com/AbimbolaBakare" onClick={foo}  className="pp">
                <i className="fa fa-github-square fa-1.5x"></i>
              </a>
              <a href="deomolara@yahoo.com"  onClick={foo} className="pp">
                <i className="fa fa-yahoo fa-1.5x"></i>
              </a>
              <a href="https://www.linkedin.com/in/abimbola-bakare-470784b3/"  onClick={foo} className="pp">
                <i className="fa fa-linkedin-square fa-1.5x"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-test">
              {""}
              Hi there,
              <span className="highlighted-text">
                {" "}
                <Typical loop={Infinity} steps={["I'm Abimbola", 1000]} />
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🏈",
                    1000,
                    "Front-End Developer 😎",
                    1000,
                    "Creative and Intuitive Designs💻",
                    1000,
                    "4 Programing Languages🤝",
                    1000,
                    "React/Redux/Next/Node 📱",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                              "I am a solution-driven frontend engineer with a passion for creating intuitive and dynamic user experience.<br/>
                              I have competence in building web applications with JavaScript / Reactjs and some really cool libraries."
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me
            </button>
            <a href="https://drive.google.com/file/d/15CwhZ5oKqq45Hzwo4OrZ2ebbBZf72j2t/view?usp=sharing" target="_blank" rel="noreferrer">
              <button className="btn highlighted-btn nt">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
        
          </div>
      </div>
      
  );
}

export default Header;
