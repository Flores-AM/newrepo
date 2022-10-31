import React from "react";
import ubicacion from "../img/ubicacion.avif";
import email from "../img/email.avif";
import viber from "../img/viber.avif";
import instagram from "../img/instagram.avif";
import phone from "../img/phone.avif";
import linkedin from "../img/linkedin.avif";

const Contacto = () => {
  return (
    <div id="contacto">
      <section className="caja-contacto">
        <div className="container">
          <div className="contactInfo">
            <ul className="info">
              <h2>Informacion de Contacto</h2>
              <li>
                <span>
                  <img src={ubicacion} />
                </span>
                <span>Tigre, Buenos Aires</span>
              </li>
              <li>
                <span>
                  <img src={email} />
                </span>
                <span>agustinmatiasf@gmail.com</span>
              </li>
              <li>
                <span>
                  <img src={viber} />
                </span>
                <span>1168755955</span>
              </li>
            </ul>
            <ul className="sci">
              <li>
                <a
                  href="https://www.linkedin.com/in/agustin-matias-flores/"
                  target="blank"
                >
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=541168755955"
                  target="blank"
                >
                  <img src={phone} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/agustinmatiasf/"
                  target="blank"
                >
                  <img src={instagram} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="contactForm">
            <h2>Enviar Mensaje</h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" required />
                <span>Nombre</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required />
                <span>Apellido</span>
              </div>
              <div className="inputBox w50">
                <input type="email" required />
                <span>Email</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required />
                <span>Celular</span>
              </div>
              <div className="inputBox w100">
                <textarea required></textarea>
                <span>Deje su Mensaje</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Enviar" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
