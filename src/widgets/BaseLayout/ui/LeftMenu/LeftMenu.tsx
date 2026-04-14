import React from "react";
import s from "./LeftMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/shared/assets/icons/home.svg";
import Profile from "@/shared/assets/icons/profile.svg";
import Videos from "@/shared/assets/icons/videos.svg";
import Add from "@/shared/assets/icons/add.svg";

export const LeftMenu = () => {
  return (
    <aside className={s.leftMenu}>
      <nav className={s.nav}>
        <Link href="/" className={s.link}>
          <Image
            unoptimized
            src={HomeIcon}
            width={24}
            height={24}
            alt={"home"}
            aria-hidden="true"
            className={s.icon}
          />
          Главная
        </Link>

        <Link href="/profile/123" className={s.link}>
          <Image
            unoptimized
            src={Profile}
            width={24}
            height={24}
            alt={"profile"}
            aria-hidden="true"
            className={s.icon}
          />
          Профиль
        </Link>

        <div className={s.divider}></div>

        <Link href="/editor/addVideo" className={s.link}>
          <Image
            unoptimized
            src={Add}
            width={24}
            height={24}
            alt={"Add"}
            aria-hidden="true"
            className={s.icon}
          />
          Добавить видео
        </Link>

        <Link href="/profile/123" className={s.link}>
          <Image
            unoptimized
            src={Videos}
            width={24}
            height={24}
            alt={"videos"}
            aria-hidden="true"
            className={s.icon}
          />
          Ваши видео
        </Link>
      </nav>
    </aside>
  );
};
