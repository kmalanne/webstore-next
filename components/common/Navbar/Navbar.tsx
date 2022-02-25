import { FC } from "react";
import Link from "next/link";
import { Logo } from "@components/ui";
import s from "./Navbar.module.css";

interface ILink {
  href: string;
  label: string;
}

interface INavbarProps {
  links?: ILink[];
}

const Navbar: FC<INavbarProps> = ({ links }) => (
  <header className={s.header}>
    <div className={s.linkWrapper}>
      <Link href="/">
        <a aria-label="Logo">
          <Logo />
        </a>
      </Link>
      <nav className={s.nav}>
        <Link href="/search">
          <a className={s.link}>All</a>
        </Link>
        {links?.map((link) => (
          <Link href={link.href} key={link.href}>
            <a className={s.link}>{link.label}</a>
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

export default Navbar;
