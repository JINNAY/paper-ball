const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(740,310,20,200);
    platform = new Ground(800, 400, 100, 20);
    ground2 = new Ground(840,310,20,200);
   

    bird = new Bird(100,100);

   // log6 = new Log(230,180,80, PI/2);
    slingShot = new Sling(bird.body,{x:200,y:200});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    bird.display();
    platform.display();
    ground2.display();
    //log6.display();
    slingShot.display();    
}

function mouseDragged(){

    Matter.Body.setPosition(bird.body,{x: mouseX,y: mouseY});

}

function mouseReleased (){

slingShot.fly();

}