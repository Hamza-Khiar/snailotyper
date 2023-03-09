import { useState } from "react";

const updateTimer = (time: number, isIncremental: boolean) => {
  const ONE_MINUTE = 60;
  let intervalId: number;
  intervalId = setInterval(() => {
    let min = Math.floor(time / ONE_MINUTE);
    let seconds = time % 60;
    console.log(`${min}:${seconds}`);
    if (isIncremental) {
      time == 20 ? clearInterval(intervalId) : null;
      time++;
    } else if (!isIncremental) {
      time--;
      time == 0 ? clearInterval(intervalId) : null;
    }
  }, 1000);
};

const timer = (incremental: boolean, val: number = 0) => {
  let time = val;
  if (!incremental) {
    updateTimer(time, false);
    return;
  }
  if (incremental) {
    updateTimer(0, true);
  }
};

export function MetricTracker({
  isLaunched,
  metric,
}: {
  isLaunched: boolean;
  metric: object;
}) {
  const [timeTrack, setTimeTrack] = useState(0);

  // if (isLaunched && metric.type == "time") {
  //   timer(false, metric.value);
  // } else if (isLaunched && metric.type == "words") {
  //   timer(true, metric.value);
  // }

  return <p id="timer">{}</p>;
}
