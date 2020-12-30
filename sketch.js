//Creating sword,fruits and gamestate:-

var PLAY = 1 ;
var END  = 0 ;
var gameState = 1;
var fruit1,fruit2,fruit3,fruit4;
var sword;
var alien;
var fruitGroup,enemyGroup;

function preload(){
 
//Loading different images  
  
  swordImage = loadImage("sword.png");
  
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  
  alienImage = loadImage("alien2.png");
  
  gameoverImage = loadImage("gameover.png");
}

function setup(){
  
//creating canvas  
  createCanvas(600,600);
 
//creating sword  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
//creating score  
  score=0;
  
//Creating groups  
  fruitGroup=createGroup();
  alienGroup=createGroup();
  
}

function draw(){
  
//Giving background a colour  
 background("azure");
  
// Creating the main part of game
  if(gameState===PLAY){
  fruits();
  aliens();  
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2;
  }  else if(alienGroup.isTouching(sword)){
    gameState=END;
    fruitGroup.destroyEach();
    alienGroup.destroyEach();
    fruitGroup.velocityX=0;
    alienGroup.velocityX=0;
    sword.addImage(gameoverImage);
    sword.scale=2;
    sword.x=900;
    sword.y=800;
  }
    
//Moving the sword by mouse    
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  
  }
  
//Creating score and giving it colour
fill("black");  
text("SCORE:"+score,500,30);  
  
//Displaying sprites  
drawSprites();
  
}

function fruits(){
  
  // Creating fruits
  
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1Image);
    }else if(r == 2){
      fruit.addImage(fruit2Image);
    }else if(r == 3 ){
      fruit.addImage(fruit3Image);
    }else{
      fruit.addImage(fruit4Image);
    }
    
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}


function aliens(){
  
//Creating enemies  
  
  if(World.frameCount%200===0){
    alien=createSprite(400,200,20,20);
    alien.addAnimation("moving",alienImage);
    alien.y=Math.round(random(100,300));
    alien.velocityX=-8;
    alien.setLifetime=50;
    alienGroup.add(alien);
    
  }
}




