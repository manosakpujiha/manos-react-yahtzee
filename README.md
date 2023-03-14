# manos-react-yahtzee

A game of yahtzee from colt-steele's react course




## The Game

Yahtzee is a chance-and-strategy dice rolling game. A game is played over 13 rounds.

Each round, the player rolls five 6-sided dice. They may click on any number of dice to “freeze” or “unfreeze” them (frozen dice are displayed in a different color). They may re-roll the unfrozen dice up to 2 times.

Each round, they must assign their dice to any unclaimed scoring category. Each category scores differently.

After 13 rounds, the game is over, and the player’s score is the total of each scoring category.

### Scoring Categories

| Category                                                                                                                                                                                                                                          | Description                                                    | Example Score                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |                                                                |                                                                                                                                                                                                         |
| **Ones**                                                                                                                                                                                                                                    | Score 1 for every 1                                            | `<span class="pre">1</span><span> </span><span class="pre">1</span><span> </span><span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">4</span>` = 2  |
| -                                                                                                                                                                                                                                                 | -                                                              | -                                                                                                                                                                                                       |
| **Twos**                                                                                                                                                                                                                                    | Score 2 for every 2                                            | `<span class="pre">1</span><span> </span><span class="pre">2</span><span> </span><span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">4</span>` = 4  |
| **Threes**                                                                                                                                                                                                                                  | Score 3 for every 3                                            | `<span class="pre">1</span><span> </span><span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">3</span><span> </span><span class="pre">3</span>` = 9  |
| **Fours**                                                                                                                                                                                                                                   | Score 4 for every 4                                            | `<span class="pre">1</span><span> </span><span class="pre">2</span><span> </span><span class="pre">4</span><span> </span><span class="pre">4</span><span> </span><span class="pre">5</span>` = 8  |
| **Fives**                                                                                                                                                                                                                                   | Score 5 for every 5                                            | `<span class="pre">1</span><span> </span><span class="pre">2</span><span> </span><span class="pre">5</span><span> </span><span class="pre">5</span><span> </span><span class="pre">5</span>` = 15 |
| **Sixes**                                                                                                                                                                                                                                   | Score 6 for every 6                                            | `<span class="pre">1</span><span> </span><span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">6</span><span> </span><span class="pre">6</span>` = 12 |
| **3 of Kind**                                                                                                                                                                                                                               | If 3+ of one value, score sum of all dice (otherwise, score 0) | `<span class="pre">1</span><span> </span><span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">3</span><span> </span><span class="pre">3</span>` = 12 |
| **4 of Kind**                                                                                                                                                                                                                               | If 4+ of one value, score sum of all dice (else 0)             | `<span class="pre">1</span><span> </span><span class="pre">2</span><span> </span><span class="pre">2</span><span> </span><span class="pre">2</span><span> </span><span class="pre">2</span>` = 8  |
| **Full House**                                                                                                                                                                                                                              | If 3 of one value and 2 of another, score 25 (else 0)          | `<span class="pre">2</span><span> </span><span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">3</span><span> </span><span class="pre">3</span>` = 25 |
| **Small Straight**                                                                                                                                                                                                                          | If 4+ values in a row, score 30 (else 0)                       | `<span class="pre">1</span><span> </span><span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">4</span><span> </span><span class="pre">6</span>` = 30 |
| **Large Straight**                                                                                                                                                                                                                          | If 5 values in a row, score 40 (else 0)                        | `<span class="pre">1</span><span> </span><span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">4</span><span> </span><span class="pre">5</span>` = 40 |
| **Yahtzee**                                                                                                                                                                                                                                 | If all values match, score 50 (else 0)                         | `<span class="pre">2</span><span> </span><span class="pre">2</span><span> </span><span class="pre">2</span><span> </span><span class="pre">2</span><span> </span><span class="pre">2</span>` = 50 |
| **Chance**                                                                                                                                                                                                                                  | Score sum of all dice                                          | `<span class="pre">1</span><span> </span><span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">4</span><span> </span><span class="pre">6</span>` = 16 |

### Example Round

The initial roll is: `<span class="pre">2</span><span> </span><span class="pre">4</span><span> </span><span class="pre">3</span><span> </span><span class="pre">2</span><span> </span><span class="pre">5</span>`.

The player decides to try to get as many twos as possible, and clicks to freeze both twos, then re-rolls, getting a new `<span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">5</span>`. They now have: `<span class="pre">2</span><span> </span><span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">2</span><span> </span><span class="pre">5</span>`.

The player decides to try for a full house, and freezes all of their twos and their three (hoping to roll another 3 to get a full house). They re-roll the die showing five, getting a `<span class="pre">6</span>` and now have `<span class="pre">2</span><span> </span><span class="pre">2</span><span> </span><span class="pre">3</span><span> </span><span class="pre">2</span><span> </span><span class="pre">6</span>`.

Sadly, they didn’t get their full house. They could score this as:

* *Twos* : for 6 points
* *Threes* for 3 points
* *Sixes* : for 6 points
* *Three of Kind:* (twos) for 15 points
* *Chance* : for 15 points

Any other category they claimed on this round would score 0.
