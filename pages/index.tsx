import type { NextPage } from "next";
import FormLogin from "../component/form";
import Logout from "../component/logout";
import styles from "../styles/Home.module.css";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <FormLogin/>
      <Logout/>
      </div>
  );
};

export default Home;
