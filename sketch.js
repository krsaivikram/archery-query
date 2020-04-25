const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
function setup() {
  createCanvas(displayWidth,displayHeight);

  engine = Engine.create();
    world = engine.world;

  arrow1 = new Arrow(110,200,PI/2);
 string = new Bow(arrow1,{x:100,y:200});
 
}

function draw() {
  background("black");  
 
//player.display();
arrow1.display();
string.display();
}
