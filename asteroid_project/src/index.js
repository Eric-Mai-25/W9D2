import MovingObject from "./moving-object";

const canvasEl = document.getElementById("game-canvas")
const ctx = canvasEl.getContext("2d")

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });

mo.draw(ctx)