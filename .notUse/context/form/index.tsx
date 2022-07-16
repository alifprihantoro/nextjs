import { createContext } from "react";

export interface FormContext {
  err: any;
  setErr: any;
  data: any;
  setData: any;
  errLogin: any;
  onClick: any;
  btnAuth: any;
  isAuth: any;
  setisAuth: any;
}

export const FormContext = createContext({});
