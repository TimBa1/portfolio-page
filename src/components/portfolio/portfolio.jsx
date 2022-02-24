import React from "react";
import { Fade } from "react-reveal";
import "./portfolio.css"

function Portfolio() {
  return (
    <div>
      <Fade bottom duration={1000}>
        <div className="container miti">
          <div className="portfolio-info">
            <h1>Client Project</h1>
            <h3 className="pt-5">
              SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH
            </h3>
          </div>
          <div className="projects">
            <div className="muti">
              <img className="port-img pb-4" src={require("../../assets/home/agrific-mp.jpeg")} alt="no network" />
              <div className="project-name">Agrific</div>
              <div className="project-desc">
                Agrifc is a B2B2C platform aiming to be a comprehensive trade
                hub that connects Nigeria farm producers and agro-commodity
                businesses with local and international buyers.
              </div>
              <button className=" sec-btn">
                <a href="http://agrifc.com" target="_blank" rel="noreferrer">
                  visit site
                </a>
              </button>
            </div>
            
            <div className=" muti">
            <img className="port-img pb-4" src={require("../../assets/home/getripay-mp.jpeg")} alt="no network" />
              <div className="project-name">getripay</div>
              <div className="project-desc">
              GetriPay - Provides users with bank accounts and has features of inter and intra bank transfers, bill payments(airtime, data, cable tv etc), loans, bulk payments.,<br/>
              GetriSave - GetriSave allows users to cultivate an healthy savings habit either through indiviual savings, group savings or by enabling auto save.,<br/>
              GetriVest - GetriVest allows user invest in a particular product for a given amount of time.,<br/>
              GetriShop - Provides all the features of a virtual shop you can think of.<br/>
              </div>
              <button className=" sec-btn">
                <a href="http://getripay.com" target="_blank" rel="noreferrer">
                  visit site
                </a>
              </button>
            </div>
            
            <div className="muti">
            <img className="port-img pb-4" src={require("../../assets/home/marketplace-kudi.jpeg")} alt="no network" />
              <div className="project-name">Marketplace</div>
              <div className="project-desc">
                With Kudi Marketplace you can accept payments, send payouts, onboard customers and more offline from any where in nigeria  .
              </div>
              <button className=" sec-btn">
               <a href="http://kudi.com" target="_blank" rel="noreferrer"> 
                  visit site
                </a>
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Portfolio;
