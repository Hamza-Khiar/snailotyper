/**
 * Purpose of TestComponent:
 * wrapping up the test and words generated
 *  Display results of the test wpm accuracy
 * */

import Typer from "../Typer/Typer";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavComp";

let typer = new Typer();
let WordsFetched: string[] = await typer.textGenerator(
  50,
  "src/assets/words.json"
);

export function Test() {
  return (
    <>
      <NavbarTest />
      <div id="test-subject-typer">
        <div id="caret"></div>
        <WordComp words={WordsFetched} />
      </div>
    </>
  );
}
