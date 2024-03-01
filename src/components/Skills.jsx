import data from "../assets/data.json";
const Skills = ({language}) => {
    return ( 
        <>
        <section id="my-skills" className="ts-block pb-5">
                <div className="container">
                    <div className="ts-title text-center">
                        <h2>{data.myskills[language]}</h2>
                    </div>
                    <h4>{data.everyday[language]}</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                {data.everydayP1[language]}
                            </p>
                            <p>
                            {data.everydayP2[language]}
                            </p>
                            <a href="#contact" className="btn btn-outline-light mb-5">{data.contactMe[language]}</a>
                        </div>
                        <div className="col-md-6">
                            <div className="progress" data-progress-width="80%">
                                <h5 className="ts-progress-title">Php</h5>
                                <figure className="ts-progress-value"></figure>
                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="progress" data-progress-width="80%">
                                <h5 className="ts-progress-title">Symfony</h5>
                                <figure className="ts-progress-value"></figure>
                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="progress" data-progress-width="70%">
                                <h5 className="ts-progress-title">ReactJs</h5>
                                <figure className="ts-progress-value"></figure>
                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="progress" data-progress-width="75%">
                                <h5 className="ts-progress-title">Spring Boot</h5>
                                <figure className="ts-progress-value"></figure>
                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Skills;