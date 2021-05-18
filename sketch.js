//var ball;
var database; //position;
var gameState=0;
var playerCount=0;
var game,player,form;
var allPlayers;
var car1,car2,car3,car4,cars;
var car1IMG,car2IMG,car3IMG,car4IMG, trackIMG, groundIMG;

function preload()
{
    car1IMG=loadImage("images/car1.png")
    car2IMG=loadImage("images/car2.png")
    car3IMG=loadImage("images/car3.png")
    car4IMG=loadImage("images/car4.png")
    trackIMG=loadImage("images/track.jpg")
    groundIMG=loadImage("images/ground.png")
    
}
function setup(){
    createCanvas(displayWidth-30,displayHeight-20);
    database=firebase.database();
    game= new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4)
    {
        game.update(1)
    }
    if(gameState===1)
    {
        clear();
        game.play();
    }
    if(gameState===2)
    {
        game.end();
        drawSprites();
    }
}