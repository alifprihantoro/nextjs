import type { NextPage } from "next";
import FormLogin from "../component/form";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <FormLogin />
    </div>
  );
};

export default Home;
