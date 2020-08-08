class Corona{
constructor(x,y,width,height){
    //this.body = createSprite(x,y,width,height);
    //this.body.addImage("corona",coronaImage1);
    
}
  spawnCorona1(){
    if(frameCount% 227 === 0 && frameCount% 359 !== 0 && 
      frameCount% 953 !== 0 && frameCount% 755 !== 0){
        console.log("corona1");
        var corona1 = createSprite(1200,random(250,300),10,10);
        corona1.addImage("corona",coronaImage1);
        corona1.scale = 0.1
        corona1.velocityX = -2
        corona1Group.add(corona1);
     }
  }
  spawnCorona2(){
    if(frameCount% 359 === 0 && frameCount% 227 !== 0 && 
       frameCount% 953 !== 0 && frameCount% 700 !== 0){
        console.log("corona2");
        var corona2 = createSprite(1200,random(250,300),10,10);
        corona2.addImage("corona",coronaImage2);
        corona2.scale = 0.1
        corona2.velocityX = -2
        corona2Group.add(corona2);
     }
  }
  spawnCorona3(){
    if(frameCount% 953 === 0 && frameCount% 227 !== 0 && 
      frameCount% 359 !== 0 && frameCount% 755 !== 0){
        console.log("corona3");
        var corona3 = createSprite(1200,random(250,300),10,10);
        corona3.addImage("corona",coronaImage3);
        corona3.scale = 0.1
        corona3.velocityX = -2
        corona3Group.add(corona3);
     }
   }

   spawnCorona4(){
      if(frameCount% 755 === 0 && frameCount% 227 !== 0 && 
        frameCount% 359 !== 0 && frameCount% 953 !== 0){
          console.log("corona4");
          var corona4 = createSprite(1200,random(250,300),10,10);
          corona4.addImage("corona",coronaImage4);
          corona4.scale = 0.1
          corona4.velocityX = -2
          corona4Group.add(corona4);
       }
     }
    collideCorona(){
      if(corona1Group.isTouching(player.body)){
        corona1Group.destroyEach();
        sanitizerCount = sanitizerCount -1
        wrongSound.play();
      }
      if(corona2Group.isTouching(player.body)){
        corona2Group.destroyEach();
        maskCount = maskCount - 1
        wrongSound.play();
      }
      if(corona3Group.isTouching(player.body)){
        corona3Group.destroyEach();
        soapCount = soapCount - 1
        wrongSound.play();
      }
      if(corona4Group.isTouching(player.body)){
        corona4Group.destroyEach();
        soapCount = soapCount - 1
        maskCount = maskCount - 1
        sanitizerCount = sanitizerCount -1
        wrongSound.play();
      }
    }
  }
