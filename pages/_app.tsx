import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoginContext, loginContext } from "../context/login";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const loginContext: loginContext = {
    isLogin,
    data,
    setIsLogin,
    setData,
    setisLoading,
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user: any) => {
      if (user) {
        setIsLogin(true);
        // console.log(user.uid);
        // console.log(user);
        const name = user.email?.replace(/\@.*/, "");
        const email = user.email;
        setData({ name, email });
        // console.log(context.data);
        setisLoading(false);
        return;
      }
      // context.setIsLogin(false);
      setisLoading(false);
      return;
    });
  }, []);
  if (isLoading) {
    return <>loading...</>;
  }
  return (
    <div className={styles.container}>
      <LoginContext.Provider value={loginContext}>
        <Component {...pageProps} />
      </LoginContext.Provider>
    </div>
  );
}

export default MyApp;
