import { KeyboardEventHandler, useEffect, useRef } from "react";
import "../stylesheets/css/TestInputComp.css";

export function InputTest({
  keyLogger,
}: {
  keyLogger: KeyboardEventHandler<HTMLInputElement>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  inputRef.current?.focus();
  function testLog(e: any) {
    if (e.key == " ") {
      inputRef.current!.value = "";
    }
  }
  function reFocusInput() {
    if (inputRef.current?.blur) {
      inputRef.current?.focus();
    }
  }

  useEffect(() => {
    document.addEventListener("click", reFocusInput);
  }, [inputRef.current]);
  return (
    <>
      <input
        type="text"
        id="inputField"
        onKeyUp={keyLogger}
        onKeyDown={testLog}
        ref={inputRef}
        autoComplete="off"
      />
    </>
  );
}
