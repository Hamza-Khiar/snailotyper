import React, { useState } from "react";
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

/**
 * TASKS:
 *    having NavbarTest determine how many words to generate based on what parameter was passed on it
 *    conditionally render  <ul className="test-param--metrics"></ul> based on what was picked in <ul className="test-param--type"></ul>
 *    if more than 50% was typed generate and append new words
 * write the start() logic for Typer class
 *
 * */
