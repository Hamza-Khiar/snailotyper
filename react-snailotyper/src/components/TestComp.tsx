import { useState } from "react";
import Typer from "../Typer/Typer";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";

let typer = new Typer();

let WordsFetched: string[] = await typer.textGenerator(
  50,
  "src/assets/words.json"
);

export function Test() {
  const [genText, setGenText] = useState(0);
  function handleGenTextNum(e: MouseEvent) {
    setGenText(e.target.innerText);
  }
  return (
    <>
      <NavbarTest onGenText={handleGenTextNum} />
      <div id="test-subject-typer">
        <div id="caret"></div>
        <WordComp words={WordsFetched} />
      </div>
    </>
  );
}

/**
 * TASKS:
 *    having NavbarTest determine how many words to generate based on what parameter was passed on it
 *    if more than 50% was typed generate and append new words
 * write the start() logic for Typer class
 *
 * */
