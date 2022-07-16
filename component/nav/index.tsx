import UserData from "../user/data";
import NavLink from "./link";
import { useRouter } from "next/router";
import LINK from "../link";

export default function Navigation({ context }: any) {
  const { pathname } = useRouter();
  return (
    <nav className="my-8 flex">
      <h1 className="m-3">MurypA</h1>
      <NavLink />
      {context.isLogin ? (
        <UserData context={context} />
      ) : pathname === "/" ? (
        <LINK to="/auth">login</LINK>
      ) : (
        ""
      )}
    </nav>
  );
}
