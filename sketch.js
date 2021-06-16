var background1, background2;
var scrollSpeed = 10;
var x1 = 0;
var x2;
var spaceship, spaceshipImg;
var asteroidGroup, asteroid, asteroid1, asteroid2, asteroid3;
var rand;

var gameState = "play";


function preload() {
background1 = loadImage("Images/background1.png");
background2 = loadImage("Images/background1.png")
spaceshipImg = loadImage("Images/spaceship.png");
asteroid1Img = loadAnimation("ObstacleImages/obs1.png", "ObstacleImages/obs2.png", "ObstacleImages/obs3.png",
 "ObstacleImages/obs4.png","ObstacleImages/obs5.png", "ObstacleImages/obs6.png", "ObstacleImages/obs7.png", 
 "ObstacleImages/obs8.png", "ObstacleImages/obs9.png","ObstacleImages/obs10.png", "ObstacleImages/obs11.png",
  "ObstacleImages/obs12.png", "ObstacleImages/obs13.png", "ObstacleImages/obs14.png", "ObstacleImages/obs15.png",
  "ObstacleImages/obs16.png");

  asteroid2Img = loadAnimation("ObstacleImages/a30000.png", "ObstacleImages/a30001.png", "ObstacleImages/a30002.png",
 "ObstacleImages/a30003.png","ObstacleImages/a30004.png", "ObstacleImages/a30005.png", "ObstacleImages/a30006.png", 
 "ObstacleImages/a30007.png", "ObstacleImages/a30008.png","ObstacleImages/a30009.png", "ObstacleImages/a30010.png",
  "ObstacleImages/a30011.png", "ObstacleImages/a30012.png", "ObstacleImages/a30013.png", "ObstacleImages/a30014.png",
  "ObstacleImages/a30015.png");


  asteroid3Img = loadAnimation("ObstacleImages/a40000.png", "ObstacleImages/a40001.png", "ObstacleImages/a40002.png",
 "ObstacleImages/a40003.png","ObstacleImages/a40004.png", "ObstacleImages/a40005.png", "ObstacleImages/a40006.png", 
 "ObstacleImages/a40007.png", "ObstacleImages/a40008.png","ObstacleImages/a40009.png", "ObstacleImages/a40010.png",
  "ObstacleImages/a40011.png", "ObstacleImages/a40012.png", "ObstacleImages/a40013.png", "ObstacleImages/a40014.png",
  "ObstacleImages/a40015.png");


  asteroid4Img = loadAnimation("ObstacleImages/b40000.png", "ObstacleImages/b40001.png", "ObstacleImages/b40002.png",
 "ObstacleImages/b40003.png","ObstacleImages/b40004.png", "ObstacleImages/b40005.png", "ObstacleImages/b40006.png", 
 "ObstacleImages/b40007.png", "ObstacleImages/b40008.png","ObstacleImages/b40009.png", "ObstacleImages/b40010.png",
  "ObstacleImages/b40011.png", "ObstacleImages/b40012.png", "ObstacleImages/b40013.png", "ObstacleImages/b40014.png",
  "ObstacleImages/b40015.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x2 = width;

spaceship = createSprite(width/2, height/2, 300, 300);
spaceship.addImage(spaceshipImg);
spaceship.debug = true;

asteroidGroup = new Group();
}


function draw() {
  
background("black");


if(gameState === "play"){

image(background1, x1, 0, width, height);
image(background2, x2, 0, width, height);

x1 -= scrollSpeed;
x2 -= scrollSpeed;

if( x1 <= -width) {
  x1 = width
}
if( x2 <= -width) {
  x2 = width
}

spaceship.x = mouseX;
spaceship.y = mouseY;


spawnAsteroids();

if(asteroidGroup.isTouching(spaceship)){
  gamestate = "end";
}
}

if(gameState === "end"){


}
drawSprites();
};

function spawnAsteroids(){

if(frameCount%80 === 0 ){
  asteroid = createSprite(width, height/2);
  asteroid.velocityX = -(Math.round(random(5,15)));
  
  asteroid.y = Math.round(random(100, height-200))
  
  rand = Math.round(random(1,4))

  asteroid.lifetime = (width/asteroid.velocityX);

  switch(rand){

    case 1: asteroid.addAnimation("asteroid1", asteroid1Img);
    break; 
    case 2: asteroid.addAnimation("asteroid2", asteroid2Img);
    break;
    case 3: asteroid.addAnimation("asteroid3", asteroid3Img);
    break;
    case 4: asteroid.addAnimation("asteroid4", asteroid4Img);
    break;

    default: 
    break; 



  }


  asteroidGroup.add(asteroid);
}

}