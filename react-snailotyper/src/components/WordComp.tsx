/**
 *  Purpose of WordComponent
 *  displaying words , check if typed word is right by character, check how many errors
 */
import "../stylesheets/css/WordComp.css";
import { Character } from "./CharacterComp";
import * as ignoredModKeys from "../ignoredKeys";

interface word {
  words: Array<string>;
  char: string;
}

export function WordComp({ words, char }: word) {
  let mappedWord = words.map((word: string, index: number) => {
    return (
      <div key={index} className="word">
        <Character word={word} />
      </div>
    );
  });

  return (
    <>
      <div id="caret"></div>
      {mappedWord}
    </>
  );
}
