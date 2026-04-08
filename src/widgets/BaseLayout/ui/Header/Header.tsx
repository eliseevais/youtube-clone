import React from "react";
import s from "./Header.module.css";
import Image from "next/image";
import Logo from "./logo.png";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={s.header}>
      <Link href="/">
        <Image width={150} src={Logo} alt={"Logo"} />
      </Link>
    </header>
  );
};
