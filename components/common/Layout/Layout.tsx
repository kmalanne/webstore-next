import React, { FC } from "react";
import { Navbar } from "@components/common";
import s from "./Layout.module.css";

const Layout: FC<{}> = ({ children }) => {
  const navBarlinks = [{ label: "", href: `/` }];

  return (
    <div className={s.root}>
      <Navbar links={navBarlinks} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
