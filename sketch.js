
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,box1,box2,box3,paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground=new Box (400,680,800,20)
box1=new Box(600,650,200,20)
box2=new Box(490,620,20,80)
box3=new Box(710,620,20,80)
paper=new Paper(100,500,20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("brown")
 ground.display()
 box1.display()
 box2.display()
 box3.display()
paper.display()
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.05,y:-0.05})
	}
}


