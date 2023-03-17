import { KeyboardEvent, useEffect, useState } from "react";
import "../stylesheets/css/TestComp.css";
import { WordComp } from "./WordComp";
import { NavbarTest } from "./NavbarComp";
import { InputTest } from "./TestInputComp";
import { MetricTracker } from "./MetricRenComp";
import * as ignoredModKeys from "../ignoredKeys";
import Typer from "../Typer/Typer";

export interface testObj {
  wpm: number | undefined;
  error: number;
  accuracy: number;
  correctWords: string[];
  testType: { type: string; value: number };
  chrono: number;
}

export let typer = new Typer();

let firstFetched = await typer.textGenerator(30);

export function Test({
  isfinishTest,
  getTestLog,
}: {
  isfinishTest: CallableFunction;
  getTestLog: CallableFunction;
}) {
  const testObjShape: testObj = {
    wpm: 0,
    error: 0,
    accuracy: 0,
    correctWords: [],
    testType: {
      type: "",
      value: 0,
    },
    chrono: 0,
  };
  let testObj: testObj | object = testObjShape;
  let testType = { type: "time", value: 15 };

  const [genText, setGenText] = useState<string[]>(firstFetched); // for the initial display fo text

  const [launched, setLaunched] = useState<boolean>(false);

  const [metric, setMetric] = useState<{ type: string; value: number }>(
    testType
  );
  const [testTracker, setTestTracker] = useState<testObj | object>(
    testObjShape
  );

  const [wordMetric, setWordMetric] = useState({
    wordsLength: 0,
    indexWord: 0,
  }); // object for both wordsLength & idxWord, would be needed for display of metric if it was "words"

  const [char, setChar] = useState<{ typedChar: string; index: number }>({
    typedChar: "",
    index: 0,
  });

  let wordsFetched = async (num: number) => {
    let words = await typer.textGenerator(num);
    return words;
  };

  async function handleGenTextNum(e: number) {
    let numTextGen = e;
    testType = { type: "words", value: numTextGen };
    setMetric(testType);
    setGenText(await wordsFetched(numTextGen));
  }
  async function handleTimerSet(e: number) {
    let numTextGen = e;
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

  function keyLogger(e: KeyboardEvent) {
    if (ignoredModKeys.ignoredKeys.includes(e.key)) {
      return e.key;
    } else if (e.ctrlKey && (e.shiftKey || e.metaKey) && e.key) {
      return;
    } else {
      setLaunched(true);
      setChar({ typedChar: e.key, index: char.index + 1 });
    }
  }

  function setStateTestTrack(valueToSet: testObj) {
    setTestTracker(valueToSet);
  }
  function getIdxWord(idx: number) {
    return setWordMetric({
      ...wordMetric,
      indexWord: idx,
    });
  }
  function setChrono_getTestLog(chrono: number) {
    setTestTracker({ ...testTracker, chrono: chrono });
    getTestLog({ ...testTracker, chrono: chrono });
  }

  useEffect(() => {
    function globalTypeSensor(e: KeyboardEventInit) {
      testObj = typer.start(metric);
      setTestTracker(testObj);
      return;
    }
    document.addEventListener("keydown", globalTypeSensor, { once: true });
    return () => {
      document.removeEventListener("keydown", globalTypeSensor);
    };
  }, [launched]);
  /* 
  this should be fixed as well, if ignoredKeys == the typedKey, don't start the test, else start test
   */

  useEffect(() => {
    setLaunched(false);
    setTestTracker(testObjShape);
    setWordMetric({ wordsLength: genText.length, indexWord: 0 });
  }, [genText]);

  return (
    <>
      <NavbarTest
        onGenText={(e) => handleGenTextNum(e)}
        onSetTimer={(e) => handleTimerSet(e)}
      />
      <MetricTracker
        isLaunched={launched}
        metric={metric}
        wordMetric={wordMetric}
        isfinishTest={isfinishTest}
        setChrono={setChrono_getTestLog}
      />
      <div id="test-subject-typer">
        <InputTest keyLogger={keyLogger} />
        <WordComp
          words={genText}
          typedCharObj={char}
          testObj={testTracker}
          setStateTestTrack={setStateTestTrack}
          getidxWord={getIdxWord}
        />
      </div>
    </>
  );
}

/**
 *
 * TASKS:
 *    find a way to calculate wpm in metric "words", => using the chrono param in testObj
 * */
