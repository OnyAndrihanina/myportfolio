import data from "../assets/data.json";
const MyServices = ({ language }) => {
  return (
    <>
      <section id="my-services" className="ts-block ts-xs-text-center pb-0">
        <div className="container">
          <div className="ts-title text-center">
            <h2>{data.work[language]}</h2>
            <p>{data.need[language]}</p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-xl-4">
              <div className="ts-item" data-animate="ts-fadeInUp">
                <div className="ts-item-content">
                  <div className="ts-item-header">
                    <figure className="icon">
                      <img src="./public/assets/img/webdev.png" alt="" />
                    </figure>
                  </div>
                  <div className="ts-item-body">
                    <h4>{data.description3[language]}</h4>
                    <p className="mb-0">{data.dechetstatut[language]}</p>
                  </div>
                  <div className="ts-item-footer">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#webdev"
                      className="ts-link-arrow-effect"
                    >
                      <span>{data.readmore[language]}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-4">
              <div
                className="ts-item"
                data-animate="ts-fadeInUp"
                data-delay=".1s"
              >
                <div className="ts-item-content">
                  <div className="ts-item-header">
                    <figure className="icon">
                      <img src="./public/assets/img/dnet.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="ts-item-body">
                    <h4>{data.devDnet[language]}</h4>
                    <p className="mb-0">{data.dnetStatut[language]}</p>
                  </div>
                  <div className="ts-item-footer">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#modal"
                      className="ts-link-arrow-effect"
                    >
                      <span>{data.readmore[language]}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-4">
              <div
                className="ts-item"
                data-animate="ts-fadeInUp"
                data-delay=".2s"
              >
                <div className="ts-item-content">
                  <div className="ts-item-header">
                    <figure className="icon">
                      <img src="./public/assets/img/sf.png" alt="" />
                    </figure>
                  </div>
                  <div className="ts-item-body">
                    <h4>{data.devSym[language]}</h4>
                    <p className="mb-0">{data.devsymStatut[language]}</p>
                  </div>
                  <div className="ts-item-footer">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#modalSym"
                      className="ts-link-arrow-effect"
                    >
                      <span>{data.readmore[language]}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-4">
              <div
                className="ts-item"
                data-animate="ts-fadeInUp"
                data-delay=".4s"
              >
                <div className="ts-item-content">
                  <div className="ts-item-header">
                    <figure className="icon">
                      <img src="./public/assets/img/phplogo.png" alt="" />
                    </figure>
                  </div>
                  <div className="ts-item-body">
                    <h4>{data.devPhp[language]}</h4>
                    <p className="mb-0">
                      {data.devPhpStatut[language]}
                    </p>
                  </div>
                  <div className="ts-item-footer">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#modalPhp"
                      className="ts-link-arrow-effect"
                    >
                      <span>{data.readmore[language]}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyServices;
