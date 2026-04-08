import React from "react";
import s from "./BaseLayout.module.css";
import { Header } from "@/app/widgets/BaseLayout/ui/Header";
import { LeftMenu } from "@/app/widgets/BaseLayout/ui/LeftMenu";

type BaseLayoutProps = {
  children: React.ReactNode;
};
export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className={s.container}>
      <Header />
      <LeftMenu />
      {children}
    </div>
  );
};
