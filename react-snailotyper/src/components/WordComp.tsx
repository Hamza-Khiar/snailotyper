/**
 *  Purpose of WordComponent
 *  displaying words , check if typed word is right by character, check how many errors
 */

import { typer } from "./TestComp";

export function WordComp({ words }: any) {
  let mappedWord = words.map((word: string, index: number) => {
    return <span className="word">{word}</span>;
  });

  return <>{mappedWord}</>;
}
