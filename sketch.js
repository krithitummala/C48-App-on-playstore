var ground,player,corona,objects
var groundImage, playerImage,coronaImage,playerImage2,
sanitizerImage,maskImage,soapImage
var edges;
var sanitizerGroup, maskGroup , soapGroup, corona1Group,
corona2Group, corona3Group, corona4Group
var sanitizerCount = 0
var maskCount = 0
var soapCount  = 0
var correctSound;
var wrongSound;


function preload(){
 groundImage = loadImage("Images/ground.png")
 playerImage = loadAnimation("Images/player1.png","Images/player2.png",
 "Images/player3.png","Images/player4.png","Images/player5.png","Images/player6.png",
 "Images/player7.png")
 playerImage2 = loadAnimation("Images/player 8.png", "Images/player 9.png",
 "Images/player 10.png","Images/player 11.png","Images/player 12.png", 
 "Images/player 13.png","Images/player 14.png")
 coronaImage1 = loadImage("Images/corona 1.png");
 coronaImage2 = loadImage("Images/corona 2.png");
 coronaImage3 = loadImage("Images/corona 3.png");
 coronaImage4 = loadImage("Images/corona 4.png");
 sanitizerImage = loadImage("Images/sanitizer.png");
 maskImage = loadImage("Images/mask.png");
 soapImage = loadImage("Images/soap.png");
 correctSound = loadSound("Sounds/successSound.wav");
 wrongSound = loadSound("Sounds/negativeSound.wav");
 }
function setup(){
createCanvas(windowWidth,windowHeight)
player = new Player(width-50,300,40,80)
ground = new Ground(width-600,500,1200,20)
corona = new Corona(width-200,20,20,40)
objects = new Objects(width-200,20,20,40)
sanitizerGroup = new Group();
maskGroup = new Group();
soapGroup = new Group();
corona1Group = new Group();
corona2Group = new Group();
corona3Group = new Group();
corona4Group = new Group();
edges = createEdgeSprites();
}

function draw(){
background("grey");
ground.reset();
player.behaviour();
corona.spawnCorona1();
corona.spawnCorona2()
corona.spawnCorona3()
corona.spawnCorona4()
objects.spawnSanitizer();
objects.spawnSoap();
objects.spawnMask();
objects.collide();
corona.collideCorona();
endGame();
drawSprites();
fill("white")
textSize(20);
text("snanitizerCount: " + sanitizerCount,400,50)
text("     maskCount: " + maskCount,600,50)
text("     soapCount: " + soapCount,800,50)
}

function endGame(){
    if(soapCount === -3 || maskCount === -3 || sanitizerCount === -3){
        player.clear();
        corona1.clear();
        corona2.clear();
        corona3.clear();
        corona4.clear();
        ground.clear();
        text("Game End! Please take precutionary measures to avoid Corona virus!",800,200);
    }
}