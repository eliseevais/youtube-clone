import React from "react";
import s from "./BaseLayout.module.css";
import { Header } from "@/widgets/BaseLayout/ui/Header";
import { LeftMenu } from "@/widgets/BaseLayout/ui/LeftMenu";

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
