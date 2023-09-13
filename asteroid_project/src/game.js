import Asteroid from "./asteroid";
import Ship from "./ship";

export default class Game {
    static DIM_X = 500
    static DIM_Y = 500
    static NUM_ASTEROIDS = 5

    constructor() {
        this.asteroids = []
        this.addAsteroids(Game.NUM_ASTEROIDS)
        this.ship = new Ship({pos: this.randomPosition(), game:this})
    }

    addAsteroids(n) {
        let i = 0 
        while( i < n){
            let posObj = { pos: this.randomPosition(), game: this}
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
        this.allObjects().forEach((ast)=>{
            ast.draw(ctx)
        })
    }

    moveObjects(){
        this.allObjects().forEach((ast)=>{
            ast.move()
        })
    }

    wrap(pos) {
        if (pos[0] < 0) {
            pos[0] = 500 -1
        }
        if (pos[0] > 500) {
            pos[0] = 0 + 1
        }
        if (pos[1] < 0) {
            pos[1] = 500 -1
        }
        if (pos[1] > 500) {
            pos[1] = 0 + 1
        }
        return pos
    }

    checkCollisions() {
        let allObj = this.allObjects()
        for (let i = 0; i < allObj.length; i++) {
            for (let j = i+1; j < allObj.length; j++) {
                if (allObj[i].isCollideWith(allObj[j])) {
                    // alert("COLLISIONS")
                    allObj[i].collideWith(allObj[j])
                }
            }
            
        }
    }

    step() {
        this.moveObjects()
        this.checkCollisions()
    }

    remove(asteroid) {
        let index = this.asteroids.indexOf(asteroid)
        this.asteroids.splice(index, 1)
    }

    allObjects(){
        return this.asteroids.concat([this.ship])
    }
}