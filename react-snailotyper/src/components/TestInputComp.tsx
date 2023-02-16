import "../stylesheets/css/TestInputComp.css";
import { typer } from "./TestComp";

export function InputTest() {
  function testLog(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <input type="text" id="inputField" onChange={testLog} />
    </>
  );
}
