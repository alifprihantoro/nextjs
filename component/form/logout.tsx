import SignOut from "../../firebase/logout";

export default function Logout({setIsLogin}:any) {
  return (
    <button
      className="bg-red-900 rounded-xl text-white p-3"
      onClick={() => {
        SignOut();
        setIsLogin(false);
      }}
    >
      Logout
    </button>
  );
}
