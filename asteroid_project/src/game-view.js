import Game from "./game";

export default class GameView{
    constructor(ctx){
        this.game = new Game
        this.ctx  = ctx
    }

    start(){
        setInterval(()=>{
            this.game.draw(this.ctx)
            this.game.step()
        },50)
    }
}
