import style from "./tes.module.scss";
export default function TesBtn() {
  console.log(style);
  const tes = 'btn'
  return (
    <>
      <button className={style[tes]}>ini btn</button>;
    </>
  );
}
