
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gamestate = 0
function preload()
{
Background = loadImage("Images/Background.jpg")
Ball = loadImage("Images/Ball.png")
Goal = loadImage("Images/Goal.png")
Platform = loadImage("Images/platform.jpg")
Star = loadImage("Images/Star.jpg")
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = Matter.Bodies.circle(windowWidth-50,50,10)
World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,10,10)
  drawSprites();
 
}