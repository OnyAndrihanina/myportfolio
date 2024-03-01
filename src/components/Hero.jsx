import React from "react";
import data from "../assets/data.json";
const Hero = ({ language }) => {
  return (
    <>
      <div id="ts-hero" className="ts-animate-hero-items">
        <div className="container position-relative h-100 ts-align__vertical">
          <div className="row w-100">
            <div className="col-md-8">
              <figure className="ts-social-icons mb-4">
              <a href="tel:+261347952207" className="mr-3">
                  <i className="fa fa-sm fa-phone"></i>
                </a>
                <a href="https://www.linkedin.com/in/ony-andrihanina-rabenjarijaona-112595272/" className="mr-3">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://wa.me/261345494711" className="mr-3">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://join.skype.com/invite/NYZvEkKtl4ZJ" className="mr-3">
                  <i className="fab fa-skype"></i>
                </a>
              </figure>
              <h1>{data.name[language]}</h1>
              <h1 className="ts-bubble-border">
                <span className="ts-title-rotate">
                  <span className="active">{data.description1[language]}<br/>{data.description1suite[language]}</span>
                  <span>{data.description2[language]}</span>
                  <span>{data.description3[language]}</span>
                </span>
              </h1>
            </div>
          </div>
          <a
            href="#about-me"
            className="ts-btn-effect position-absolute ts-bottom__0 ts-left__0 ts-scroll ml-3 mb-3"
          >
            <span className="ts-visible ts-circle__sm rounded-0 ts-bg-primary">
              <i className="fa fa-arrow-down text-white"></i>
            </span>
            <span className="ts-hidden ts-circle__sm rounded-0">
              <i className="fa fa-arrow-down text-white"></i>
            </span>
          </a>
        </div>
        <div className="ts-background">
          <div
            className="ts-background-image mt-4"
            data-bg-image="./public/assets/img/test.jpg"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
