import { useState } from "react";
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
  let arrayChar = word.split("");
  let mappedCharacters = arrayChar.map((char: string, index: number) => {
    return <span key={index}>{char}</span>;
  });
  // check if the typed character === current character if yes => concat the empty string with the char + add className correct else increment error & add className incorrect
  return <>{mappedCharacters}</>;
}
