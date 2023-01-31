import Typer from "../Typer/Typer";

const SECONDS: number[] = [15, 30, 60, 120];
const WORD_NUMBERS: number[] = [10, 25, 50, 100];

let typer = new Typer();
let result = await typer.textGenerator("../assets/words.json");

export function Test() {
  return (
    <>
      <div className="flex-layout--nav">
        <ul className="test-param--type"></ul>
        <ul className="test-param--metrics"></ul>
      </div>
      <div id="test-subject-typer">
        <p>i exist</p>
        <p>{result}</p>
      </div>
    </>
  );
}
