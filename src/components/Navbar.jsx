import React from "react";

import data from "../assets/data.json";
const Navbar = ({ onLanguageChange, language }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
        <div className="container">
          <a
            className="navbar-brand ts-push-down__50 position-absolute ts-bottom__0 bg-white pb-0 ts-z-index__1 ts-scroll"
            href="#page-top"
          >
            <img src="./public/assets/img/images.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-block d-lg-flex ml-auto text-right">
              <a
                className="nav-item nav-link active ts-scroll"
                href="#page-top"
              >
                {data.home[language]} <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link ts-scroll" href="#about-me">
                {data.aboutme[language]}
              </a>
              <a className="nav-item nav-link ts-scroll" href="#my-skills">
                {data.skill[language]}
              </a>
              <a className="nav-item nav-link ts-scroll" href="#my-services">
                {data.service[language]}
              </a>
              <a
                className="nav-item nav-link ts-scroll mr-2"
                href="#form-contact"
              >
                Contact
              </a>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  {language === "fr" ? "Français" : "English"}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button
                    className="dropdown-item btn-css"
                    onClick={() =>
                      onLanguageChange({ target: { value: "fr" } })
                    }
                  >
                    Français
                  </button>
                  <button                
                    className="dropdown-item btn-css"
                    onClick={() =>
                      onLanguageChange({ target: { value: "en" } })
                    }
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
