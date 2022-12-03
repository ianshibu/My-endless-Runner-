var play
var end
var gameState = "play"
var player,playerImg
var ground
var obstacle , obstaclesGroup , obstacleImg

function preload(){
 obstaclesGroup = new Group();
 playerImg = loadImage("GreatSage.gif")
 obstacleImg = loadImage("fireball.jpg")
}

function setup() {
 createCanvas(600, 600);
 player = createSprite(300,550,20,20);
 player.addImage("player",playerImg)
 player.scale = 0.3 ;

}

function draw() {
 background("#dedede")
 drawSprites();
 
 if(gameState === "play"){
    SpawnStuff();
   if(keyDown("left_arrow")){
    player.x = player.x - 3
   }
   if(keyDown("right_arrow")){
    player.x = player.x + 3
   }
   if(keyDown("space")){
    player.velocityY = -5 ; 
   }
   player.velocityY = player.velocityY + 0.8;

   if(obstaclesGroup.isTouching(player)){
    player.velocity = 0 ;
   }
   if(obstaclesGroup.isTouching(player)||player.y > 600){
    player.destroy()
    gameState = "end"
   }
   if(gameState==="end"){
    stroke("black");
    fill("darkcyan");
    textSize(30);
    text ("GameOver",230,250);
    }}}

    function SpawnStuff(){
   if (frameCount % 120 === 0){
   obstacle = createSprite(200,-50,50,100);
   obstacle.addImage(obstacleImg);
   obstacle.scale = 0.4
   obstacle.x = Math.round(random(120,400));
   obstacle.velocityY = 3;
   obstaclesGroup.add(obstacle)
   }
}