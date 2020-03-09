import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header_content d-flex flex-row align-items-center justify-content-start">
          <div className="logo">
            Stella<span>.</span>Hu<span>.</span>Xing
          </div>
          <div className="main_nav d-flex flex-row align-items-end justify-content-start">
            <ul className="d-flex flex-row align-items-center justify-content-start">
              <li className="active">
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="skills.html">Skills</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="experience.html">Experience</a>
              </li>
              <li>
                <a href="education.html">Education</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="testimonials.html">Testimonials</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <div className="header_button ml-auto">
              <a href="test.html">Available for freelance work</a>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img src="images/download.png" alt="" />
              </div>
            </div>
          </div>
          {/* Menu */}
          <div className="menu">
            <div className="menu_content d-flex flex-row align-items-start justify-content-end">
              <div className="hamburger ml-auto">menu</div>
              <div className="menu_nav text-right">
                <ul>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="skills.html">Skills</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="experience.html">Experience</a>
                  </li>
                  <li>
                    <a href="education.html">Education</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="testimonials.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
