import "../styles/globals.css";
import type { AppProps } from "next/app";
import Template from "../component/template";
import CekIsLogin from "../service/firebase/auth/cekIsLogin";
import {useEffect, useState} from "react";
import {LoginContext} from "../context/login";

let isExecute:boolean
function MyApp({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = useState(false);
  // data collection short profile
  const [data, setData] = useState({});
  // indikasi loading
  const [isLoading, setisLoading] = useState(true);
  // context
  const loginContext = {
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
      CekIsLogin(loginContext)
    }
  }, []);
  if (isLoading) {
    return <>loading...</>
  }

  return (
      <LoginContext.Provider value={loginContext}>
        <Template>
          <Component {...pageProps} />
        </Template>
      </LoginContext.Provider>
  );
}

export default MyApp;
