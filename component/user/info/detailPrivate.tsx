import { useEffect, useState } from "react";
import getCollectionFireStore from "../../../service/firebase/crud/get/getCollectionFireStore";
import ProfileImg from "./profile";

let execute = false;
export default function UserDetailPrivate({ context }: any) {
  const [bio, setBio] = useState("");
  const [web, setWeb] = useState("");
  // get collection
  const getDb = async () => {
    // get collection
    const get = (await getCollectionFireStore(
      `usr/${context.data.uid}`
    )) as any;
    // set collection
    setBio(get.info?.bio);
    setWeb(get.info?.web);
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
      <div>Nama : {context.data.name}</div>
      <div>Telephone : {context.data.phoneNumber || "no data"}</div>
      <div>Bio : {bio || "no data"}</div>
      <div>Web : {web || "no data"}</div>
    </>
  );
}
