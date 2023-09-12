import MovingObject from "./moving-object";
import Asteroid from "./asteroid";

const canvasEl = document.getElementById("game-canvas")
const ctx = canvasEl.getContext("2d")

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

const ast = new Asteroid({ pos: [30, 30] });
mo.draw(ctx)
ast.draw(ctx)