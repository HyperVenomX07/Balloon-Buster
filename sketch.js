var backgroundImage,background;
var bow,bowImage;
var pink_balloon,pink_balloonImage;
var red_balloon,red_balloonImage;
var blue_balloon,blue_balloonImage;
var green_balloon,green_balloonImage;
var arrow,arrowImage;
var score = 0;
var arrowGroup;
var red_balloonGroup;
var blue_balloonGroup;
var green_balloonGroup;
var pink_balloonGroup;

function preload()
{
  backgroundImage=loadImage("background0.png");
  bowImage=loadImage("bow0.png");
  pink_balloonImage=loadImage("pink_balloon0.png");
  red_balloonImage=loadImage("red_balloon0.png");
  blue_balloonImage=loadImage("blue_balloon0.png");
  green_balloonImage=loadImage("green_balloon0.png");
  arrowImage=loadImage("arrow0.png");
}

function setup() 
{
  createCanvas(600,600);
  background=createSprite(200,200,400,400);
  background.addImage(backgroundImage);
  background.scale=2.5;
  bow=createSprite(550,300,20,20);
  bow.addImage(bowImage);
  arrowGroup=createGroup();
  red_balloonGroup=createGroup();
  pink_balloonGroup=createGroup();
  blue_balloonGroup=createGroup();
  green_balloonGroup=createGroup();
}

function draw() 
{
  background.velocityX=-3
  if (background.x<60)
 {
  background.x=width/2;
 }
 
  
  bow.y=World.mouseY
  
  
  
  spawn_blueBalloon();
  spawn_redBalloon();
  spawn_pinkBalloon();
  spawn_greenBalloon();
  
   if (keyDown("space"))
 {
    var ar_row = createArrow();
    ar_row.addImage(arrowImage);
    ar_row.y=bow.y 
   createArrow();
 }
  
  
  if (arrowGroup.isTouching(red_balloonGroup)){
    arrowGroup.destroyEach();
    red_balloonGroup.destroyEach();
    score=score+1;
 }
  
  if (arrowGroup.isTouching(blue_balloonGroup)){
    arrowGroup.destroyEach();
    blue_balloonGroup.destroyEach();
    score=score+2;
 }
  
  if (arrowGroup.isTouching(pink_balloonGroup)){
    arrowGroup.destroyEach();
    pink_balloonGroup.destroyEach();
    score=score+3;
 }
  
  if (arrowGroup.isTouching(green_balloonGroup)){
    arrowGroup.destroyEach();
    green_balloonGroup.destroyEach();
    score=score+4;
 }
    
 textSize(20);
 fill(255);


  
    
  
  drawSprites();
  text("Score:"+score,450,50);
  text("Project C17",200,590);
}

function createArrow()
{
  arrow=createSprite(550,100,5,10);
  arrow.velocityX=-6;
  arrow.scale=0.3;
  arrowGroup.add(arrow);
  return arrow;

}

function spawn_blueBalloon()
{
  if (frameCount%60===0)
  {
    var blue_balloon=createSprite(15,30,40,40);
    blue_balloon.addImage(blue_balloonImage);
    blue_balloon.y=Math.round(random(30,600));
    blue_balloon.scale=0.08;
    blue_balloon.velocityX=3
    blue_balloon.lifetime=200;
    bow.depth=blue_balloon.depth;
    bow.depth=blue_balloon.depth+1;
    blue_balloonGroup.add(blue_balloon);
  }
}

function spawn_redBalloon()
{
  if (frameCount%100===0)
  {
    var red_balloon=createSprite(15,30,40,40);
    red_balloon.addImage(red_balloonImage);
    red_balloon.y=Math.round(random(30,600));
    red_balloon.scale=0.07;
    red_balloon.velocityX=3
    red_balloon.lifetime=200;
    bow.depth=red_balloon.depth;
    bow.depth=red_balloon.depth+1;
    red_balloonGroup.add(red_balloon);
  }
}

function spawn_pinkBalloon()
{
  if (frameCount%140===0)
  {
    var pink_balloon=createSprite(15,30,40,40);
    pink_balloon.addImage(pink_balloonImage);
    pink_balloon.y=Math.round(random(30,600));
    pink_balloon.velocityX=3
    pink_balloon.lifetime=200;
    bow.depth=pink_balloon.depth;
    bow.depth=pink_balloon.depth+1;
    pink_balloonGroup.add(pink_balloon);
  }
}

function spawn_greenBalloon()
{
  if (frameCount%180===0)
  {
    var green_balloon=createSprite(15,30,40,40);
    green_balloon.addImage(green_balloonImage);
    green_balloon.y=Math.round(random(30,600));
    green_balloon.scale=0.07
    green_balloon.velocityX=3
    green_balloon.lifetime=200;
    bow.depth=green_balloon.depth;
    bow.depth=green_balloon.depth+1;
    green_balloonGroup.add(green_balloon);
  }
}
