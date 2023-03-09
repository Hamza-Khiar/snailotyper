import { useEffect, useState } from "react";
import "../stylesheets/css/WordComp.css";
interface word {
  words: Array<string>;
  typedCharObj: { typedChar: string; index: number };
  testObj: object;
  setStateTestTrack: CallableFunction;
}
function mapWord(wordArray: Array<string>) {
  return wordArray.map((word: string) => {
    return word.split("").map((i) => {
      return { value: i, className: "" };
    });
  });
} // mapping words with their corresponding classes

export function WordComp({
  words,
  typedCharObj,
  testObj,
  setStateTestTrack,
}: word) {
  const [indexWord, setIndexWord] = useState(0); // for tracking which word to test
  const [indexChar, setIndexChar] = useState(0); // for tracking which character to test
  const [mappedCharacters, setMappedCharacters] = useState(() =>
    mapWord(words)
  );

  const uiChangeClass = (className: string, indexVal: number) => {
    return mappedCharacters.forEach((charSetting) => {
      if (charSetting === mappedCharacters[indexWord]) {
        return charSetting.forEach((charObj, index) => {
          if (index == indexVal) {
            charObj.className = className;
          }
        });
      }
    });
  };

  let currentWord = words[indexWord];
  let wordCheck = () => {
    // this is for checking if the character typed is the right character and set the corresponding classname to the span of the char

    let currentChar = currentWord[indexChar];
    if (typedCharObj.typedChar.length === 0) {
      return;
    }
    if (typedCharObj.typedChar === "Backspace") {
      if (indexChar > -1) {
        setIndexChar(indexChar - 1);
        uiChangeClass("", indexChar - 1);
      } else {
        setIndexChar(0);
      }
    } else if (typedCharObj.typedChar === currentChar) {
      uiChangeClass("correct", indexChar);
      setIndexChar(indexChar + 1);
    } else if (typedCharObj.typedChar === " ") {
      if (indexChar == 0) {
        return;
      } else {
        setIndexWord((indexWord) => indexWord + 1);
        setStateTestTrack({
          ...testObj,
          correctWords: [currentWord, ...testObj.correctWords],
        });
        // console.log(testObj);
        setIndexChar(0);
        currentWord = words[indexWord + 1];
        currentChar = currentWord[indexChar];
      }
    } else if (typedCharObj.typedChar !== currentChar) {
      uiChangeClass("incorrect", indexChar);
      setStateTestTrack({ ...testObj, error: testObj.error + 1 });
      setIndexChar(indexChar + 1);
    }
  };

  let MappedWords = mappedCharacters.map((mappedWord, index: number) => {
    return (
      <div key={index} className="word">
        {mappedWord.map((char: object, index) => {
          return (
            <span className={char.className} key={index}>
              {char.value}
            </span>
          );
        })}
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
    setStateTestTrack({});
  }, [words]);

  return (
    <>
      <div id="caret"></div>
      {MappedWords}
    </>
  );
}

/**
 * ___________________
 * take the firstWord in the list => currentWord, have correctWord=''
 * test if the typedChar == the currentChar in the currentWord, if yes,add character to correctWord
 *
 * _________________________________
 * if testObj, have correctWord="",  and push chars in it, if ' ' check if the concat string = currentWord if it is add it to  correctWords and setstate of the testObj
 * this will update the CorrectWords & Error
 **/
