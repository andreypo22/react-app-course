import { Button } from "../Button";
import cls from "./Header.module.css";
import reactLogo from "../../assets/react.svg";
import React from "react";

export const Header = () => {
  return (
    <header className={cls.header}>
      <p>
        <img src={reactLogo} alt="react logo" />
        <span>ReactCards</span>
      </p>
      <div className={cls.headerButtons}>
        <Button isActive>Add</Button>
        <Button>Login</Button>
      </div>
    </header>
  );
};

// export default Header
