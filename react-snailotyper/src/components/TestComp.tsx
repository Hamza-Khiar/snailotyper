import { MouseEvent, useState } from "react";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";
import { InputTest } from "./TestInputComp";
import { MetricTracker } from "./MetricRenComp";

export function Test() {
  function globalTypeSensor(e: KeyboardEvent) {
    setLaunched(true);
    // typer.start(metric);
  }
  document.addEventListener("keypress", globalTypeSensor, { once: true });

  const [launched, setLaunched] = useState<boolean>(false);
  const [metric, setMetric] = useState<object>({ type: "time", value: 15 });
  const [numOfWords, setNumOfWords] = useState<number>(0);

  async function handleGenTextNum(e: MouseEvent) {
    let numTextGen = parseInt(e.target.innerText);
    setMetric({ type: "words", value: numTextGen });
    setNumOfWords(numTextGen);
  }
  async function handleTimerSet(e: MouseEvent) {
    let numTextGen = parseInt(e.target.innerText);
    setMetric({ type: "time", value: numTextGen });
    if (numTextGen >= 60) {
      let i = Math.floor(numTextGen * 1.5);
      setNumOfWords(i);
    } else {
      let i = Math.floor(numTextGen * 2);
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
        <WordComp numOfWords={numOfWords} />
      </div>
    </>
  );
}

/**
 * TASKS:
 * apply focus on InputTest & set Launched for TimerRender to start timer numTextGen
 * */
