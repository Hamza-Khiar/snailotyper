/**
 * Purpose of TestComponent:
 * wrapping up the test and words generated
 *  Display results of the test wpm accuracy
 * */

import Typer from "../Typer/Typer";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";

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

function NavbarTest() {
  const SECONDS: number[] = [15, 30, 60, 120];
  const WORD_NUMBERS: number[] = [10, 25, 50, 100];
  return (
    <div className="flex-layout--nav">
      <ul className="test-param--type"></ul>
      <ul className="test-param--metrics"></ul>
    </div>
  );
}

let typer = new Typer();
let WordsFetched: string[] = await typer.textGenerator(
  100,
  "src/assets/words.json"
);

/**
 * try to send the WordsFetched as a prop with a default of 100
 * */
