export default class MovingObject{
    constructor(obj){
        this.pos = obj.pos
        this.vel = obj.vel
        this.radius = obj.radius
        this.color = obj.color
        this.game = obj.game
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0 , 2 * Math.PI)
        ctx.stroke()
        ctx.fillStyle = this.color
        ctx.fill()
    } 

    move(){
        this.pos[0] += this.vel[0]
        this.pos[1] += this.vel[1]
        this.pos = this.game.wrap(this.pos)
    }

    isCollideWith(otherObject) {
        let collided = false
        let radiiSum = this.radius + otherObject.radius
        let a = Math.abs(this.pos[0] - otherObject.pos[0])
        let b = Math.abs(this.pos[1] - otherObject.pos[1])
        let c = Math.sqrt((a**2) + (b**2))
        if (c < radiiSum) collided = true
        return collided
    }

    collideWith(otherObject) {
        this.game.remove(this)
        this.game.remove(otherObject)
    }
}


