import Asteroid from "./asteroid";

export default class Game {
    static DIM_X = 500
    static DIM_Y = 500
    static NUM_ASTEROIDS = 5

    constructor() {
        this.asteroids = []
        this.addAsteroids(Game.NUM_ASTEROIDS)
    }

    addAsteroids(n) {
        let i = 0 
        while( i < n){
            let posObj = { pos: this.randomPosition()}
            let ast = new Asteroid(posObj)
            this.asteroids.push( ast)
            i++
        }
    }

    randomPosition() {
        let x = Math.floor(Math.random() * Game.DIM_X )
        let y = Math.floor(Math.random() * Game.DIM_Y )
        let pos = [x, y]
        return pos
    }

    draw(ctx){
        ctx.clearRect(0, 0 , Game.DIM_X, Game.DIM_Y)
        ctx.fillStyle = 'black';
        ctx.fillRect(0,0,Game.DIM_X, Game.DIM_Y)
        this.asteroids.forEach((ast)=>{
            ast.draw(ctx)
        })
    }

    moveObjects(){
        this.asteroids.forEach((ast)=>{
            ast.move()
        })
    }
}