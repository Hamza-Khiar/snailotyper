interface timerParam {
  isLaunched?: boolean;
  time?: number;
}

export function TimerRender({ isLaunched, time }: timerParam) {
  //   let timerEl;
  //   let seconds = 120;
  //   let countDownTimer = function () {
  //     timerEl = `${Math.floor(seconds / 60)} : ${seconds % 60}`;
  //     seconds--;
  //     return timerEl;
  //   };
  //   setInterval(countDownTimer, 1000);
  console.log(time);
  return <p id="timer">{}</p>;
}
