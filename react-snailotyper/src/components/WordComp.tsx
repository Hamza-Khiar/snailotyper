/**
 *  Purpose of WordComponent
 *  displaying words , check if typed word is right by character, check how many errors
 */
import "../stylesheets/css/WordComp.css";
import { Character } from "./CharacterComp";

interface word {
  words: Array<string>;
}
const file: string = "./src/assets/words.json";
const words: string[] = [];

async function fetchWords(file: string) {
  let response = await fetch(file);
  let words = await response.json();
  words = words.words;
  return words;
}

async function textGenerator(numTextGen: number) {
  //
  if (words.length === 0) {
    await fetchWords(file);
  }
  let wordsGenerated: string[] = [];
  let i = Math.floor(Math.random() * words.length);
  do {
    i = Math.floor(Math.random() * words.length);
    wordsGenerated.push(words[i]);
  } while (wordsGenerated.length !== numTextGen);

  return wordsGenerated;
}

export function WordComp({ words }: word) {
  let mappedWord = words.map((word: string, index: number) => {
    return (
      <div key={index} className="word">
        <Character word={word} />
      </div>
    );
  });

  return <>{mappedWord}</>;
}
