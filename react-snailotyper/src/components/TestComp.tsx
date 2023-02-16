import { MouseEvent, useState } from "react";
import Typer from "../Typer/Typer";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";
import { InputTest } from "./TestInputComp";

export let typer = new Typer();

let firstFetched = await typer.textGenerator(50);

export function Test() {
  function globalTypeSensor(e: KeyboardEvent) {
    /**
     * this will listen to keyboard, then call the start() method in
     */
    // let inp = document.getElementById("inputField");
    // inp?.focus();
    // typer.start();
  }
  document.addEventListener("keypress", globalTypeSensor, { once: true });

  const [genText, setGenText] = useState<string[]>(firstFetched);

  let wordsFetched = async (num: number) => {
    let words = await typer.textGenerator(num);
    return words;
  };

  async function handleGenTextNum(e: MouseEvent) {
    let numTextGen = parseInt(e.target.innerText);
    setGenText(await wordsFetched(numTextGen));
  }
  async function handleTimerSet(e: MouseEvent) {
    let numTextGen = parseInt(e.target.innerText);
    if (numTextGen >= 60) {
      let i = Math.floor(numTextGen * 1.5);
      setGenText(await wordsFetched(i));
    } else {
      let i = Math.floor(numTextGen * 2);
      setGenText(await wordsFetched(i));
    }
  }
  return (
    <>
      <NavbarTest
        onGenText={(e) => handleGenTextNum(e)}
        onSetTimer={(e) => handleTimerSet(e)}
        list={[]}
      />
      <p id="timer"></p>
      <div id="test-subject-typer">
        <div id="caret"></div>
        <InputTest />
        <WordComp words={genText} />
      </div>
    </>
  );
}

/**
 * TASKS:
 *
 * write the start() logic for the Typer class
 *    a keydown event assigned to the document which will fire another event
 * */
