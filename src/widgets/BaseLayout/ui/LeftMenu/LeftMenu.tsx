import React from "react";
import s from "./LeftMenu.module.css";
import Link from "next/link";

export const LeftMenu = () => {
  return (
    <aside className={s.leftMenu}>
      <nav className={s.nav}>
        <Link href="/editor/addVideo">Добавить видео</Link>
        <Link href="/profile/123">Профиль</Link>
      </nav>
    </aside>
  );
};
