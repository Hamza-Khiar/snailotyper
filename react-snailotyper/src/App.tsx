import "./stylesheets/css/App.css";
import { Test } from "./components/TestComp";
import { Result } from "./components/ResultComp";
import { useState } from "react";

function App() {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [testLog, setTestLog] = useState({});

  function getTestLog(testInstanceLog: object) {
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
