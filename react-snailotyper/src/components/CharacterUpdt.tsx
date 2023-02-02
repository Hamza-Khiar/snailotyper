export function Character(word: string) {
  let arrayChar = word.split("");
  let mappedCharacters = arrayChar.map((char: string, index: number) => {
    return <span key={index}>{char}</span>;
  });
  return <>{mappedCharacters}</>;
}
