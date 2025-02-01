import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Unlocking the Power of Technology Through Knowledge and Innovation</h2>
          <p className={styles.postDesc}>
          Welcome to Dev Mind, your ultimate destination for insightful blogs, tutorials, and discussions on the latest trends in technology.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
