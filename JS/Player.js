class Player{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
        this.body.addAnimation("player",playerImage);
    }

behaviour(){
    if(touches.length > 0 || keyDown("space")&& this.body.y>=244){
        this.body.velocityY = -15;
        touches = [];
    }
   // console.log(this.body.y)
    this.body.velocityY = this.body.velocityY + 1
    this.body.collide(ground.body);

    if(touches.length > 0 || keyDown(RIGHT_ARROW)){
        this.body.addAnimation("player",playerImage);
        this.body.velocityX = 3;
        this.body.VelocityY = 0;
        touches = [];
    }
    if(touches.length > 0 || keyDown(LEFT_ARROW)){
        this.body.addAnimation("player",playerImage2);
        this.body.velocityX = -3;
        this.body.VelocityY = 0;
        touches = [];
    }
    this.body.collide(edges[0]);
    this.body.collide(edges[1]);
    
}
}