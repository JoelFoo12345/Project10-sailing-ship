var ship, ship_sailing, sea, seaImg;

function preload()
{
  ship_sailing = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX=-2
  sea.scale=0.3

  ship = createSprite(200,200,40,40)
  ship.addAnimation("sailing", ship_sailing)
  ship.scale=0.25


  
}

function draw() {
  background("white");
sea.velocityX=-1

if(sea.x<0){
  sea.x=sea.width/8

}

drawSprites();
}