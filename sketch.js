var player, npc, enemy;
var playerImg, npcImg, enemyImg;
var enemyX, enemyY
 

function preload() {
  npcImg = loadImage('npc.png')
  enemyImg = loadImage('enemy.png')
}

function setup() {
  createCanvas(1100,850);

  enemyX = Math.round(random(500, 900));
  enemyY = Math.round(random(200, 900));

  player = createSprite(100, 100, 50, 50)
  player.shapeColor = 'red'

  enemy = createSprite(enemyX, enemyY, 50, 50)
  enemy.addImage(enemyImg)
  enemy.scale = 0.03;

  
  
  
}

function draw() {
  background(0,215,200);  
 
  
  npc1();
  enemy1();
  if (keyDown(UP_ARROW)){
    player.position.y -= 10;
  }
  if (keyDown(DOWN_ARROW)){
    player.position.y += 10;
  }
  if (keyDown(LEFT_ARROW)){
    player.position.x -= 10;
  }
  if (keyDown(RIGHT_ARROW)){
    player.position.x += 10;
  }
  
  drawSprites();
  
}


function npc1() {
  npc = createSprite(200, 200, 100, 100)
  npc.addImage(npcImg);
  npc.scale = 0.07;
}

function enemy1() {
  if (frameCount%60 == 0){
  enemyMove = Math.round(random(1, 4))
  
  if (enemyMove == 1){
    enemy.velocityY = 5;
    enemy.velocityX = 0;
  }
  if (enemyMove == 2){
    enemy.velocityY = -5;
    enemy.velocityX = 0;
  }
  if (enemyMove == 3){
    enemy.velocityY = 0;
    enemy.velocityX = 5;
  }
  if (enemyMove == 4){
    enemy.velocityY = 0;
    enemy.velocityX = -5;
  }

  if (enemy.position.x > width-50 || enemy.position.y > height - 50 || enemy.position.x < 20 || enemy.position.y < 20 ){
    enemy.position.x = Math.round(random(100, 500));
    enemy.position.y = Math.round(random(100, 500));
  }

  
  console.log(enemy.position.x)
  console.log(enemy.position.y)

}

}