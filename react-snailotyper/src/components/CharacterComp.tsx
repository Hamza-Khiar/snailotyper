import "../stylesheets/css/WordComp.css";

export function Character({ word }: { word: Array<{}> }) {
  let mappedCharacters = word.map((char: object, index: number) => {
    return (
      <span key={index} className={char.className}>
        {char.value}
      </span>
    );
  });
  // // check if the typed character === current character if yes => concat the empty string with the char + add className correct else increment error & add className incorrect
  return <>{mappedCharacters}</>;
}
