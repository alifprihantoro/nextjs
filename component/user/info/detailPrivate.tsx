import { useEffect, useState } from "react";
import getCollectionFireStore from "../../../service/firebase/crud/get/getCollectionFireStore";
import FormUsrInfoDetail from "../../form/usr/info";
import ProfileImg from "./profile";

let execute = false;
export default function UserDetailPrivate({ context }: any) {
  const [data, setData] = useState({ nama: "", tlp: "", bio: "", web: "" });
  const [err, setErr] = useState({ nama: "", tlp: "", bio: "", web: "" });
  // get collection
  const getDb = async () => {
    // get collection
    await getCollectionFireStore(
      `usr/${context.data.uid}`
    ).then(e=>{
    setData(e as any);
    })
  };
  const state = {
    data,
    setData,
    err,
    setErr,
  };

  useEffect(() => {
    if (!execute) {
      execute = true;
      getDb();
    }
  }, []);
  return (
    <>
      <ProfileImg url={context.data.url} />
      <FormUsrInfoDetail state={state} />
    </>
  );
}
