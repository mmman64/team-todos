import React from "react";
import { render } from "react-dom";
import Provider from "../components/Provider";
import List from "../components/List";
import UserInfo from "../components/UserInfo";
import AddTodo from "../components/AddTodo";

render(
  <Provider>
    <UserInfo />
    <AddTodo />
    <List />
  </Provider>,
  document.querySelector("#root")
);
