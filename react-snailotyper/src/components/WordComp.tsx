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
  testObj?: object;
}

export function WordComp({ words, typedChar, testObj }: word) {
  const [indexWord, setIndexWord] = useState(0);
  const [indexChar, setIndexChar] = useState(0);

  let currentWord = words[indexWord];
  let wordCheck = () => {
    let currentChar = currentWord[indexChar];

    if (typedChar.length === 0) {
      return;
    }
    if (typedChar === " ") {
      setIndexWord((indexWord) => indexWord + 1);
      setIndexChar((indexChar) => indexChar - indexChar);
      currentWord = words[indexWord + 1];
      currentChar = currentWord[indexChar];
      console.log(currentWord, indexWord, indexChar);
      return;
    }
    if (typedChar === "Backspace") {
      setIndexChar(indexChar - 1);
      return;
    }
    if (typedChar !== currentChar) {
      console.log(false, typedChar, currentChar);
      setIndexChar(indexChar + 1);
      return;
    }
    if (typedChar === currentChar) {
      console.log(true, typedChar, currentChar);
      setIndexChar(indexChar + 1);
      return;
    }
  };

  let mappedWord = words.map((word: string, index: number) => {
    if (words[index] === currentWord && index == indexWord) {
      useEffect(() => {
        wordCheck();
      }, [typedChar]);
      // call a functions who will do the checking
    }
    return (
      <div key={index} className="word">
        <Character
          word={word}
          typedChar={typedChar}
          isCurrent={
            words[index] === currentWord && index == indexWord ? true : false
          }
        />
      </div>
    );
  });

  /**
   * take the firstWord in the list => currentWord, have correctWord=''
   * have an attribute or a class for characterComp to check if it has that attribute , let it have class correct
   * test if the typedChar == the currentChar in the currentWord, if yes,add character to correctWord
   **/

  return (
    <>
      <div id="caret"></div>
      {mappedWord}
    </>
  );
}
