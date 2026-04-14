import Image from "next/image";
import s from "./NotFoundPage.module.css";
import Link from "next/link";
import React from "react";

export const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <Image
        className={s.image}
        unoptimized
        width={185}
        height={174}
        src={"/monkey.png"}
        alt="404"
      />

      <p>Эта страница недоступна.</p>
      <p>Может, поискать что-нибудь другое?</p>

      <Link href="/" className={s.link}>
        <Image src={"/youtubeLogo.svg"} alt={"Logo"} width={145} height={30} />
      </Link>
    </div>
  );
};
