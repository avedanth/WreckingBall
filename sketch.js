const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var engine, world;
function setup(){
    createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(100,600,1800,40);
box1 = new Box(500,590,50,50);
box2 = new Box(500,560,50,50);
box3 = new Box(500,530,50,50);
box4 = new Box(500,500,50,50);
box5 = new Box(500,470,50,50);
box6 = new Box(500,440,50,50);
ball1 = new Ball(300,500,30,30);
rope = new Rope(ball1.body, { x: 450, y: 50 });
}

function draw() {
    background("yellow");
Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ball1.display();
    rope.display();
}