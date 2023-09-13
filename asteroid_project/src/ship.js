import MovingObject from "./moving-object";

export default class Ship extends MovingObject {
    static RADIUS = 25;
    static COLOR = 'limegreen'

    constructor(){
        this.vel = 0
    }
}