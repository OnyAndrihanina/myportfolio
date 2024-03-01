import data from "../assets/data.json";
import Zoom from 'react-medium-image-zoom';
const ModalSym = ({ language }) => {
  return (
    <>
      <div
        className="modal fade text-dark"
        id="modalSym"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modal"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content border-0 rounded-0">
            <div className="modal-header bg-light px-5 pt-0 pb-5">
              <div className="ts-title mb-0">
                <figure className="ts-circle__md bg-dark rounded-0">
                  <img src="./public/assets/img/sym.png" alt="" />
                </figure>
                <h4 className="mb-0">{data.devSym[language]}</h4>
              </div>

              <button
                type="button"
                className="close position-absolute ts-top__0 ts-right__0 m-2"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body p-5">
              <h5 className="mb-4">{data.recent[language]} <br/>
              <span style={{ fontStyle: 'italic', color: '#343a40' ,fontSize : '14px'}}>Soa Irina</span></h5>
              <div className="owl-carousel" data-owl-dots="1">
                <div className="slide">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">
                        <img src="./public/assets/img/HomeSoairina.png" alt="" />
                      </div>
                      <div className="col-md-8">
                        <h4 className="mb-3">E-commerce SoaIrina</h4>
                        <p>
                          {data.devsymStatut[language]} <br />
                          {data.readmoreSym[language]}
                        </p>
                        <a href="https://gitlab.com/rabenjarijaonaoa/soairina-prjt" className="mb-4 text-dark d-block">
                          <i className="fa fa-globe ts-opacity__50 mr-2"></i>
                          {data.code[language]}
                        </a>
                        <hr />
                        <h6>{data.techno[language]}</h6>
                        <ul className="list-unstyled ts-opacity__50">
                        <li>Symfony</li>
                          <li>Php</li>
                          <li>Twig</li>
                          <li>MySql</li>
                          <li>Bootstrap</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSym;
