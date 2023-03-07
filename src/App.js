import FirstHeading from "./First";
import SecondHeading from "./second";
import ThirdHeading from "./Third";
import Btn1 from "./Fourth";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <FirstHeading />
      <SecondHeading />
      <ThirdHeading />
      <Btn1 />
      {/* <h1>I am heading one... from first component</h1>
      <h2>I am heading two... from second component</h2>
      <h3>I am heading one... from third component</h3>
      <button>Click Me !!</button> */}
    </Fragment>
  );
}

export default App;
