import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoginContext, loginContext } from "../context/login";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import Template from "../component/template";
import GetDataFromFirebase from "../component/form/showData";
import {FirebaseAuth} from "../firebase";

// cek apakah ini sudah di eksekusi ( useEffect )
let isExecute = false;
function MyApp({ Component, pageProps }: AppProps) {
  // apakah sudah login
  const [isLogin, setIsLogin] = useState(false);
  // data collection short profile
  const [data, setData] = useState({
    name: "",
    url: "",
  });
  // indikasi loading
  const [isLoading, setisLoading] = useState(true);
  // context
  const loginContext: loginContext = {
    isLogin,
    data,
    setIsLogin,
    setData,
    setisLoading,
  };

  useEffect(() => {
    // apakah sebelumnya sudah dieksekusi
    if (!isExecute) {
      // ubah menjadi true
      isExecute = true;
      // mengambil data user short
      onAuthStateChanged(FirebaseAuth, (user: any) => {
        // jika user login
        if (user) {
          setIsLogin(true);
          // console.log(user);
          // update data short
          GetDataFromFirebase({ setData, user });
          setisLoading(false);
          return;
        }
        // context.setIsLogin(false);
        setisLoading(false);
        return;
      });
    }
  }, [isLogin]);

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
