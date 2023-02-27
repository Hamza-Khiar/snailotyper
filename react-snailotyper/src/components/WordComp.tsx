/**
 *  Purpose of WordComponent
 *  displaying words , check if typed word is right by character, check how many errors
 */
import { useState } from "react";
import "../stylesheets/css/WordComp.css";
import { Character } from "./CharacterComp";

interface word {
  words: Array<string>;
  typedChar: string;
}

export function WordComp({ words, typedChar }: word) {
  let mappedWord = words.map((word: string, index: number) => {
    return (
      <div key={index} className="word">
        <Character word={word} typedChar={typedChar} />
      </div>
    );
  });

  /**
   * test from the WordComp, take the current word, check if the typed character=== currentChar send 'correct'||'incorrect' to the  characterComp
   * take the testObj and and concat the empty 'correctWords' with the word concatinated inside CharacterComp
   *   */

  return (
    <>
      <div id="caret"></div>
      {mappedWord}
    </>
  );
}
// test in characterComp
