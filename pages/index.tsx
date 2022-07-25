import type { NextPage } from "next";
import FirebaseCreate from "../service/firebase/crud/create";

const Home: NextPage = () => {
  return (
    <>
      <h1>this is home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magnam ut
        alias eos sapiente enim optio excepturi, molestiae placeat mollitia eum
        dignissimos, quae accusamus qui? Alias possimus saepe at vitae.
      </p>
      <button
        className="bg-blue-900 p-3 text-white"
        onClick={() => {
          FirebaseCreate();
        }}
      >
        tes
      </button>
    </>
  );
};

export default Home;
