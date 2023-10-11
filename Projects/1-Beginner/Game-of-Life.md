# Conway's Game of Life

**Tier:** 1-Simple

Implement a web version of the [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), using HTML/CSS and JS. You can use a library to help you such as [p5.js](https://p5js.org/).

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

These rules, which compare the behaviour of the automaton to real life, can be condensed into the following:

- Any live cell with two or three live neighbours survives.
- Any dead cell with three live neighbours becomes a live cell.
- All other live cells die in the next generation. Similarly, all other dead cells stay dead.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed, live or dead; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick.[nb 1] Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.

## User Stories

- [ ] User can place a cell on a empty space
- [ ] User can delete a cell on a filled space
- [ ] User can run the game with a play button
- [ ] User can stop the game with a stop button
- [ ] User can reset the grid

## Bonus features

- [ ] User can start with a pre defined template
- [ ] User can save/load a new template
- [ ] User can switch between different color schemes

## Useful links and resources

- [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- [p5.js](https://p5js.org/)
- [MDN](https://developer.mozilla.org/en-US/)

## Example projects
- [copy/life](https://github.com/copy/life)
- [pmav/game-of-life](https://github.com/pmav/game-of-life)
- [DaanMoura/game-of-life](https://github.com/DaanMoura/game-of-life)