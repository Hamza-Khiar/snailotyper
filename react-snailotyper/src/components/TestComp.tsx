import { MouseEvent, useState } from "react";
import Typer from "../Typer/Typer";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";

let typer = new Typer();
let firstFetched = await typer.textGenerator(50);

export function Test() {
  const [wordsToGen, setWordsToGen] = useState(50);
  const [genText, setGenText] = useState<string[]>(firstFetched);

  let wordsFetched = async (num: number) => {
    let words = await typer.textGenerator(num);
    return words;
  };

  async function handleGenTextNum(e) {
    setWordsToGen(parseInt(e.target.innerText));
    setGenText(await wordsFetched(wordsToGen));
  }
  return (
    <>
      <NavbarTest onGenText={(e) => handleGenTextNum(e)} list={[]} />
      <div id="test-subject-typer">
        <div id="caret"></div>
        <WordComp words={genText} />
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
