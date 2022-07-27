import FormAuthNormal from "../form/normal";

export default function EditorInfoPost({state}:any) {
  const { data } = state
  return (
    <div id="info_post">
      {/* Judul------- */}
      <label htmlFor="judul">Judul : </label>
      <FormAuthNormal placeholder="judul" state={state} type="text" defaultVal={data.judul} />
      {/* Link------- */}
      <label htmlFor="link">Link : </label>
      <FormAuthNormal placeholder="link" state={state} type="text" defaultVal={data.link} />
      {/* tag------- */}
      <blockquote className="bg-blue-200 rounded p-3 text-blue-900">pisahkan dengan koma</blockquote>
      <label htmlFor="tag">Tag : </label>
      <FormAuthNormal placeholder="tag" state={state} type="text" defaultVal={data.tag} />
      {/* user------- */}
      <label htmlFor="tag">User : </label>
      <FormAuthNormal placeholder="user" state={state} type="text" defaultVal={data.user} />
      {/* Bio------- */}
      <label htmlFor="description">description : </label>
      <FormAuthNormal placeholder="description" state={state} type="text" defaultVal={data.description} />
    </div>
  )
}
