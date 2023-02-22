export function MetricRender({ isLaunched, time }) {
  //   let timerEl;
  //   let seconds = 120;
  //   let countDownTimer = function () {
  //     timerEl = `${Math.floor(seconds / 60)} : ${seconds % 60}`;
  //     seconds--;
  //     return timerEl;
  //   };
  //   setInterval(countDownTimer, 1000);
  return <p id="timer">{time == 0 ? null : time}</p>;
}
