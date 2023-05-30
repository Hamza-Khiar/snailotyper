import "../stylesheets/css/Result.css";
import { useEffect, useState } from "react";
import { testObj, typer } from "./TestComp";

export function Result({
  testLog,
  resetTest,
}: {
  testLog: testObj;
  resetTest: CallableFunction;
}) {
  /**
   * this will get tesstLog and make a pie Chart for it
   */
  const [resultLog, setResultLog] = useState(testLog);
  useEffect(() => {
    return setResultLog(typer.result(testLog));
  }, [true]);
  return (
    <>
      <div id="result-test">
        <div id="chart-acc-err">
          {/* <Doughnut data={data} /> */}
          <p className="top">{resultLog.accuracy}%</p>
          <p className="bottom">Accuracy</p>
          <p className="error Bottom">error : {resultLog.error}</p>
        </div>
        <div id="wpm">
          <p className="top">{resultLog.wpm}</p>
          <p className="bottom">WPM</p>
        </div>
        <div id="timeDisplay">
          <p className="top">
            {resultLog.testType.type == "time"
              ? `${resultLog.testType.value}`
              : `${resultLog.chrono}`}
          </p>
          <p className="bottom">time</p>
        </div>
      </div>

      <button
        type="reset"
        id="reset-btn"
        onClick={() => {
          resetTest(false);
          console.log("hey there");
        }}
      >
        Reset
      </button>
    </>
  );
}
/** 
 * 
 * <p className="top">{resultLog.accuracy}</p>
        <p className="bottom">Accuracy</p>
        <p className="error Bottom">error :{resultLog.error}</p>
*/

/* 
// import { Doughnut } from "react-chartjs-2";
// import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Chart.register(ArcElement, Tooltip, Legend);



  // const data = {
  //   labels: ["Accuracy in % ", "Errors"],
  //   datasets: [
  //     {
  //       data: [resultLog.accuracy, resultLog.error],
  //       backgroundColor: [
  //         "rgba(222, 227, 72, 0.68)",
  //         "rgba(255, 124, 76, 0.6)",
  //       ],
  //       borderWidth: 1,
  //       hoverOffset: 2,
  //     },
  //   ],
  // };

*/
