import React from "react";

function BurgerBoton(props) {
  return (
    <div className="burger">
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-5 ${props.clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default BurgerBoton;
