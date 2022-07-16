import SignOut from "../../service/firebase/auth/signOut";

export default function Logout({ context }: any) {
  return (
    <button
      className="bg-red-900 rounded-xl text-white p-3"
      onClick={() => {
        context.setisLoading(true);
        SignOut();
        context.setIsLogin(false);
        context.setisLoading(false);
      }}
    >
      Logout
    </button>
  );
}
