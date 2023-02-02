class Typer {
  /**
   * there are gonna be different functions for different utilities:
   *    [textGenerator,start,typingWatcher,result]
   *    textGenerator = generate text based the text file you have in assets
   *    start = after text generates it listens if any keystroke are entered
   *    typingWatcher = this is the one who'll watch all the correct words and corrected characters
   *    result = taking data that's returned in 'typingWatcher' it will be mapped out in a graph
   *
   */
  public async textGenerator(wordsToGen: number, file: string) {
    let words = await this.Fetcher(file);
    words = this.wordShuffler(words, wordsToGen);
    return words;
  }

  private async Fetcher(file: string) {
    let response = await fetch(file);
    let words = await response.json();
    words = words.words;
    return words;
  }
  private wordShuffler(words: any, wordsToGen: number) {
    const MIN = 0;
    const MAX = 999;
    let wordsGenerated: string[] = [];
    let i = Math.ceil(Math.random() * (MAX - MIN));
    do {
      i = Math.ceil(Math.random() * (MAX - MIN));
      wordsGenerated.push(words[i]);
    } while (wordsGenerated.length !== wordsToGen);
    return wordsGenerated;
  }
  public start() {
    /**
     * this will detect the keypress and start a timer while calling typing watcher
     */
  }
}

export default Typer;
