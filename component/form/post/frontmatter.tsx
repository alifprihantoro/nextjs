import { useContext } from "react";
import { loginContext, LoginContext } from "../../../context/login";
import FormAuthImportant from "../important";
import FormAuthNormal from "../normal";

/**
 * Form and Btn layout user info
 */
export default function FormPostFrontMatter({ state }: any) {
  const context = useContext(LoginContext) as loginContext;
  const { data } = state;
  return (
    <form className="w-[250px] p-3 m-auto">
      {/* nama------- */}
      <label htmlFor="judul">Judul : </label>
      <FormAuthImportant
        placeholder="judul"
        state={state}
        type="text"
        defaultVal={data.judul}
      />
      {/* slug------- */}
      <label htmlFor="slug">Link : </label>
      <FormAuthImportant
        placeholder="slug"
        state={state}
        type="text"
        defaultVal={data.slug}
      />
      {/* draft */}
      <label htmlFor="draft">Draft : </label>
      <select name="draft" id="draft-forntmatter">
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <br/>
      {/* tags------- */}
      <label htmlFor="bio">Kategory : </label>
      <FormAuthNormal
        placeholder="Kategory"
        state={state}
        type="text"
        defaultVal={data.Kategory}
      />
      {/* description------- */}
      <label htmlFor="bio">description : </label>
      <FormAuthNormal
        placeholder="description"
        state={state}
        type="text"
        defaultVal={data.description}
      />
    </form>
  );
}
