import { MouseEvent, useState } from "react";
import Typer from "../Typer/Typer";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";

export function Test() {
  const [genText, setGenText] = useState<string[]>([]);
  const [wordsToGen, setWordsToGen] = useState(0);

  let typer = new Typer();

  let WordsFetched = async (num): Promise<string[]> => {
    return await typer.textGenerator(num, "src/assets/words.json");
  };

  async function handleGenTextNum(e: MouseEvent) {
    setWordsToGen(e.target.innerText);
    return setGenText(await WordsFetched(wordsToGen));
  }
  return (
    <>
      <NavbarTest onGenText={handleGenTextNum} list={[]} />
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
