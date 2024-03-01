import data from "../assets/data.json";
import resumePDF from "../assets/Rabenjarijaona_Ony_Andrihanina.pdf";
const AboutMe = ({ language }) => {
  return (
    <>
      <section id="about-me" className="ts-block pb-4">
        <div className="container">
          <div className="ts-title text-center">
            <h2>{data.aboutMe[language]}</h2>
          </div>
          <div className="row ts-align__vertical">
            <div className="col-md-6">
              <img
                src="./public/assets/img/photo.jpg"
                alt=""
                className="mw-100 mb-5"
              />
            </div>
            <div className="col-md-6">
              <h4 className="ts-bubble-border">
                <i></i>
                {data.hi[language]}
              </h4>
              <p>
                {data.text1[language]}
                <br />
                <br />
                {data.text2[language]}
                <br />
                <br />
                {data.text3[language]}
              </p>
              <dl className="ts-column-count-2">
                <dt>{data.nameContact[language]}:</dt>
                <dd>Rabenjarijaona Ony Andrihanina</dd>
                <dt>{data.phone[language]}:</dt>
                <dd>+261 34 54 947 11</dd>
                <dt>Email:</dt>
                <dd>rabenjarijaonaoa@gmail.com</dd>
                <dt>Linkedin:</dt>
                <dd>Ony Andrihanina Rabenjarijaona</dd>
              </dl>
              <hr className="ts-hr-light mb-5" />
              <a href="#contact" className="ts-btn-effect mr-2">
                <span className="ts-visible btn btn-primary ">
                  {data.contactMe[language]}
                  <i className="fa fa-sm fa-arrow-right ml-2"></i>
                </span>
                <span
                  className="ts-hidden btn btn-primary"
                  data-bg-color="#d44729"
                >
                  {data.contactMe[language]}
                  <i className="fa fa-sm fa-arrow-right"></i>
                </span>
              </a>
              <a href={resumePDF} className="ts-btn-effect mr-2" download>
                <span className="ts-visible btn btn-outline-light">
                  <i className="fa fa-sm fa-download mr-2"></i>
                  {data.downloadCv[language]}
                </span>
                <span className="ts-hidden btn btn-light bg-white">
                  <i className="fa fa-sm fa-download mr-2"></i>
                  {data.downloadCv[language]}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
