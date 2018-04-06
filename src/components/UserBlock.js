import { h } from "hyperapp";

const blockStyle = ({ userDetails }, user) => ({
  background: "#f0f0f0",
  color: userDetails.id === user.id ? "darkcyan" : "#333",
  minWidth: "33%",
  padding: ".5rem 0 0 1rem",
  width: "45%"
});

const UserBlock = (user, state, { selectUser }) =>
  h(
    "div",
    { style: blockStyle(state, user), onclick: () => selectUser(user) },
    [
      h("h3", {}, user.name),
      h("h4", {}, `Company: ${user.company}`),
      h("p", {}, user.description)
    ]
  );

export default UserBlock;
