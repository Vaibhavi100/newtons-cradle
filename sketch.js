const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	bob1=new Bob(320,350,20)
 // rope1=new Rope(bob1,roof)
 var options={
	bodyA:bob1,
	bodyB:roof,
	pointB:{x:300,y:100},	
	length:100,
	stiffness:0.01
	//pointB:{ x:this.pointA,y:this.pointB}
}
rope1=Constraint.create(options)
World.add(world,rope1)
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
bob1.display()
line (rope1.bodyA.position.x,rope1.bodyA.position.y,rope1.bodyB.position.x,rope1.bodyB.position.y)
 //rope1.display()
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
