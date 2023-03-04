import { useEffect, useState } from "react";
import "../stylesheets/css/WordComp.css";
import { Character } from "./CharacterComp";
interface word {
  words: Array<string>;
  typedCharObj: { typedChar: string; index: number };
  testObj?: object;
}
export function WordComp({ words, typedCharObj, testObj }: word) {
  const [indexWord, setIndexWord] = useState(0); // for tracking which word to test
  const [indexChar, setIndexChar] = useState(0); // for tracking which character to test

  function mapWord(wordArray: Array<string>) {
    return wordArray.map((word: string) => {
      return word.split("").map((i, index) => {
        return { value: i, className: "" };
      });
    });
  }
  let mappedCharactersArray = mapWord(words);
  const [mappedCharacters, setMappedCharacters] = useState(
    mappedCharactersArray
  );
  const uiChangeClass = (className: string) => {
    const uiChange = mappedCharacters.forEach((charSetting) => {
      if (charSetting === mappedCharacters[indexWord]) {
        const charChange = charSetting.forEach((charObj, index) => {
          if (index == indexChar) {
            charObj.className = className;
            // return charObj;
          } /* else {
            // return charObj;
          } */
          // fix the 'backspace' classname
        });
        return charChange;
      } else {
        return charSetting;
      }
    });
    return uiChange;
  };
  let currentWord = words[indexWord];
  let wordCheck = () => {
    let currentChar = currentWord[indexChar];
    if (typedCharObj.typedChar.length === 0) {
      return;
    }
    if (typedCharObj.typedChar === "Backspace") {
      if (indexChar > -1) {
        setIndexChar(indexChar - 1);
        uiChangeClass("");
        console.log(indexChar);
      } else {
        setIndexChar(0);
      }
    } else if (typedCharObj.typedChar === currentChar) {
      uiChangeClass("correct");
      console.log(indexChar, typedCharObj.typedChar, currentChar, "correct");
      setIndexChar(indexChar + 1);
    } else if (typedCharObj.typedChar === " ") {
      setIndexWord((indexWord) => indexWord + 1);
      setIndexChar((indexChar) => 0);
      currentWord = words[indexWord + 1];
      currentChar = currentWord[indexChar];
      // console.log(currentWord, indexWord, indexChar);
    } else if (typedCharObj.typedChar !== currentChar) {
      uiChangeClass("incorrect");
      console.log(indexChar, typedCharObj.typedChar, currentChar, "incorrect");
      setIndexChar(indexChar + 1);
    }
  };
  let MappedWords = mappedCharacters.map((mappedWord, index: number) => {
    return (
      <div key={index} className="word">
        <Character word={mappedWord} />
      </div>
    );
  });
  useEffect(() => {
    if (words[indexWord] === currentWord) {
      wordCheck();
    }
  }, [typedCharObj]);
  useEffect(() => {
    setMappedCharacters(mapWord(words));
    setIndexChar(0);
    setIndexWord(0);
  }, [words]);

  return (
    <>
      <div id="caret"></div>
      {MappedWords}
    </>
  );
}

/**
 * take the firstWord in the list => currentWord, have correctWord=''
 * test if the typedChar == the currentChar in the currentWord, if yes,add character to correctWord
 *
 *
 **/
