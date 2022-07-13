import FormLogin from "../form";

export default function Template({children}:any) {
  return (
    <div>
      <FormLogin />
      {children}
      footer
    </div>
  )
}
