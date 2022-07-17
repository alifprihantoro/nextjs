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

  useEffect(() => {
    // apakah sebelumnya sudah dieksekusi
    if (!isExecute) {
      // ubah menjadi true
      isExecute = true;
      CekIsLogin(loginContext2);
    }
  }, [loginContext2]);

  // change this to middleware if can
  const router = useRouter();
  const PATH_WHITELIST = ["/", "/auth"];
  if (!isLogin && !PATH_WHITELIST.includes(router.pathname)) {
    !isLoading && router.push("/auth");
    return;
  }else
  if (isLogin && router.pathname === '/auth') {
    router.push("/");
    return;
  }else {
  return (
    <LoginContext.Provider value={loginContext2}>
      <Template>
        <Component {...pageProps} />
      </Template>
    </LoginContext.Provider>
  );
    }

}

export default MyApp;
