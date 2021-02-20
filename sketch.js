const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var engine,world;
var fairy;
var star;


function setup() {
  createCanvas(400,400);
  createEdgeSprites()  
  engine = Engine.create();
  world = engine.world; 
  fairy = new Fairy(200,300,50,50);
  star = new Star(220,100,50,100);
  
}

function draw() {
  background("cyan");  
  Engine.update(engine);
  if(keyDown(LEFT_ARROW)){
    fairy.x = fairy.x - 5;
  }
  if(keyDown(RIGHT_ARROW)){
    fairy.x = fairy.x + 5;
  }
  if(keyDown(DOWN_ARROW)){
    star.isStatic = false; 
  }
  if(fairy.isTouching(star)){
    star.isStatic = true;
  }
  fairy.display()
  star.display()
}