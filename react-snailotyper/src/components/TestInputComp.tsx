import { ChangeEvent, useRef } from "react";
import "../stylesheets/css/TestInputComp.css";
interface launchTest {
  isLaunched: boolean;
}

export function InputTest({ isLaunched }: launchTest) {
  const inputRef = useRef(null);
  function testLog(e: ChangeEvent) {
    console.log(e.target.value);
  }
  if (isLaunched) {
    inputRef.current?.focus();
  }
  return (
    <>
      <input type="text" id="inputField" onChange={testLog} ref={inputRef} />
    </>
  );
}
