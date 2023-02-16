import { KeyboardEvent } from "react";
import "../stylesheets/css/TestInputComp.css";
import { typer } from "./TestComp";

export function InputTest() {
  function testLog(e: ChangeEvent) {
    console.log(e.target.value);
  }
  return (
    <>
      <input type="text" id="inputField" onChange={testLog} />
    </>
  );
}
