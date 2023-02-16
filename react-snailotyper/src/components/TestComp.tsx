import { MouseEvent, useState } from "react";
import Typer from "../Typer/Typer";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";
import { InputTest } from "./TestInputComp";
import { TimerRender } from "./TimerComp";

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
  const [launched, setLaunched] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

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
    setTimer(numTextGen);
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
      <TimerRender isLaunched={launched} time={timer} />
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
 * write this code in a react way:
 *      let inp = document.getElementById("inputField");
 *      inp?.focus();
 * apply focus on InputTest & set Launched for TimerRender to start timer numTextGen
 *
 * */
