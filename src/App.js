
import "./App.css"
import Footer from "./components/footer/footer";
import Head from "./components/head/Head";
import Portfolio from "./components/portfolio/portfolio";
import Skills from "./components/skills/Skills";
import WorkExperience from "./components/work-experience/WorkExperience";


function App() {
  return (
    <div className="App">
      <Head />
      <Skills />
      <WorkExperience />
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
