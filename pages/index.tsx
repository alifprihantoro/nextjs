import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import {
  data_list_post_types,
  list_post,
  list_post_types,
} from "../component/list/types";
import { loginContext, LoginContext } from "../context/login";
import { FirebaseFireStore } from "../service/firebase";

const Home: NextPage = () => {
  const context = useContext(LoginContext) as loginContext;
  const uid = context.data.uid;
  const [listData, setListData] = useState([list_post]);
  const [err, seterr] = useState("");
  const getList = async () => {
    try {
      const q = query(
        collection(FirebaseFireStore, "post"),
        where("writer", "array-contains", context.data.uid)
      );
      const querySnapshot = await getDocs(q);
      let data = [] as list_post_types[];
      querySnapshot.forEach((doc) => {
        const docData = doc.data() as data_list_post_types;
        data.push({ ...docData, slug: doc.id as string });
      });
      setListData(data);
    } catch (error) {
      console.log(error);
      seterr("404 - notfound");
    }
  };
  useEffect(() => {
    if (uid?.length > 2) {
      getList();
    }
  }, [context]);

  useEffect(() => {
    console.log(listData);
  }, [listData]);
  return (
    <>
      <h1>list post</h1>

      {err != "" && <span className="bg-red-900/30 p-3">{err}</span>}
      <ul>
        {listData.map((e, i) => {
          return (
            <li key={i}>
              <a href={'/edit/'+e.slug}>{e.judul}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
