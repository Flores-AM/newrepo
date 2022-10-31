import React, { useState } from "react";
import { Link } from "react-scroll";
import BurgerBoton from "./BurgerBoton";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const cerrar = () => {
    setClicked();
  };

  return (
    <div>
      <div className="navContainer">
        <h2>
          Flores <span>WD</span>
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <div className="marker"></div>
          <Link
            onClick={cerrar}
            className="a"
            to="header2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Inicio
          </Link>
          <Link
            onClick={cerrar}
            className="a"
            to="info"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Sobre Mi
          </Link>
          <Link
            onClick={cerrar}
            className="a"
            to="body-cards"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Portafolio
          </Link>
          <Link
            onClick={cerrar}
            className="a"
            to="contacto"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contacto
          </Link>
        </div>
        <BurgerBoton clicked={clicked} handleClick={handleClick} />
        <div className={`initial ${clicked ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default Nav;
