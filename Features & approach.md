so as a type test is, giving a certain amount of words and test the type speed of the typer, there are different ways to test a person
- give him random words (mostly used, generated ) of words and then run it for 60s and check how many words he got right and how many he didn't got right, then judge his/her accuracy, and how many words per min.
- give him a certain amount of words he picks (10,25,50,100) and check his accuracy on how many he got right vs missed 
Have a A list of most 1000~2000 most common words in english
- Add a leaderboard (backend)

___
## Features
- login + dashboard ( statistics of each round's result )
- When incorrect character is typed the words become jiggly

___

#### How typing speed and accuracy is calculated in typing tests

there's a net speed and gross speed, net is only the speed you type in correct words and characters, while gross take also incorrect typing into consideration,

There are two different tests (Word Per Minute / WPM) or (Character Per Minute / CPM)
- it can be calculated in two ways: wpm & cpm
- words per minute (wpm) is the amount of correct words you typed in one minute, or by character per minute (cpm) which is anything that prints in the screen.
- the accuracy is the percentage of the correct words/characters in the whole paragraph

have like a wpm and accuracy metric.
* wpm = all the correct typed words (no incorrect) in one minute; so take a word is a set of characters that's terminated with a space 
* accuracy= the % of correct characters out of the total typed characters (total errors /total characters typed )x100-(100x-1)
* error : the moment an incorrect character is entered the error function keeps watch of how many errors you'll make after the first error being recorded for each second
___
typing test will measure:
- WPM : how many correct words you typed in one min
- Accuracy : the percentage of correct words in the whole text
- error how many errors you made in general 

have a graph that will have two lines (error/accuracy measurement) & (wpm with date)
how much started tests and if their finished 

____
### Technical stuff
