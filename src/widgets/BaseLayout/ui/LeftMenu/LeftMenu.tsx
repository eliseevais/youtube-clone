import React from "react";
import s from "./LeftMenu.module.css";

export const LeftMenu = () => {
  return (
    <aside className={s.leftMenu}>
      <nav className={s.nav}>
        <a href="#">Главная</a>
        <a href="#">Главная</a>
        <a href="#">Главная</a>
      </nav>
    </aside>
  );
};
