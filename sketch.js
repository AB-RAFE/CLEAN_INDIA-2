var ground,paper;
var dustbin1,dustbin2,dustbin3;
var engine, world, dustbin, dustbinIMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	dustbinIMG = loadImage("dustbingreen.png");
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
	world = engine.world;
	
	dustbin = createSprite(900,300-2,20,20);
	dustbin.addImage(dustbinIMG);
	dustbin.scale = 0.5;

    paper = new Paper(200,380,20);
	dustbin1 = new Dustbin(900,370,160,20);
	dustbin2 = new Dustbin(830,291,20,150);
	dustbin3 = new Dustbin(970,291,20,150);

	ground = Bodies.rectangle(width/2,390,width,25,{isStatic:true});
	World.add(world,ground);
}

function draw(){
	background("white");
	rectMode(CENTER);
	Engine.update(engine);
	fill(rgb(0,255,0))
	rect(width/2,390,width,25);
    paper.display();
	dustbin.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{
		x:70,
		y:-75
	    })
	}
}
