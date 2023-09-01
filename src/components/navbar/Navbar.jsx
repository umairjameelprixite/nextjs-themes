"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Portfolio",
    url: "/portfolio",
  },
];

const Navbar = () => {
  const { switchDark, switchLight, theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Programming with Umair
      </Link>
      <div className={styles.links}>
        {links.map((link, index) => (
          <Link key={index} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <button
          className={`${styles.themebtns}`}
          onClick={theme === "dark" ? switchLight : switchDark}
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
