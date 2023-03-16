import { testObj } from "../components/TestComp";

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
  private getNumOfChars(correctWords: string[]) {
    let numOfChars: number = 0;
    correctWords.forEach((correctWord: string) => {
      numOfChars += correctWord.length;
    });
    return numOfChars;
  }
  private convertTimeToNum(time: string) {
    const SECONDS = 60;
    let timeSplit = time.split(":");
    let minutes = parseInt(timeSplit[0]);
    let seconds = parseInt(timeSplit[1]);
    let rawTime = minutes * SECONDS + seconds;
    return rawTime;
  }

  private calculateWPM(correctWords: string[], time: string | number) {
    const ONE_MINUTE = 60;
    let typedWords = correctWords.length;
    let WPM: number;
    if (typeof time == "string") {
      let timeOfTest = this.convertTimeToNum(time);
      /* if i typed x amount of words in y amount of time how many i can type in one minute
       */
      WPM = Math.round((ONE_MINUTE * typedWords) / timeOfTest);
      return WPM;
    }
    if (typeof time == "number") {
      WPM = Math.round((ONE_MINUTE * typedWords) / time);
      return WPM;
    }
  }
  private calculateAcc(correctWords: string[], error: number) {
    let numOfChars: number = this.getNumOfChars(correctWords);
    let numOfCorrectChars: number = 0;
    let Acc: number = 0;
    numOfCorrectChars = numOfChars - error;
    Acc = Math.floor((numOfCorrectChars * 100) / numOfChars);
    return Acc;
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
  public result(testLog: testObj) {
    let resultObj = {
      ...testLog,
      accuracy: this.calculateAcc(testLog.correctWords, testLog.error),
      wpm: this.calculateWPM(
        testLog.correctWords,
        testLog.testType.type == "time"
          ? testLog.testType.value
          : testLog.chrono
      ),
    };
    return resultObj;
  }
}

export default Typer;
