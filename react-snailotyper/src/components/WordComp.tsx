import { useEffect, useState } from "react";
import "../stylesheets/css/WordComp.css";
interface testObj {
  wpm: number;
  error: number;
  accuracy: number;
  correctWords: string[];
  testType: { type: string; value: number };
  chrono: string;
}
interface word {
  words: Array<string>;
  typedCharObj: { typedChar: string; index: number };
  testObj: testObj;
  setStateTestTrack: CallableFunction;
  getidxWord: CallableFunction;
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
  getidxWord,
}: word) {
  const [indexWord, setIndexWord] = useState(0); // for tracking which word to test
  const [indexChar, setIndexChar] = useState(0); // for tracking which character to test
  const [mappedCharacters, setMappedCharacters] = useState(() =>
    mapWord(words)
  );
  const [typedWord, setTypedtWord] = useState("");

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

  let wordCheck = () => {
    let currentWord = words[indexWord];
    // this is for checking if the character typed is the right character and set the corresponding classname to the span of the char
    let currentChar;
    if (currentWord !== undefined /* this is for the test not to break */) {
      currentChar = currentWord[indexChar];
    }
    if (typedCharObj.typedChar.length === 0) {
      return;
    }
    if (typedCharObj.typedChar === "Backspace") {
      if (indexChar > -1) {
        setIndexChar(indexChar - 1);
        uiChangeClass("", indexChar - 1);
        setTypedtWord(typedWord.slice(0, -1));
      } else {
        setIndexChar(0);
      }
    } else if (typedCharObj.typedChar === currentChar) {
      uiChangeClass("correct", indexChar);
      setTypedtWord(typedWord.concat(typedCharObj.typedChar));
      setIndexChar(indexChar + 1);
      getidxWord(indexWord);
    } else if (typedCharObj.typedChar === " ") {
      if (indexChar == 0) {
        return;
      } else {
        setIndexWord((indexWord) => indexWord + 1);
        getidxWord(indexWord + 1);
        if (typedWord === currentWord) {
          setStateTestTrack({
            ...testObj,
            correctWords: [...testObj.correctWords, currentWord],
          });
        }
        setTypedtWord("");
        setIndexChar(0);
        if (indexWord + 1 >= mappedCharacters.length) {
          return;
        } else {
          currentWord = words[indexWord + 1];
          currentChar = currentWord[0];
        }

        currentWord = words[indexWord + 1];
        currentChar = currentWord[0];
      }
    } else if (typedCharObj.typedChar !== currentChar) {
      uiChangeClass("incorrect", indexChar);
      setTypedtWord(typedWord.concat(typedCharObj.typedChar));
      setStateTestTrack({ ...testObj, error: testObj.error + 1 });
      setIndexChar(indexChar + 1);
    }
  };

  let MappedWords = mappedCharacters.map((mappedWord, index: number) => {
    return (
      <div key={index} className="word">
        {mappedWord.map((char: { className: string; value: string }, index) => {
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
    wordCheck();
  }, [typedCharObj]);

  useEffect(() => {
    setMappedCharacters(mapWord(words));
    setIndexChar(0);
    setIndexWord(0);
    setStateTestTrack({});
  }, [words]);

  return <>{MappedWords}</>;
}
