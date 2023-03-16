import { useEffect, useState } from "react";
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
    return timeDisplay;
  }, 1000);
  return intervalId;
};

function metricDisplayer(
  metric: metric,
  setTracker: CallableFunction,
  tracker: tracker,
  wordMetric?: wordMetric
) {
  let metricDisplay: string;
  if (metric.type == "words") {
    metricDisplay = `${wordMetric?.indexWord}/${wordMetric?.wordsLength}`;
    setTracker({ ...tracker, metricTrack: metricDisplay });
  } else if (metric.type == "time") {
    metricDisplay = tracker.timeTrack;
    setTracker({ ...tracker, metricTrack: metricDisplay });
  }
}

let clearIntervalId: number;
export function MetricTracker({
  isLaunched,
  metric,
  wordMetric,
  isfinishTest,
  setChrono,
}: {
  isLaunched: boolean;
  metric: metric;
  wordMetric?: wordMetric;
  isfinishTest: CallableFunction;
  setChrono: CallableFunction;
}) {
  let trackObj = {
    metricTrack: "",
    timeTrack: "",
  };
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
    if (
      (metric.type == "time" && tracker.metricTrack == "0:0") ||
      (metric.type == "words" &&
        tracker.metricTrack ==
          `${wordMetric?.wordsLength}/${wordMetric?.wordsLength}`)
    ) {
      setChrono(tracker.timeTrack);
      clearInterval(clearIntervalId);
      isfinishTest(true);
    }
  }, [tracker.metricTrack]);
  useEffect(() => {
    clearInterval(clearIntervalId); // reset the timer by clearing interval
    setTracker(trackObj);
  }, [metric]);
  // reseting state
  return <p id="timer">{tracker.metricTrack}</p>;
}
