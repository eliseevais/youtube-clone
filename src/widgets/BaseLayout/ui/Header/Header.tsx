import React from "react";
import s from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  profileId: string;
};

export const Header = ({ profileId }: HeaderProps) => {
  return (
    <header className={s.header}>
      <Link href="/">
        <Image src={"/youtubeLogo.svg"} alt={"Logo"} width={93} height={20} />
      </Link>

      <div className={s.rightPart}>
        <Link href={"/editor/addVideo"} className={s.createVideoLink}>
          Create
        </Link>

        <Link href={`/profile/${profileId}`} className={s.yourProfileLink}>
          <div className={s.hiddenText}>To my profile</div>
        </Link>
      </div>
    </header>
  );
};
