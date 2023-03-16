class Typer {
  /**
   * there are gonna be different functions for different utilities:
   *    [textGenerator,start,result]
   *    start=  it starts the test and returns  an object with wpm,error,accuracy,correctWords
   *    result= it takes the object created by start with the values of the test and map them into either array or object , didn't decide yet to pass it into chartJS
   */

  /**
   * the usecase for Typer is to seperate between ui and data layer, generating text , tracking wpm is the logic of it, which why i decided to put it into a class
   */
  private words: string[] = [];
  private file: string = "./src/assets/words.json";
  public typingTracker = {};

  private async Fetcher() {
    let response = await fetch(this.file);
    let words = await response.json();
    words = words.words;
    this.words.push(...words);

    return this.words;
  }
  private calculateWPM_Acc() {
    //
  }
  public async textGenerator(wordsToGen: number) {
    if (this.words.length === 0) {
      await this.Fetcher();
    }
    let wordsGenerated: string[] = [];
    let i = Math.floor(Math.random() * this.words.length);
    do {
      i = Math.floor(Math.random() * this.words.length);
      wordsGenerated.push(this.words[i]);
    } while (wordsGenerated.length !== wordsToGen);

    return wordsGenerated;
  }
  public start(obj: object) {
    this.typingTracker = {
      wpm: 0,
      error: 0,
      accuracy: 0,
      correctWords: [],
      testType: obj,
      chrono: "",
    };
    return this.typingTracker;
  }
  public result(testLog: object) {
    // this will take the object and calculate the following, wpm,accuracy, based on the testType Object
    
    this.calculateWPM_Acc();
  }
}

export default Typer;
