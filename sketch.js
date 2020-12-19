
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
  createCanvas(450,500);
  
  monkey=createSprite(250,307,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
   ground=createSprite(500,350,900,20);
  ground.velocityX=-4;
  
FoodGroup=new Group();
 obstacleGroup=new Group();
  
    
}


function draw() {
  background("180");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score,500,50);
  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime :" + survivalTime,100,50);
  
 
  if(ground.x<0){  
     ground.x=ground.width/2
    }
  
  if(keyDown("space")&& monkey.y>=100){
    monkey.velocityY=-12;
   
  }
 monkey.velocityY = monkey.velocityY + 0.8 
  
  monkey.collide(ground);

  foods()
   obstacles()
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
  }
    
        
     
  
drawSprites();  
}

function foods(){
  if(frameCount%80===0){
    var Foods=createSprite(300,random(120,200),10,10);
     Foods.addImage(bananaImage);
    Foods.velocityX=-3;
    FoodGroup.add(Foods);
    Foods.lifetime=170;
    Foods.scale=0.1;
  }
}

function obstacles(){
  if(frameCount%300===0){
    var obstacle=createSprite(random(250,300),320,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    obstacleGroup.add(obstacle);
    obstacle.lifetime=270;
    obstacle.scale=0.1;
    
  }
}






