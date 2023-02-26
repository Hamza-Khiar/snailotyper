import { ChangeEvent, useRef } from "react";
import "../stylesheets/css/TestInputComp.css";
interface launchTest {
  isLaunched: boolean;
}

export function InputTest({ isLaunched }: launchTest) {
  const inputRef = useRef(null);

  /*   function testLog(e: ChangeEvent) {
    console.log(e.target.value);
  }
 */
  function keyLogger(e: KeyboardEvent) {
    console.log(e.key);
  }
  /**
   * either lift state up and track each keycode, send it to wordComp and compare if that typed char = char in the word=> set the char to .correct while concat the the char with it's other chars
   */
  if (isLaunched) {
    inputRef.current?.focus();
  }
  return (
    <>
      <input
        type="text"
        id="inputField"
        /* onChange={testLog} */
        onKeyUp={keyLogger}
        ref={inputRef}
      />
    </>
  );
}
