/**
 *  Purpose of WordComponent
 *  displaying words , check if typed word is right by character, check how many errors
 */
import { useEffect, useState } from "react";
import "../stylesheets/css/WordComp.css";
import { Character } from "./CharacterComp";

interface word {
  words: Array<string>;
  typedChar: string;
  testObj: object;
}

export function WordComp({ words, typedChar, testObj }: word) {
  let mappedWord = words.map((word: string, index: number) => {
    return (
      <div key={index} className="word">
        <Character word={word} typedChar={typedChar} />
      </div>
    );
  });

  /**
   * take the firstWord in the list => currentWord, have correctWord=''
   * have an attribute or a class for characterComp to check if it has that attribute , let it have class correct
   * test if the typedChar == the currentChar in the currentWord, if yes,add character to correctWord
   **/
  useEffect(() => {
    let indexChar: number = 0;
    let indexWord: number = 0;
    const charCheck = () => {
      let currentWord = words[indexWord];
      if (typedChar.length == 0) {
        return null;
      } else if (typedChar !== currentWord[indexChar]) {
        console.log(false);
        indexChar++;
      } else if (typedChar == "Backspace") {
        return null;
      } else if (typedChar == currentWord[indexChar]) {
        console.log(true);
        indexChar++;
      }
    };
    charCheck();
  }, [typedChar]);

  return (
    <>
      <div id="caret"></div>
      {mappedWord}
    </>
  );
}
