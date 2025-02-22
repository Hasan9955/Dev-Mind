import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import logo from "../../../public/dev mind logo.png";


//  <div className={styles.social}>
//   <Image src="/facebook.png" alt="facebook" width={24} height={24} />
//   <Image src="/instagram.png" alt="instagram" width={24} height={24} />
//   <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
//   <Image src="/youtube.png" alt="youtube" width={24} height={24} />
// </div> 

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
        <Image src={logo} alt="logo" width={170} height={50} />
        </Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
