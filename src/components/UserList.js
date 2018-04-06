import { h } from "hyperapp";
import UserBlock from "./UserBlock";

const style = {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-around",
  width: "100%"
};

const UserList = (state, actions) =>
  h("div", { style }, state.users.map(user => UserBlock(user, state, actions)));

export default UserList;
