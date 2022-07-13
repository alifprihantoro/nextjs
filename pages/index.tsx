import type { NextPage } from "next";
import {useState} from "react";
import FormLogin from "../component/form";
import {LoginContext,loginContext} from "../context/login";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [data, setData] = useState({})
  const loginContext:loginContext = {
    isLogin,
    data,
    setIsLogin,
    setData
  }
  return (
    <div className={styles.container}>
      <LoginContext.Provider value={loginContext}>
      <FormLogin />
      </LoginContext.Provider>
    </div>
  );
};

export default Home;
