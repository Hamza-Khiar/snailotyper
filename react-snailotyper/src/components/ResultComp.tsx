import { useEffect } from "react";
import { testObj, typer } from "./TestComp";
export function Result({ testLog }: { testLog: testObj }) {
  /**
   * this will get tesstLog and make a pie Chart for it 
   */
  useEffect(() => {
    console.log("this is result", testLog);
    typer.result(testLog);
  }, [true]);

  return (
    <>
      <p>Resultados</p>
    </>
  );
}
