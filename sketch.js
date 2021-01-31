const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const World = Matter.World;


var rand;
var umbrella;
var thunder1,thunder2,thunder3,thunder4;
var thunder1Img, thunder2Img, thunder3Img, thunder4Img;
var drops = [];
var maxDrops = 100;
var thunderCreatedFrame;
var engine;
var world;
var frameCount;
var thunder;
var circle, cirlceImg;


function preload(){
    thunder1Img = loadImage("1.png");
    thunder2Img = loadImage("2.png");
    thunder3Img = loadImage("3.png");
    thunder4Img = loadImage("4.png");
    //circleImg = loadImage("Semi-cicle.png");
    
}

function setup(){
    createCanvas(450,800); 
    engine = Engine.create();
    world = engine.world;


    //circle = new Circle(400,700);
    //circle.scale=0.1;

    umbrella = new Umbrella(200,700);
    umbrella.scale=3;

    // ground = new Ground(600,800,1200,20);

    if(frameCount%150===0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }
}



function draw(){
    Engine.update(engine);
    background(0);
    rectMode(CENTER);
    fill("lightblue");


    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1Img);
            break;
            case 2: thunder.addImage(thunder2Img);
            break;
            case 3: thunder.addImage(thunder3Img);
            break;
            case 4: thunder.addImage(thunder4Img);
            break;
            default:break;

        }
        //thunder.scale(random(0.3,0.6));
    }
    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();
    for(var i = 0; i<maxDrops; i++){
            drops[i].display();
            drops[i].update();
        
        
    }

    //circle.display();
    drawSprites();
}

