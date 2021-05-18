class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
        this.rank=0;

    }
    getCount(){
        var playerCountRef= database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount= data.val();
        }) 
    } 
    updateCount(count){
        database.ref('/').update({
          playerCount:count 
        })
    }   

    update()
    {
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name, 
            distance :this.distance,
            rank:this.rank
        })
    }
    static getPlayersInfo(){
        var PlayersInfoRef= database.ref('players');
        PlayersInfoRef.on("value",(data)=>{
            allPlayers= data.val();
            
        }) 
    }
    getCarsAtEnd(){
        var CarsAtEndref= database.ref('carsAtEnd');
        CarsAtEndref.on("value", (data)=>{
        this.rank= data.val();
        }) 
    } 
    static updateCarsAtEnd(rank){
        database.ref('/').update({
            carsAtEnd:rank
        })
    }
}