class Game{
    constructor(){}

getState(){
    var gameStateRef= database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState= data.val();
    }) 

}
update(state){
    database.ref('/').update({
      gameState:state  
    })
}
start()
{
if (gameState===0)
{
    player=new Player();
    player.getCount();
    form=new Form();
    form.display();
}
car1=createSprite(100,200)
car1.addImage(car1IMG)
car2=createSprite(300,200)
car2.addImage(car2IMG)
car3=createSprite(500,200)
car3.addImage(car3IMG)
car4=createSprite(700,200)
car4.addImage(car4IMG)
cars=[car1,car2,car3,car4]
}

play()
{
    form.hide();

   Player.getPlayersInfo();
   player.getCarsAtEnd()
   console.log(player.rank)
    if(allPlayers !== undefined)
    {
        background(groundIMG)
        image(trackIMG,0,-displayHeight*4,displayWidth,displayHeight*5)
    
        var x1=175;
        for (var plr in allPlayers){
            x1+=220;
            text(allPlayers[plr].name,x1, allPlayers[plr].distance-60)        
        }

        var index=0;
        var x=175;
        var y=0;
        var name_pos=130
        for(var plr in allPlayers){
            index=index+1;
            x+=220;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            if(index===player.index)
            {
                cars[index-1].shapeColor="blue";
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;
                fill("orange");
                textSize(14)
                //text(player.name,cars[index-1].x,cars[index-1].y-60)
            }
        }

       
    }
    if(keyIsDown(UP_ARROW)&&player.index !==null)
    {
        player.distance+=50;
        player.update();
    }
    if(player.distance>3860)
    {
        gameState=2
        player.rank+=1
        Player.updateCarsAtEnd(player.rank)
        textSize(35)
        stroke("black")
        fill("white")
        text("YOUR RANK: "+player.rank,width/2,camera.position.y-150)
    }
    drawSprites();
}

end(){
    Player.getPlayersInfo()
   // background(groundIMG)
    //image(trackIMG,0,-displayHeight*4,displayWidth,displayHeight*5)
    car1.y=allPlayers[player1].distance    
    car2.y=allPlayers[player2].distance    
    car3.y=allPlayers[player3].distance    
    car4.y=allPlayers[player4].distance  
    drawSprites();  
    
    fill(0)
    strokeWeight(3)
    stroke(255)
    text(allPlayers[player1].name+": "+allPlayers[player1].rank,width/2,camera.position.y-150)
    text(allPlayers[player2].name+": "+allPlayers[player2].rank,width/2,camera.position.y-170)
    text(allPlayers[player3].name+": "+allPlayers[player3].rank,width/2,camera.position.y-190)
    text(allPlayers[player4].name+": "+allPlayers[player4].rank,width/2,camera.position.y-210)
}
}
