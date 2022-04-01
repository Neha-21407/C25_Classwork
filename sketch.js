const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var towerImg, backgroundImg;
var cannon,angle;
var cannonball;
var balls = [];
var boats = [];

function preload() {
 towerImg = loadImage("./assets/tower.png");
 backgroundImg = loadImage("./assets/background.gif");
 
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode (DEGREES)
  angle = 15;
  
 options={
 isStatic:true
 }
 
 ground=Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 
 tower=Bodies.rectangle(150,350,160,310,options);
 World.add(world,tower);
 
 cannon= new Cannon (180,110,130,100,angle);

 
}

function draw() {
  //image(image,x,y,width,height )
  image(backgroundImg,0,0,width,height);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
  
  push ();
  imageMode (CENTER);
  image(towerImg,tower.position.x,tower.position.y,160,310);
  pop ();

  cannon.display();
  showBoats();

  for(var i = 0; i < balls.length; i++){
    showCannonBalls(balls[i]);
  }
}

function keyPressed(){
  if (keyCode == DOWN_ARROW){
    cannonball = new Cannonball (cannon.x, cannon.y)
    Matter.Body.setAngle(cannonball.body, cannon.angle)
    //parameters: body, angle
    cannonball.t = [];
    balls.push(cannonball);
  }
}

function keyReleased() {
  if (keyCode == DOWN_ARROW){
    //shoot the ball from the last index position
    balls[balls.length - 1].shoot();
    
  }
}

function showCannonBalls(ball){
  //if ball on a particular index exists
  if(ball){
    ball.display();
  }
}

function showBoats(){
  if(boats.length > 0){
    if(boats[boats.length - 1] === undefined || boats[boats.length - 1].body.position.x < width-300){
      var positions = [-40,-70,-20,-60];
      var rand = random(positions);
      var boat = new Boat(width, height-60, 170,170,rand);
      boats.push(boat);
    }

    for (var i = 0; i < boats.length; i++){
      if(boats[i]){
        Matter.Body.setVelocity(boats[i].body,{
          x: -0.9,y: 0
        })
        boats[i].display();
      }
    }

  }
  else{
    var boat = new Boat(width, height-60, 170,170, -60);
    boats.push(boat);
  }
}


