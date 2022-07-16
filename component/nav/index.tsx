import UserData from "../user/data";
import NavLink from "./link";
import { useRouter } from "next/router";
import LINK from "../link";
import {useContext} from "react";
import {loginContext, LoginContext} from "../../context/login";

export default function Navigation() {
  const { pathname } = useRouter();
  const context = useContext(LoginContext) as loginContext;
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
