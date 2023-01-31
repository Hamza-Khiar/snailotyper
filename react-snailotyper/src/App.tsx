import "./stylesheets/css/App.css";

function App() {
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
        <div className="flex-layout--nav">
          <ul className="test-param--type"></ul>
          <ul className="test-param--metrics"></ul>
        </div>
        <div id="test-subject-typer"></div>
      </div>
    </div>
  );
}

export default App;
