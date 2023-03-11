import "./stylesheets/css/App.css";
import { Test } from "./components/TestComp";
import { Result } from "./components/ResultComp";

function App() {
  return (
    <div className="App">
      <nav className="App-header-nav">
        {/* <div className="Logo">
          <p>Logo</p>
        </div>
        <ul>
          <li>Account</li>
          <li>Settings</li>
          <li>log-out</li>
        </ul> */}
      </nav>
      <div id="main-middle">
        <h1>SnailType your way to a blazingly fast typer</h1>
        <Test />
        <Result />
      </div>
    </div>
  );
}

export default App;
