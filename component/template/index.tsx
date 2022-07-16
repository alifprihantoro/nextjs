import Navigation from "../nav";

export default function Template({children}:any) {
  return (
    <div>
      <Navigation />
      {children}
      footer
    </div>
  )
}
