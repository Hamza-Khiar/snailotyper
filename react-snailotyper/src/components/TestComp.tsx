import { KeyboardEvent, useEffect, useState } from "react";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";
import { InputTest } from "./TestInputComp";
import { MetricTracker } from "./MetricRenComp";
import * as ignoredModKeys from "../ignoredKeys";

import Typer from "../Typer/Typer";

export let typer = new Typer();

let firstFetched = await typer.textGenerator(50);

export function Test() {
  const [genText, setGenText] = useState<string[]>(firstFetched);
  const [launched, setLaunched] = useState<boolean>(false);
  const [metric, setMetric] = useState<object>({ type: "time", value: 15 });
  const [char, setChar] = useState<object>({ typedChar: "", index: 0 });

  let wordsFetched = async (num: number) => {
    let words = await typer.textGenerator(num);
    return words;
  };
  async function handleGenTextNum(value: number) {
    setMetric({ type: "words", value });
    setGenText(await wordsFetched(value));
  }
  async function handleTimerSet(value: number) {
    setMetric({ type: "time", value });
    if (value >= 60) {
      let i = Math.floor(value * 1.5);
      setGenText(await wordsFetched(i));
    } else {
      let i = Math.floor(value * 2);
      setGenText(await wordsFetched(i));
    }
  }
  function keyLogger(e: KeyboardEvent) {
    if (ignoredModKeys.ignoredKeys.includes(e.key)) {
      return null;
    } else {
      setChar({ typedChar: e.key, index: char.index + 1 });
    }
  }

  useEffect(() => {
    function globalTypeSensor() {
      setLaunched(true);
    }
    document.addEventListener("keypress", globalTypeSensor, { once: true });
    return () => {
      document.removeEventListener("keypress", globalTypeSensor);
    };
  }, [metric]);

  return (
    <>
      <NavbarTest onGenText={handleGenTextNum} onSetTimer={handleTimerSet} />
      <MetricTracker isLaunched={launched} metric={metric} />
      <div id="test-subject-typer">
        <InputTest isLaunched={launched} keyLogger={keyLogger} />
        <WordComp words={genText} typedCharObj={char} />
      </div>
    </>
  );
}

/**
 * TASKS:
 * start the test & figure out the logic on how to test the elements
 * */

/* <div id="caret"></div> turn this into it's own component */
