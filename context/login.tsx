import { createContext } from "react";

export interface loginContext {
  isLogin: boolean;
  data: any;
  setIsLogin: any;
  setData: any;
  setisLoading:any;
}

export const LoginContext = createContext({});
