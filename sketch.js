
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world,object1;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  object1=Bodies.rectangle(400,100,50,50)
  console.log(object1)
  World.add(world,object1)

  object2=Bodies.circle(500,100,50)
  console.log(object2)
  World.add(world,object2)

  object3=Bodies.rectangle(600,100,50,50)
  console.log(object3)
  World.add(world,object3)
}
function draw()
{
  Engine.update(engine)
  background(0);
  rectMode(CENTER);
  fill("orange")
    rect(object1.position.x,object1.position.y,50,50);
    fill("white")
    circle(object2.position.x,object2.position.y,50)
    fill("green")
    rect(object3.position.x,object3.position.y,50,50);

}
