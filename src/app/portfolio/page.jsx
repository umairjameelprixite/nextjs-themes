import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  const title = "Portfolio";
  console.log(title);

  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Portfolio</h1>
      <div className={styles.items}>
        <div className={styles.item}>
          <div>
            <span className={styles.title}>Angular</span>
          </div>
          <div>
            <span className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos.
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <span className={styles.title}>React</span>
          </div>
          <div>
            <span className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos.
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <span className={styles.title}>Node</span>
          </div>
          <div>
            <span className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos.
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <span className={styles.title}>Express</span>
          </div>
          <div>
            <span className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos.
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <span className={styles.title}>Next.js</span>
          </div>
          <div>
            <span className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
