var runner , runner_running
var ground , groundimage
var cloud , cloudimage
var O1 , O2 , O3 , O4
var jumpSound , dieSound , gSound
function preload(){
  runner_running = loadImage("MyGameRunner.jpg")
  groundimage = loadImage("myGameGround.png")
  cloudimage = loadImage("MyGameCloud.jpg")
  O1 = loadImage("OBS1.png")
  O2 = loadImage("OBS2.jfif")
  O3 = loadImage("O3.png")
  O4 = loadImage("MyGameBird.jpg")
  background = loadImage("sky.png")
  gSound = loadSound("smb_bowserfalls.wav")
  jumpSound = loadSound("smb_jump-small.wav")
  dieSound = loadSound("smb_mariodie.wav")
  
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}