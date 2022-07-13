export default function ShowData({setData, user}:any) {
  // console.log(user);
  const name = user.displayName;
  const email = user.email;
  const url = user.photoURL;
  setData({ name, email, url });
  // console.log(context.data);
}
