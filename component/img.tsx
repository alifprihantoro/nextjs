import Image from 'next/image'
export default function IMG({ url }: any) {
  const MyUrl = url==='' || url == null ? '/Profil.png': url
return <Image className="rounded-[50%] m-auto w-fit" src={MyUrl} alt="me" width="64" height="64" />
}
