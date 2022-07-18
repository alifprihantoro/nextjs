import Navigation from "../nav";
import SendVerifikasiBtn from "../user/sendVer";

export default function Template({children}:any) {
  return (
    <div>
      <SendVerifikasiBtn/>
      <Navigation />
      {children}
      footer
    </div>
  )
}
