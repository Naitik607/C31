const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var border1;
var border2;
var border3;
var border4;

var ground;

var divisions = [];
var plinkos = [];
var particles = [];

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;
  //create Bodies here

  border1 = new Border(240,3,width,5);
  border2 = new Border(3,400,5,height);
  border3 = new Border(240,797,width+10,5);
  border4 = new Border(497,400,5,height);

  ground = new Ground(240,789,width,10);

  for(var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(j = 15; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(j = 15; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j,375));
  }

  

  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);
  if(frameCount%90 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  // display bodies here

  border1.display();
  border2.display();
  border3.display();
  border4.display();

  ground.display();

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();

  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  drawSprites();
}