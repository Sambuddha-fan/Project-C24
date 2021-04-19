const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    rubber = new Rubber(200,200,25)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Iron1 = new Iron(200,200,50,50);
    stone = new Stone(300,300,60,60)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    stone.display()
    Iron1.display()
    rubber.display()          
    plane.display();    
    hammer.display();

    
 
}