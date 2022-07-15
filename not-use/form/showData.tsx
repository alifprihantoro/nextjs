export default function GetDataFromFirebase({ setData, user }: any) {
  // console.log(user);
  const name = user.displayName;
  const email = user.email;
  const url = user.photoURL;
  const isVerified = user.emailVerified;
  const isAnonymous = user.isAnonymous;
  const phoneNumber = user.phoneNumber;
  setData({ name, email, url, isVerified, isAnonymous, phoneNumber });
  // console.log(context.data);
}
