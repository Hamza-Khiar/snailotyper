import { MouseEvent, useState } from "react";
import Typer from "../Typer/Typer";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";
import { InputTest } from "./TestInputComp";

export let typer = new Typer();

let firstFetched = await typer.textGenerator(50);

export function Test() {
  document.addEventListener("keydown", globalTypeSensor);
  function globalTypeSensor(e: KeyboardEvent) {
    /**
     * this will listen to keyboard, then call the start() method in
     */
    if (genText) {
      let inp = document.getElementById("inputField");
      inp?.focus();
      typer.start();
      // console.log(e.key);
    }
  }
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
      <NavbarTest
        onGenText={(e) => handleGenTextNum(e)}
        onSetTimer={() => console.log(1)}
        list={[]}
      />
      <div id="test-subject-typer">
        <div id="caret"></div>
        <p className="timer"></p>
        <InputTest />
        <WordComp words={genText} />
      </div>
    </>
  );
}

/**
 * TASKS:
 * write the start() logic for the Typer class
 *    a keydown event assigned to the document which will fire another event
 * Fix the issue of if it's Seconds list rendered it shouldn't generate text from the number
 * */
