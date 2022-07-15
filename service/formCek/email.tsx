export default function FormCekEmail(
  email: string,
  { setErr, setData, err, data }: any
) {
  setErr({ ...err, email: "" });
  setData({ ...data, email });
  let isEmail;
  if (email === "") {
    isEmail = "Email harus diisi";
  } else {
    const cekMail = /^....*@..*\...*/.test(email);
    isEmail = cekMail ? "" : "tolong masukkan email yang benar!";
  }
  isEmail !== "" && setErr({ ...err, email: isEmail });
}
