/**
 *
 */
import "../stylesheets/css/WordComp.css";

export function Character({ word }: { word: string }) {
  let arrayChar = word.split("");
  let mappedCharacters = arrayChar.map((char: string, index: number) => {
    return <span key={index}>{char}</span>;
  });
  return <>{mappedCharacters}</>;
}
