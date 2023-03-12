// import { Fragment } from "react";
import "./App.css";

import Buttons from "./Buttons";
import Names from "./Names";
import { Todos } from "./Todos";

function App() {
  return (
    <>
      <Todos></Todos>

      <br />
      <br />

      <Buttons></Buttons>

      <br />
      <br />

      <Names></Names>
    </>
  );
}

export default App;
