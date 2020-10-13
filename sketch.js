var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var BGIMG,BG; 
var Box1,Box2,Box3;
var Box1Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
    BGIMG = loadImage("firewar.png.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);    
  
    BG = createSprite(200,350);
    BG.addImage(BGIMG);
    BG.scale = 0.3;
	
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width/2, height-58, width,10);
    groundSprite.visible = false;
	groundSprite.shapeColor = color(95);
  
    Box1Sprite = createSprite(400,650,200,20);
    Box1Sprite.shapeColor = "red";
    Box2Sprite = createSprite(310,600,20,100);
    Box2Sprite.shapeColor = "red";
    Box3Sprite = createSprite(490,600,20,100);   
    Box3Sprite.shapeColor = "red";
    
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 ,200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
  
	ground = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true});
 	World.add(world, ground);
    
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x; 
  packageSprite.y = packageBody.position.y; 
  keyPressed();
  drawSprites(); 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody, false);
}
}