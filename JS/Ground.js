class Ground{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
        this.body.addImage("ground",groundImage);
        this.body.velocityX = -2;
        this.body.VelocityY = 0;
        this.body.scale = 0.5;
    }

    reset(){
        if(this.body.x<150){
            this.body.x = 600
        }
    }
}