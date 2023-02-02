/**
 *  Purpose of WordComponent
 *  displaying words , check if typed word is right by character, check how many errors
 */

import { typer } from "./TestComp";

typer.start()
export function WordComp({ words }: any) {
  let mappedWord = words.map((word: string, index: number) => {
    return (
      <div key={index} className="word">
        {word}
      </div>
    );
  });

  return <>{mappedWord}</>;
}
