export default function FormCekPassword(
  password: string,
  { setErr, setData, err, data }: any
) {
  setErr({ ...err, password: "" });
  setData({ ...data, password });
  let ispassword;
  if (password === "") {
    ispassword = "Password harus diisi";
  } else if (password.length < 9) {
    ispassword = "min.8 karakter";
  } else {
    const cekPasword = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%;*#?&])(?=.*[A-Z])/.test(
      password
    );
    ispassword = cekPasword
      ? ""
      : "Password setidaknya memiliki satu angka, huruf kecil, symbol dan huruf besar!";
  }
  ispassword !== "" && setErr({ ...err, password: ispassword });
}
