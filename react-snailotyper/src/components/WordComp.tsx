/**
 *  Purpose of WordComponent
 *  displaying words , check if typed word is right by character, check how many errors
 */
import { useState } from "react";
import "../stylesheets/css/WordComp.css";
import { Character } from "./CharacterComp";

const file: string = "./src/assets/words.json";
let wordsFetched: string[] = [];

async function fetchWords(file: string) {
  let response = await fetch(file);
  let words = await response.json();
  words = words.words;

  return words;
}
async function textGenerator(wordsToGen: number) {
  if (wordsFetched.length === 0) {
    await fetchWords(file);
  }
  let wordsGenerated: string[] = [];
  let i = Math.floor(Math.random() * wordsFetched.length);
  do {
    i = Math.floor(Math.random() * wordsFetched.length);
    wordsGenerated.push(wordsFetched[i]);
  } while (wordsGenerated.length !== wordsToGen);

  return wordsGenerated;
}
// wordsFetched = await fetchWords(file);

export function WordComp({ numOfWords }: { numOfWords: number }) {
  const [genText, setGenText] = useState<string[]>();

  let mappedWord = wordsFetched.map((word: string, index: number) => {
    return (
      <div key={index} className="word">
        <Character word={word} />
      </div>
    );
  });

  return <>{mappedWord}</>;
}
