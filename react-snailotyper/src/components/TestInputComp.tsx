import { ChangeEvent, useEffect, useRef } from "react";
import "../stylesheets/css/TestInputComp.css";
interface launchTest {
  isLaunched: boolean;
  keyLogger: KeyboardEvent;
}

export function InputTest({ isLaunched, keyLogger }: launchTest) {
  const inputRef = useRef(null);
  if (isLaunched) {
    inputRef.current?.focus();
  }

  // the reFocusing to the input should be fixed

  return (
    <>
      <input type="text" id="inputField" onKeyUp={keyLogger} ref={inputRef} />
    </>
  );
}
