import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Link href='/auth'><a>Login</a></Link>
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
