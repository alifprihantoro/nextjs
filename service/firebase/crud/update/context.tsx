import { useContext } from "react";
import {loginContext, LoginContext} from "../../../../context/login";

export default function UpdateDataProfile(name: string, email: string) {
  const context = useContext(LoginContext) as loginContext;
  context.setData({ name, email });
}
