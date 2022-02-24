import Skills from '../skills/Skills';
import WorkExperience from '../work-experience/WorkExperience';



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bb sticky-top shadow">
      <div className="container">
        <div className="container-fluid">
            <img
              className="logo"
              src={require("../../assets/home/bimms.png")}
              alt="no-internet"
            />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a
                  className="nav-link"
                  href={<Skills/>}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={<WorkExperience/>}
                >
                  Work Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/AbimbolaBakare"
                  target="_blank"
                  rel="noreferrer"
                >
                  github projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="+234-809259480"
                >
                  contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
