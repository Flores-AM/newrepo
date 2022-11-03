import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ubicacion from "../img/ubicacion.avif";
import email from "../img/email.avif";
import viber from "../img/viber.avif";
import instagram from "../img/instagram.avif";
import phone from "../img/phone.avif";
import linkedin from "../img/linkedin.avif";

const Contacto = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <div id="contacto">
      <section className="caja-contacto">
        <div className="container">
          <div
            className="contactInfo"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
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
          <Formik
            initialValues={{
              nombre: "",
              apellido: "",
              correo: "",
              celular: "",
              mensaje: "",
            }}
            validate={(valores) => {
              let errores = {};

              // Validacion nombre
              if (!valores.nombre) {
                errores.nombre = "Por favor ingrese su nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(valores.nombre)) {
                errores.nombre =
                  "El nombre solo puede contener letras y espacios";
              }

              // Validacion apellido
              if (!valores.apellido) {
                errores.apellido = "Por favor ingrese su apellido";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(valores.apellido)) {
                errores.apellido =
                  "El apellido solo puede contener letras y espacios";
              }

              // Validacion email
              if (!valores.correo) {
                errores.correo = "Por favor ingrese su correo";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.correo
                )
              ) {
                errores.correo =
                  "El correo solo puede contener letras, numeros, puntos y guiones";
              }

              // Validacion celular
              if (!valores.celular) {
                errores.celular = "Por favor ingrese su celular";
              } else if (!/^[0-9]{10,14}$/.test(valores.celular)) {
                errores.celular = "El celular solo puede contener numeros";
              }

              // Validacion mensaje
              if (!valores.mensaje) {
                errores.mensaje = "Por favor deje su mensaje";
              }
              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
              cambiarFormularioEnviado(true);
              setTimeout(() => cambiarFormularioEnviado(false), 10000);
            }}
          >
            {({ errors }) => (
              <Form
                className="contactForm"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h2>Enviar Mensaje</h2>
                <div className="formBox">
                  <div className="inputBox w50">
                    <Field type="text" id="nombre" name="nombre" required />
                    <span htmlFor="nombre">Nombre</span>
                    <ErrorMessage
                      name="nombre"
                      component={() => (
                        <div className="error">{errors.nombre}</div>
                      )}
                    />
                  </div>
                  <div className="inputBox w50">
                    <Field type="text" id="apellido" name="apellido" required />
                    <span htmlFor="correo">Apellido</span>
                    <ErrorMessage
                      name="apellido"
                      component={() => (
                        <div className="error">{errors.apellido}</div>
                      )}
                    />
                  </div>
                  <div className="inputBox w50">
                    <Field type="email" id="correo" name="correo" required />
                    <span htmlFor="correo">Email</span>
                    <ErrorMessage
                      name="correo"
                      component={() => (
                        <div className="error">{errors.correo}</div>
                      )}
                    />
                  </div>
                  <div className="inputBox w50">
                    <Field type="text" id="celular" name="celular" required />
                    <span>Celular</span>
                    <ErrorMessage
                      name="celular"
                      component={() => (
                        <div className="error">{errors.celular}</div>
                      )}
                    />
                  </div>
                  <div className="inputBox w100">
                    <Field
                      as="textarea"
                      id="mensaje"
                      name="mensaje"
                      required
                    ></Field>
                    <span>Deje su Mensaje</span>
                    <ErrorMessage
                      name="mensaje"
                      component={() => (
                        <div className="error">{errors.mensaje}</div>
                      )}
                    />
                  </div>
                  <div className="inputBox w100 enviar">
                    <input type="submit" value="Enviar" />
                    {formularioEnviado && (
                      <p
                        className="exito"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="200"
                      >
                        Formulario enviado con éxito!
                      </p>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
