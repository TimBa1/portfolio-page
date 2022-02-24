import React from 'react';
import "./footer.css"
import Head from '../head/Head';

export default function Footer() {
  return  <div className=" tf"> 
  <footer className="footer container">
          <div>
              <h1 className="text-written">Let’s try me!</h1>
          </div>
        <div className="line"></div>
      <div id="bottom">
          <div className="container justify-content-between">
              <div className="colum ">
                  <div className="socials-list d-flex">
                          <p><i className="fa fa-github-square" aria-hidden="true" /></p>
                          <p><i className="fa fa-linkedin-square" aria-hidden="true" /></p>
                          <p><i className="fa fa-yahoo" aria-hidden="true" /></p>
                      </div>
                  <div className="d-flex pl-5 m;-5 sc">
                        <p> <a href={<Head/>}>Home</a></p>
                        <p><a href="http://deomolara@yahoo.com"  target="_blank"
                  rel="noreferrer">Email</a></p>
                        <p>About</p>
                        <p><a href="http://+234-809259480">Contact</a></p>
                  </div>
                
                      <div className="copyright lt-sp02">
                          © TimBa Design, 2022 All rights reserved.
                          </div>
                      
                  
              </div>
          </div>
      </div>
  </footer>
</div>
}
