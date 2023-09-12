import MovingObject from "./moving-object";
import Asteroid from "./asteroid";
import Game from "./game"
import GameView from "./game-view";

const canvasEl = document.getElementById("game-canvas")
canvasEl.width = Game.DIM_X;
canvasEl.height = Game.DIM_Y;
const ctx = canvasEl.getContext("2d")
ctx.fillStyle = 'black';
ctx.fillRect(0,0,canvasEl.width, canvasEl.height)


// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });
// const gameAst = new Game
// const ast = new Asteroid({ pos: [30, 30] });
// mo.draw(ctx)
// ast.draw(ctx)
// gameAst.draw(ctx)

const gameStart = new GameView(ctx)
gameStart.start()