import { MouseEvent, useState } from "react";
import Typer from "../Typer/Typer";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";

export let typer = new Typer();
let firstFetched = await typer.textGenerator(50);

export function Test() {
  const [genText, setGenText] = useState<string[]>(firstFetched);

  let wordsFetched = async (num: number) => {
    let words = await typer.textGenerator(num);
    return words;
  };

  async function handleGenTextNum(e: MouseEvent) {
    setGenText(await wordsFetched(parseInt(e.target.innerText)));
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
 * write the start() logic for the Typer class
 *
 * */
