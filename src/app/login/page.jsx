"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { toast } from "sonner";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.loginText}>Login Now!</p>
        <div className={styles.socialButton} onClick={() => signIn("google", {
          callbackUrl: "https://dev-mind-seven.vercel.app",
        })}>
          Sign in with Google <FcGoogle className={styles.logo} />
        </div>
        <div onClick={() => toast.error("This feature is not available at this moment!")} className={styles.socialButton}>Sign in with Github <FaGithub className={styles.logo} /></div>
        <div onClick={() => toast.error("This feature is not available at this moment!")} className={styles.socialButton}>Sign in with Facebook <FaFacebook className={styles.logo} /></div>
      </div>
    </div>
  );
};

export default LoginPage;
