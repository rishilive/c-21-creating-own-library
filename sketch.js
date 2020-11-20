var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  

gameObject1=createSprite(200,400,60,60);
gameObject1.shapeColor="green"

gameObject2=createSprite(400,400,60,60);
gameObject2.shapeColor="green"
gameObject2.velocityY = +5;

gameObject3=createSprite(300,600,60,60);
gameObject3.shapeColor="green"

gameObject4=createSprite(800,600,60,60);
gameObject4.shapeColor="green"

}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,gameObject2);

  drawSprites();
}





