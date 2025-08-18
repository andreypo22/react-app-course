import React from "react";
import cls from "./Button.module.css";

const inlineStyles = {
  color: "black",
};

const isPrimary = true;

const Button = (props) => {
  return (
    <div>
      <button
        className={isPrimary ? cls.primary : cls.btn}
        style={inlineStyles}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
