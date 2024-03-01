import { useState, useEffect } from "react";
import data from "../assets/data.json";
import axios from "axios";
const Footer = ({ language }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const serviceId = "service_1uohvxp";
    const templateId = "template_0h8c6j4";
    const publicKey = "t6OOMUZOhoUNK5PpC";

    const donnee = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        from_subject: subject,
        to_name: "Ony", // Utilisation de votre nom "Ony" ici
        message: message, // Correction de la clé de l'objet template_params
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        donnee
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
      setSuccessMessage(data.messageEnvoye[language]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <>
      <footer id="ts-footer" className="mt-5">
        <section
          id="contact"
          className="ts-block ts-separate-bg-element"
          data-bg-image="./public/assets/img/contact.png"
          data-bg-image-opacity=".1"
        >
          <div className="container">
            <div className="ts-title text-center">
              <h2 className="ts-bubble-border">
                <i></i>
                {data.getintouch[language]}
              </h2>
            </div>
            <div className="row ts-xs-text-center ">
              <div
                className="col-sm-6 col-md-3 mb-4"
                data-animate="ts-fadeInUp"
              >
                {/* <img src="./public/assets/img/iconpin.jpeg" className="mb-4" alt="" /> */}
                <i className="fa fa-lg fa-home mb-4"></i>
                <h5>{data.adress[language]}</h5>
                <div className="ts-opacity__50">
                  <figure className="mb-0">LOT II U 57B ANDRAINARIVO</figure>
                  <figure>101 Antananarivo</figure>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-3 mb-4"
                data-animate="ts-fadeInUp"
                data-delay=".1s"
              >
                {/* <img
                  src="assets/img/icon-phone-02.png"
                  className="mb-4"
                  alt=""
                /> */}
                <i className="fa fa-lg fa-phone mb-4"></i>
                <h5>{data.phone[language]}</h5>
                <div className="ts-opacity__50">
                  <figure className="mb-0">+261 34 54 947 11</figure>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-3 mb-4"
                data-animate="ts-fadeInUp"
                data-delay=".2s"
              >
                {/* <img
                  src="assets/img/icon-envelope.png"
                  className="mb-4"
                  alt=""
                /> */}
                <i className="fa fa-lg fa-envelope mb-4"></i>
                <h5>Email</h5>
                <div className="ts-opacity__50">
                  <figure className="mb-0">rabenjarijaonaoa@gmail.com</figure>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-3 mb-4"
                data-animate="ts-fadeInUp"
                data-delay=".3s"
              >
                {/* <img
                  src="assets/img/icon-talk-bubble.png"
                  className="mb-4"
                  alt=""
                /> */}
                <i className="fab fa-lg fa-linkedin-in mb-4"></i>
                <h5>LinkedIn</h5>
                <div className="ts-opacity__50">
                  <figure>
                    <a href="https://www.linkedin.com/in/ony-andrihanina-rabenjarijaona-112595272/">
                      Ony Andrihanina Rabenjarijaona
                    </a>
                  </figure>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="row">
                <div className="col-md-4">
                  <h3>{data.letsconnect[language]}</h3>
                  <div className="ts-column-count-sm-2">
                    <a
                      href="https://www.linkedin.com/in/ony-andrihanina-rabenjarijaona-112595272/"
                      className="mb-3 d-flex text-white ts-align__vertical"
                    >
                      <span className="ts-circle__xs border border-white ts-border-light mr-4">
                        <i className="fab fa-linkedin-in"></i>
                      </span>
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://wa.me/261345494711"
                      className="mb-3 d-flex text-white ts-align__vertical"
                    >
                      <span className="ts-circle__xs border border-white ts-border-light mr-4">
                        <i className="fab fa-whatsapp"></i>
                      </span>
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href="https://join.skype.com/invite/NYZvEkKtl4ZJ"
                      className="mb-3 d-flex text-white ts-align__vertical"
                    >
                      <span className="ts-circle__xs border border-white ts-border-light mr-4">
                        <i className="fab fa-skype"></i>
                      </span>
                      <span>Skype</span>
                    </a>
                    <a
                      href="tel:+261345494711"
                      className="mb-3 d-flex text-white ts-align__vertical"
                    >
                      <span className="ts-circle__xs border border-white ts-border-light mr-4">
                        <i className="fa fa-phone"></i>
                      </span>
                      <span>+261 34 54 947 11</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-8">
                  <h3>{data.sendme[language]}</h3>
                  <form
                    onSubmit={handleSubmit}
                    id="form-contact"
                    className="clearfix ts-form"
                  >
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label htmlFor="form-contact-name">
                            {data.nameContact[language]} *
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="form-contact-name"
                            name="name"
                            placeholder={data.nameContact[language]}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label htmlFor="form-contact-email">Email *</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="form-contact-email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="form-contact-subject">
                        {data.subjet[language]} *
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="form-control"
                        id="form-contact-subject"
                        name="subject"
                        placeholder={data.subjet[language]}
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="form-contact-message">
                            Message *
                          </label>
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="form-control"
                            id="form-contact-message"
                            rows="5"
                            name="message"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="form-group clearfix">
                      <button
                        type="submit"
                        className="btn btn-primary float-right"
                        id="form-contact-submit"
                        disabled={loading}
                      >
                        {loading ? data.charge[language] : data.sendAm[language]}
                      </button>
                    </div>
                    <div className="form-contact-status">
                      {successMessage && <p>{successMessage}</p>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-dark bg-white">
          <div className="container py-3 position-relative">
            <small>© 2023 by Rabenjarijaona Ony Andrihanina</small>
            <a
              href="#page-top"
              className="ts-circle__xs rounded-0 bg-dark position-absolute ts-right__0 ts-top__0 ts-push-up__50 ts-scroll"
            >
              <i className="fa fa-arrow-up text-white"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
