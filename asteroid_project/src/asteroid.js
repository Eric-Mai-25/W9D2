import MovingObject from "./moving-object"
import * as Util from "./utils"

export default class Asteroid extends MovingObject{
    static RADIUS = 25;
    static COLOR = "grey"

    constructor(obj) {
        super(obj)
        this.color = Asteroid.COLOR
        this.radius = Asteroid.RADIUS
        this.vel = Util.randomVec(5)
    }


}

