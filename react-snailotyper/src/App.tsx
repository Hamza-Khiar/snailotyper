import "./stylesheets/css/App.css";
import { Test } from "./components/TestComp";

function App() {
  document.addEventListener("keydown", globalTypeSensor);
  function globalTypeSensor(e: KeyboardEvent) {
    let inp = document.getElementById("inputField");
    console.log(e.key);
    // dispatching the event from the Test component , pass the globalEventHandler to the test
  }
  return (
    <div className="App">
      <nav className="App-header-nav">
        <div className="Logo">
          <p>Logo</p>
        </div>
        <ul>
          <li>Account</li>
          {/* for now it's not working till i make a backend for it */}
          <li>Settings</li>
          <li>log-out</li>
        </ul>
      </nav>
      <div id="main-middle">
        <h1>SnailType your way to a blazingly fast typer</h1>
        <Test />
      </div>
    </div>
  );
}

export default App;
