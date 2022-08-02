import type { NextPage } from "next";
import dynamic from "next/dynamic";
// import TesEditor from "../component/editor/tes";

const EditorStac = dynamic(import("../component/editor/muryp"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const Home: NextPage = () => {
  return (
    <>
      <h1>this is home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magnam ut
        alias eos sapiente enim optio excepturi, molestiae placeat mollitia eum
        dignissimos, quae accusamus qui? Alias possimus saepe at vitae.
      </p>
      {/* <button
        *   className="bg-blue-900 p-3 text-white"
        *   onClick={() => {
        *     FirebaseCreate();
        *   }}
        * >
        *   tes
        * </button> */}
      {/* <TesBtn/> */}
      <EditorStac/>
      {/* <TesEditor/> */}
    </>
  );
};

export default Home;
