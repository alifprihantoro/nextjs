import "../styles/globals.css";
import type { AppProps } from "next/app";
import Template from "../component/template";
import CekIsLogin from "../service/firebase/auth/cekIsLogin";
import { useEffect, useState } from "react";
import { LoginContext } from "../context/login";
import { useRouter } from "next/router";

let isExecute: boolean;
function MyApp({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = useState(false);
  // data collection short profile
  const [data, setData] = useState({});
  // indikasi loading
  const [isLoading, setisLoading] = useState(true);
  // context
  const loginContext2 = {
    isLogin,
    data,
    setIsLogin,
    setData,
    setisLoading,
    isLoading,
  };

  const router = useRouter();
  useEffect(() => {
    // apakah sebelumnya sudah dieksekusi
    if (!isExecute) {
      // ubah menjadi true
      isExecute = true;
      CekIsLogin(loginContext2);
      if (!isLogin && router.pathname !== "/") {
        router.push("/");
      }
    }
  }, []);
  if (!isLogin && router.pathname !== "/") {
    return;
  }
  return (
    <LoginContext.Provider value={loginContext2}>
      <Template>
        <Component {...pageProps} />
      </Template>
    </LoginContext.Provider>
  );
}

export default MyApp;
