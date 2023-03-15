import { useEffect, useState } from "react";
/**
 * the purpose of this function is to display the metric on which we're testing of, launching a timer based on what metric we have
 */
interface metric {
  type: string;
  value: number;
}
interface tracker {
  metricTrack: string;
  timeTrack: string;
}
interface wordMetric {
  wordsLength: number;
  indexWord: number;
}

const timer = (
  metric: metric,
  setTracker: CallableFunction,
  tracker: tracker
) => {
  // launch the corresponding timer based on what kind of metric there is
  // if it's words the timer will be incremental, if it's time it'll take the value of metric.value & decrement it by each sec
  let time = metric.type == "time" ? metric.value : 0;
  const ONE_MINUTE = 60;
  let intervalId: number;
  let timeDisplay: string;
  intervalId = setInterval(() => {
    //
    let minutes = Math.floor(time / ONE_MINUTE);
    let seconds = time % ONE_MINUTE;

    timeDisplay = `${minutes}:${seconds}`;
    setTracker({ ...tracker, timeTrack: timeDisplay });
    if (metric.type == "time") {
      time--;
      time == -1 ? clearInterval(intervalId) : null;
    }
    if (metric.type == "words") {
      time++;
      return;
    }
    /* console.log(timeDisplay); */
    return timeDisplay;
  }, 1000);
  return intervalId;
};

function metricDisplayer(
  metric: metric,
  setTracker: CallableFunction,
  tracker: tracker,
  wordMetric: wordMetric
) {
  let metricDisplay: string;
  if (metric.type == "words") {
    metricDisplay = `${wordMetric.indexWord}/${wordMetric.wordsLength}`;
    setTracker({ ...tracker, metricTrack: metricDisplay });
  } else if (metric.type == "time") {
    setTracker({ ...tracker, metricTrack: tracker.timeTrack });
  }
  // this will formulate and the metric to display, if it's time => `${min}:{sec}` ; if it's words => `${indexWord}/{wordsLength}`
}
let clearIntervalId: number;
export function MetricTracker({
  isLaunched,
  metric,
  wordMetric,
}: {
  isLaunched: boolean;
  metric: metric;
  wordMetric: wordMetric;
}) {
  let trackObj = {
    metricTrack: "",
    timeTrack: "",
  };
  // metricDisplayer(metric, setTracker, tracker, wordMetric);
  const [tracker, setTracker] = useState(trackObj);

  useEffect(() => {
    // if launched, start timer
    if (isLaunched) {
      clearIntervalId = timer(metric, setTracker, tracker); // starts the timer while im getting the intervalId
    }
  }, [isLaunched]);
  useEffect(() => {
    metricDisplayer(metric, setTracker, tracker, wordMetric);
  }, [tracker.timeTrack]);
  useEffect(() => {
    clearInterval(clearIntervalId); // reset the timer by clearing interval
    setTracker(trackObj);
  }, [metric]);
  // reseting state
  return <p id="timer">{tracker.metricTrack}</p>;
}
