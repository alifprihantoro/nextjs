import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoginContext, loginContext } from "../context/login";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Template from "../component/template";
import ShowData from "../component/form/showData";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({
    name: "",
    url: "",
  });
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
        ShowData({ setData, user });
        setisLoading(false);
        return;
      }
      // context.setIsLogin(false);
      setisLoading(false);
      return;
    });
  }, [data]);
  if (isLoading) {
    return <>loading...</>;
  }
  return (
    <div className={styles.container}>
      <LoginContext.Provider value={loginContext}>
        <Template>
          <Component {...pageProps} />
        </Template>
      </LoginContext.Provider>
    </div>
  );
}

export default MyApp;
