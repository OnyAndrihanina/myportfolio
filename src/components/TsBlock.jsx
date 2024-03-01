import data from "../assets/data.json";
const TsBlock = ({ language }) => {
  return (
    <>
      <section className="ts-block">
        <div className="container">
          <div className="text-center px-5 pt-5 position-relative">
            <h3 className="my-3">{data.letswork[language]}</h3>
            <a
              href="#contact"
              className="btn btn-primary mr-2 ts-push-down__50 ts-has-talk-arrow"
            >
              {data.hireMe[language]}
            </a>
            <div
              className="ts-background ts-opacity__20"
              data-bg-image="./public/assets/img/developpeur-web.jpg"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TsBlock;
