class Objects{
    constructor(x,y,width,height){
      //this.body = createSprite(x,y,width,height)
    }

    spawnSanitizer(){
      if(frameCount% 245 === 0 ){
          var sanitizer = createSprite(random(10,1150),-5,10,10);
          sanitizer.addImage("sanitizer",sanitizerImage);
          sanitizer.scale = 0.1;
          sanitizer.velocityY = 2
          sanitizerGroup.add(sanitizer);
        }
    }
    spawnSoap(){
      if(frameCount% 310 === 0){
          var soap = createSprite(random(10,1150),-5,10,10);
          soap.addImage("soap",soapImage);
          soap.scale = 0.1
          soap.velocityY = 2
          soapGroup.add(soap);
       }
    }
    spawnMask(){
      if(frameCount% 435 === 0){
          var mask = createSprite(random(10,1150),-5,10,10);
          mask.addImage("mask",maskImage);
          mask.scale = 0.1
          mask.velocityY = 2
          maskGroup.add(mask);
          }
     }

    collide(){
      if(sanitizerGroup.isTouching(player.body)){
        sanitizerGroup.destroyEach();
        sanitizerCount = sanitizerCount + 1
        correctSound.play();
      }
      if(maskGroup.isTouching(player.body)){
        maskGroup.destroyEach();
        maskCount = maskCount + 1
        correctSound.play();
      }
      if(soapGroup.isTouching(player.body)){
        soapGroup.destroyEach();
        soapCount = soapCount + 1
        correctSound.play();
      }
}
}