# Memory Game

Who hasn't played card games at some point? From a very young age to a beer night with friends, right?

Well, for this Challenge I have recreated
the [famous game](https://en.wikipedia.org/wiki/Concentration_(card_game)).

[Link To The Game](https://webstermanyanga.github.io/mGF96wRf3W8hzoTdqalh/).

## How it works?

The requirements for the game are pretty simple.

The dynamics of the game will consist of presenting a board with a series of face-down cards and revealing all the pairs
before the time is up. The user will tap on each card to turn it over and, if two of them match when they are uncovered,
they will be turned face up. If not, they will be hidden again.

**The game is won if all pairs are uncovered within the time limit.**

So, the game will have an initial screen to select one of the three difficulties and 1 minute to solve each board:

* Easy: 4x4 board
* Medium: 4x6 board (or 6x4 depending on the screen)
* Difficult: 5x6 board (or 6x5 depending on screen)

The application will have a main game screen that contains the following elements:

* Game board. The board where the user will play and see the cards.
* Move counter. Every time 2 cards are turned over it will increase by 1, whether you hit or not.
* Time counter. A 1-min countdown to reveal all pairs!
* Remaining pairs counter.
* A button to return to the level selection screen.

