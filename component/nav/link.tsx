import LINK from "../link";

export default function NavLink() {
  return (
    <>
      <LINK to="/">Home</LINK>
      <LINK to="/usr/info">user</LINK>
      <LINK to="/edit/new">new post</LINK>
    </>
  );
}
