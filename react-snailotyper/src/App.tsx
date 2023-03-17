import "./stylesheets/css/App.css";
import { Test } from "./components/TestComp";
import { Result } from "./components/ResultComp";
import { useState } from "react";
import { testObj } from "./components/TestComp";

function App() {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  let initialisedTestLog = {
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
  const [testLog, setTestLog] = useState<testObj>(initialisedTestLog);

  function getTestLog(testInstanceLog: testObj) {
    setTestLog(testInstanceLog);
  }
  return (
    <div className="App">
      <nav className="App-header-nav"></nav>
      <div id="main-middle">
        <h1>SnailType your way to a blazingly fast typer</h1>
        {isFinished ? (
          <Result testLog={testLog} />
        ) : (
          <Test isfinishTest={setIsFinished} getTestLog={getTestLog} />
        )}
      </div>
    </div>
  );
}

export default App;

/* <div className="Logo">
          <p>Logo</p>
        </div>
        <ul>
          <li>Account</li>
          <li>Settings</li>
          <li>log-out</li>
        </ul>
        */
