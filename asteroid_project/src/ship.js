import MovingObject from "./moving-object";

export default class Ship extends MovingObject {
    static RADIUS = 25;
    static COLOR = 'limegreen'

    constructor(obj){
        super(obj)
        this.color = Ship.COLOR
        this.radius = Ship.RADIUS
        this.vel = [0,0]
    }
}