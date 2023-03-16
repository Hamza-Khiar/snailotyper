import "../stylesheets/css/Result.css";
import { useEffect, useState } from "react";
import { testObj, typer } from "./TestComp";

export function Result({ testLog }: { testLog: testObj }) {
  /**
   * this will get tesstLog and make a pie Chart for it
   */
  const [resultLog, setResultLog] = useState(testLog);
  useEffect(() => {
    return setResultLog(typer.result(testLog));
  }, [true]);

  return (
    <div id="result-test">
      <div id="chart-acc-err">
        <canvas id="chartDisplay"></canvas>
      </div>
      <div id="wpm">
        <p>{resultLog.wpm}</p>
        <p>WPM</p>
      </div>
      <div id="timeDisplay">
        <p>
          {resultLog.testType.type == "time"
            ? `${resultLog.testType.value}s`
            : `${resultLog.chrono}`}
        </p>
      </div>
    </div>
  );
}
