import { useState } from "react";

const updateTimer = (time: number, isIncremental: boolean) => {
  const ONE_MINUTE = 60;
  let intervalId: number;
  if (isIncremental) {
    intervalId = setInterval(() => {
      let min = Math.floor(time / ONE_MINUTE);
      let seconds = time % 60;
      console.log(`${min}:${seconds}`);
      time++;
      if (time == 20) {
        /* this condition will recieve an event that will stop it */
        clearInterval(intervalId);
      }
    }, 1000);
  } else if (!isIncremental) {
    intervalId = setInterval(() => {
      let min = Math.floor(time / ONE_MINUTE);
      let seconds = time % 60;
      console.log(`${min}:${seconds}`);
      time--;
      if (time == 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
};

const timer = (incremental: boolean, val: number = 0) => {
  let time = val;
  if (!incremental) {
    updateTimer(time, false);
    return;
  }
  if (incremental) {
    updateTimer(time, true);
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
  if (isLaunched && metric.type == "time") {
  } else if (isLaunched && metric.type == "words") {
  }

  return <p id="timer">{}</p>;
}
