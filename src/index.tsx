import * as React from "react";
import { render } from "react-dom";
import { Hello, ShoppingList } from "./components/shopping-list/shopping-list";

import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Hello compiler="Allen" framework="Jack" />
      <ShoppingList compiler="Allen" />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
