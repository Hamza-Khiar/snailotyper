/**
 * Purpose of TestComponent:
 * wrapping up the test and words generated
 *  Display results of the test wpm accuracy
 * */

import Typer from "../Typer/Typer";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";

const SECONDS: number[] = [15, 30, 60, 120];
const WORD_NUMBERS: number[] = [10, 25, 50, 100];

export let typer = new Typer();
let WordsFetched = await typer.textGenerator(50, "src/assets/words.json");

export function Test() {
  return (
    <>
      <div className="flex-layout--nav">
        <ul className="test-param--type"></ul>
        <ul className="test-param--metrics"></ul>
      </div>
      <div id="test-subject-typer">
        <div id="caret"></div>
        <WordComp words={WordsFetched} />
      </div>
    </>
  );
}
