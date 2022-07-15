import type { NextPage } from "next";
import FormAuth from "../component/form/auth";

const Home: NextPage = () => {
  return (
    <>
      <FormAuth/>
      <h1>this is home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magnam ut
        alias eos sapiente enim optio excepturi, molestiae placeat mollitia eum
        dignissimos, quae accusamus qui? Alias possimus saepe at vitae.
      </p>
    </>
  );
};

export default Home;
