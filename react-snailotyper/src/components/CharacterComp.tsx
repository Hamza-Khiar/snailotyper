import { useEffect, useState } from "react";
import "../stylesheets/css/WordComp.css";

export function Character({
  word,
  typedChar,
  isCurrent,
}: {
  word: string;
  typedChar: string;
  isCurrent: boolean;
}) {
  const [indexChar, setIndexChar] = useState(0);
  let arrayChar = word.split("");
  let charCheck = () => {
    let currentChar = arrayChar[indexChar];
    if (typedChar.length === 0) {
      return;
    }
    if (typedChar === "Backspace") {
      setIndexChar(indexChar - 1);
      return;
    }
    if (typedChar == " ") {
      return;
    }
    if (typedChar === currentChar) {
      console.log(currentChar, "correct");
      setIndexChar(indexChar + 1);
      return;
    }
    if (typedChar !== currentChar) {
      console.log(currentChar, "incorrect");
      setIndexChar(indexChar + 1);
      return;
    }
  };
  useEffect(() => {
    if (isCurrent) {
      charCheck();
    }
  }, [typedChar]);
  let mappedCharacters = arrayChar.map((char: string, index: number) => {
    return <span key={index}>{char}</span>;
  });
  // check if the typed character === current character if yes => concat the empty string with the char + add className correct else increment error & add className incorrect

  return <>{mappedCharacters}</>;
}
