import { MouseEvent, useState } from "react";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";
import { InputTest } from "./TestInputComp";
import { MetricTracker } from "./MetricRenComp";

import Typer from "../Typer/Typer";

export let typer = new Typer();

let firstFetched = await typer.textGenerator(50);

export function Test() {
  function globalTypeSensor(e: KeyboardEvent) {
    setLaunched(true);
    typer.start(metric);
  }
  document.addEventListener("keypress", globalTypeSensor, { once: true });

  const [genText, setGenText] = useState<string[]>(firstFetched);
  const [launched, setLaunched] = useState<boolean>(false);
  const [metric, setMetric] = useState<object>({ type: "time", value: 15 });
  const [numOfWords, setNumOfWords] = useState<number>(50);
  // let typingTracker = {
  //   wpm: 0,
  //   error: 0,
  //   accuracy: 0,
  //   correctWords: [],
  //   testType: metric,
  // }
  let wordsFetched = async (num: number) => {
    let words = await typer.textGenerator(num);
    return words;
  };
  async function handleGenTextNum(e: MouseEvent) {
    let numTextGen = parseInt(e.target.innerText);
    setMetric({ type: "words", value: numTextGen });
    setNumOfWords(numTextGen);
    setGenText(await wordsFetched(numTextGen));
  }
  async function handleTimerSet(e: MouseEvent) {
    let numTextGen = parseInt(e.target.innerText);
    setMetric({ type: "time", value: numTextGen });
    if (numTextGen >= 60) {
      let i = Math.floor(numTextGen * 1.5);
      setGenText(await wordsFetched(i));
      setNumOfWords(i);
    } else {
      let i = Math.floor(numTextGen * 2);
      setGenText(await wordsFetched(i));
      setNumOfWords(i);
    }
  }
  return (
    <>
      <NavbarTest
        onGenText={(e) => handleGenTextNum(e)}
        onSetTimer={(e) => handleTimerSet(e)}
        list={[]}
      />
      <MetricTracker isLaunched={launched} metric={metric} />
      <div id="test-subject-typer">
        <div id="caret"></div>
        <InputTest isLaunched={launched} />
        <WordComp /* words={genText} */ numOfWords={numOfWords} />
      </div>
    </>
  );
}

/**
 * TASKS:
 * apply focus on InputTest & set Launched for TimerRender to start timer numTextGen
 * */
