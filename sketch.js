var fairy1;
var fairy2;

function preload(){
  f=loadAnimation("fairy1.png","fairy2.png");
  b=loadImage("Gunja.png");
  sound1=loadSound("Recording.m4a");
  g=loadImage("g.jpg");
}
function setup(){
  createCanvas(500,480);
  fairy=createSprite(100,250,50,50);
  fairy.addAnimation("fairy",f);
  fairy.scale=0.20;
  
  gunja=createSprite(220,350,50,50);
  gunja.addImage("gunja",g);
  gunja.scale=0.1;
  
  i=createSprite(250,0,800,25);
  i.shapeColor = rgb(251,13,124);
  
  j=createSprite(0,250,25,800);
  j.shapeColor = rgb(251,13,124);
  
  k=createSprite(500,250,25,800);
  k.shapeColor = rgb(251,13,124);
  
  l=createSprite(250,480,800,25);
  l.shapeColor = rgb(251,13,124);
  
  m=createSprite(220,285,95,5);
  m.shapeColor = rgb(251,13,124);
  
  n=createSprite(220,415,100,5);
  n.shapeColor = rgb(251,13,124);
  
  o=createSprite(175,350,5,130);
  o.shapeColor = rgb(251,13,124);
  
  p=createSprite(268,350,5,130);
  p.shapeColor = rgb(251,13,124);
  
  back=createSprite(250,250,50,50);
  back.addImage("back",b);
  //back.scale=0.20;
}
function draw(){
  background("pink");
  sound1.play();
  drawSprites();
}













