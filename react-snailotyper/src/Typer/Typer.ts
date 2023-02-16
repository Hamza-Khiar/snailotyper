class Typer {
  /**
   * there are gonna be different functions for different utilities:
   *    [textGenerator,start,typingWatcher,result]
   *    start = after text generates it listens if any keystroke are entered
   *    typingWatcher = this is the one who'll watch all the correct words and corrected characters
   *    result = taking data that's returned in 'typingWatcher' it will be mapped out in a graph
   *
   */
  private words: string[] = [];
  private file: string = "./src/assets/words.json";

  private async Fetcher() {
    let response = await fetch(this.file);
    let words = await response.json();
    words = words.words;
    this.words.push(...words);

    return this.words;
  }
  public async textGenerator(wordsToGen: number) {
    const MIN = 0;
    const MAX = 999;
    if (this.words.length === 0) {
      await this.Fetcher();
    }
    let wordsGenerated: string[] = [];
    let i = Math.ceil(Math.random() * (MAX - MIN));
    do {
      i = Math.ceil(Math.random() * (MAX - MIN));
      wordsGenerated.push(this.words[i]);
    } while (wordsGenerated.length !== wordsToGen);

    return wordsGenerated;
  }
  public start() {
    this.timer();
    /**
     * this will detect the keypress and start a timer while calling typing watcher
     */
  }
  private timer() {
    // let timerEl;
    // let seconds = 120;
    // let countDownTimer = function () {
    //   timerEl = `${Math.floor(seconds / 60)} : ${seconds % 60}`;
    //   seconds--;
    //   return timerEl;
    // };
    // setInterval(countDownTimer, 1000);
  }
  private typingWatcher() {
    //
  }
}

export default Typer;
