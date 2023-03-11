import { useEffect, useState } from "react";
/**
 * the purpose of this function is to display the metric on which we're testing of, launching a timer based on what metric we have
 */

function timer(metric: string) {
  // launch the corresponding timer based on what kind of metric there is
  // if it's words the timer will be incremental, if it's time it'll take the value of metric.value & decrement it by each sec
}
function metricDisplayer() {
  // this will formulate and the metric to display, if it's time => `${min}:{sec}` ; if it's words => `${indexWord}/{wordsLength}`
}

export function MetricTracker({
  isLaunched,
  metric,
  wordsLength,
}: {
  isLaunched: boolean;
  metric: object;
  wordsLength?: number;
}) {
  let trackObj = {
    metricTrack: "",
    timeTrack: "",
  };
  const [tracker, setTracker] = useState(trackObj);

  /**
   * 1. launch Timer
   * 2. render metric, if words get the currentWord from WordComp else , track time
   */

  useEffect(() => {
    // if launched, start timer
  }, [isLaunched]);
  return <p id="timer">{}</p>;
}
