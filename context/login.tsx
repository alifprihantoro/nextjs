import { createContext } from "react";

/**
 * interface for loginForm
 *
 * need :
 * @function isLogin: state global is login;
 * @function setIsLogin: setIsLogin(true|false);
 * @function setData: setData({...data});
 * @function data: get data user from set;
 * @function setisLoading:for loading;
 */
export interface loginContext {
  isLogin: boolean;
  data: any;
  setIsLogin: any;
  setData: any;
  setisLoading:any;
  isLoading:any;
}

/**
 * context for login global
 */
export const LoginContext = createContext({});
