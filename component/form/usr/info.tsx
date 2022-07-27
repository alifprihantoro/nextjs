import {doc, setDoc} from "firebase/firestore";
import {useContext, useEffect} from "react";
import {loginContext, LoginContext} from "../../../context/login";
import {FirebaseFireStore} from "../../../service/firebase";
import FormAuthImportant from "../important";
import FormAuthNormal from "../normal";

/**
 * Form and Btn layout user info
 */
export default function FormUsrInfoDetail({state}:any) {
  const context = useContext(LoginContext) as loginContext;
  // onclick 
  const {data} = state
  const click = async (e:any)=> {
    e.preventDefault()
    try {
    const { nama,tlp,bio,web } = data
    const cityRef = doc(FirebaseFireStore, "usr", context.data.uid);
    await setDoc(cityRef, { nama, tlp, bio, web }, { merge: true });
    alert('berhasil!')
    } catch (error) {
      alert('gagal update data!')
    }
  }
  return (
      <form className="w-[250px] p-3 m-auto">
        {/* nama------- */}
        <FormAuthImportant placeholder="nama" state={state} type="text" defaultVal={data.nama} />
        {/* Telephone------- */}
        <label htmlFor="tlp">telephone (this number can read for public) : </label>
        <FormAuthNormal placeholder="tlp" state={state} type="number" defaultVal={data.tlp} />
        {/* Web------- */}
        <label htmlFor="web">web : </label>
        <FormAuthNormal placeholder="web" state={state} type="text" defaultVal={data.web} />
        {/* Bio------- */}
        <label htmlFor="bio">bio : </label>
        <FormAuthNormal placeholder="bio" state={state} type="text" defaultVal={data.bio} />
        <button className="bg-blue-900 p-3 text-white rounded" onClick={e=>click(e)} type="submit">
          save change
        </button>
      </form>
  );
}
