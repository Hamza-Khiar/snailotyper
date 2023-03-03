/**
 *  Purpose of WordComponent
 *  displaying words , check if typed word is right by character, check how many errors
 */
import { useEffect, useState } from "react";
import "../stylesheets/css/WordComp.css";
import { Character } from "./CharacterComp";

interface word {
  words: Array<string>;
  typedCharObj: { typedChar: string; index: number };
  testObj?: object;
}

export function WordComp({ words, typedCharObj, testObj }: word) {
  const [indexWord, setIndexWord] = useState(0);
  const [indexChar, setIndexChar] = useState(0);

  let currentWord = words[indexWord];
  let wordCheck = () => {
    let currentChar = currentWord[indexChar];
    if (typedCharObj.typedChar.length === 0) {
      return;
    }
    if (typedCharObj.typedChar === "Backspace") {
      setIndexChar(indexChar - 1);
      return;
    }
    if (typedCharObj.typedChar === currentChar) {
      console.log(currentChar, "correct");
      setIndexChar(indexChar + 1);
      return;
    }
    if (typedCharObj.typedChar === " ") {
      setIndexWord((indexWord) => indexWord + 1);
      setIndexChar((indexChar) => indexChar - indexChar);
      currentWord = words[indexWord + 1];
      currentChar = currentWord[indexChar];
      // console.log(currentWord, indexWord, indexChar);
      return;
    }
    if (typedCharObj.typedChar !== currentChar) {
      console.log(currentChar, "incorrect");
      setIndexChar(indexChar + 1);
      return;
    }
    /**
     * since the testing is repeated, you gotta do something about it
     */
  };
  let mappedWords = [];
  let oldMappedWord = words.map((word: string, index: number) => {
    return (
      <div key={index} className="word">
        <Character word={word} />
      </div>
    );
  });

  useEffect(() => {
    if (words[indexWord] === currentWord /* && index === indexWord */) {
      wordCheck();
    }
  }, [typedCharObj]);
  /**
   * take the firstWord in the list => currentWord, have correctWord=''
   * have an attribute or a class for characterComp to check if it has that attribute , let it have class correct
   * test if the typedChar == the currentChar in the currentWord, if yes,add character to correctWord
   *
   *
   * OR
   *  have an array of words, each word is destructed to an array of objects with {value: char , className:'' || 'correct'|| 'incorrect'}
   **/

  return (
    <>
      <div id="caret"></div>
      {oldMappedWord}
    </>
  );
}
