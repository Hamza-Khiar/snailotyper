import { MouseEvent, useEffect, useState } from "react";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";
import { InputTest } from "./TestInputComp";
import { MetricTracker } from "./MetricRenComp";

import Typer from "../Typer/Typer";

export let typer = new Typer();

let firstFetched = await typer.textGenerator(50);

export function Test() {
  let testObj = {};
  let testType = {};
  const [genText, setGenText] = useState<string[]>(firstFetched);
  const [launched, setLaunched] = useState<boolean>(false);
  const [metric, setMetric] = useState<object>({ type: "time", value: 15 });
  const [testTracker, setTestTracker] = useState<object>({});

  let wordsFetched = async (num: number) => {
    let words = await typer.textGenerator(num);
    return words;
  };
  async function handleGenTextNum(e: MouseEvent) {
    let numTextGen = parseInt(e.target.innerText);
    testType = { type: "words", value: numTextGen };
    setMetric(testType);
    setGenText(await wordsFetched(numTextGen));
  }
  async function handleTimerSet(e: MouseEvent) {
    let numTextGen = parseInt(e.target.innerText);
    testType = { type: "time", value: numTextGen };
    setMetric(testType);
    if (numTextGen >= 60) {
      let i = Math.floor(numTextGen * 1.5);
      setGenText(await wordsFetched(i));
    } else {
      let i = Math.floor(numTextGen * 2);
      setGenText(await wordsFetched(i));
    }
  }

  useEffect(() => {
    function globalTypeSensor(e: KeyboardEvent) {
      setLaunched(true);
      console.log(testType);

      // testObj = typer.start(metric);
      // setTestTracker(testObj);
    }
    document.addEventListener("keypress", globalTypeSensor, { once: true });
    return () => {
      document.removeEventListener("keypress", globalTypeSensor);
    };
  }, []);
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
        <InputTest isLaunched={launched} words={genText} />
        <WordComp words={genText} />
      </div>
    </>
  );
}

/**
 * TASKS:
 * apply focus on InputTest & set Launched for TimerRender to start timer numTextGen
 * */
