import {createContext} from "react";

export interface loginContext{
  isLogin:boolean;
  data:any;
  setIsLogin:any;
  setData:any;
}

export const LoginContext = createContext({
})
