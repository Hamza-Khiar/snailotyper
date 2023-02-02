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
  public textGenerator(wordsToGen: number, file: string) {
    let words = this.Fetcher(file);
    this.wordShuffler(words, wordsToGen);
    return words;
  }

  private async Fetcher(file: string) {
    let response = await fetch(file);
    return response.json();
  }
  private async wordShuffler(words: any, wordsToGen: number) {
    await words;
    const MIN = 0;
    const MAX = 999;
    let wordsGenerated: string[] = [];
    let i = Math.ceil(Math.random() * (MAX - MIN));
    do {
      wordsGenerated.push(words[i]);
    } while (wordsGenerated.length !== wordsToGen);
    console.log(wordsGenerated);

    return words;
  }
}

export default Typer;
