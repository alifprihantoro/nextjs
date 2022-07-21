import Image from "next/image";
export default function ProfileImg({ url }: any) {
  const MyUrl = url === "" || url == null ? "/Profil.png" : url;
  return (
    <Image
      className="rounded-[50%] m-auto w-fit"
      src={MyUrl}
      alt="Profile"
      width="64"
      height="64"
    />
  );
}
