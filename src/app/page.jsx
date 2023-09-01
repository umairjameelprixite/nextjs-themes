"use client";
import Image from "next/image";
import styles from "./page.module.css";
import next from "public/next.svg";
import code from "public/code.png";
import Link from "next/link";

export default function Home() {
  const obj = [
    {
      id: 1,
      name: "name 1",
      description: "description 1",
    },
    {
      id: 2,
      name: "name 2",
      description: "description 2",
    },
  ];

  console.log(obj);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image className={styles.img2} src={code} alt="" />
        <h1 className={styles.title}>Next.js 13 Theming</h1>
        <p className={styles.description}>
          We will learn how to implement theming in next.js 13
        </p>
        <Link href="/portfolio">
          <button className={styles.button}>Portfolio</button>
        </Link>
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={next} alt="" />
      </div>
    </div>
  );
}
