import { h, app } from "hyperapp";
import UserList from "./components/UserList";

const state = {
  userDetails: {},
  users: [
    {
      id: 1,
      name: "Josh",
      company: "Sigstr",
      description: "I have no description"
    },
    {
      id: 2,
      name: "Bob",
      company: "Micro",
      description: "I push buttons"
    }
  ]
};

const actions = {
  selectUser: user => state => (state.userDetails = user),
  addUser: user => state => (state.users = state.users.concat(user))
};

const main = (state, actions) =>
  h("div", {}, [UserList(state, actions), h("h1", {}, state.userDetails.name)]);

app(state, actions, main, document.body);
