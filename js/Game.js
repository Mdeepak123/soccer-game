class Game{

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val
                player.getCount();
            }
            form = new Form();
            form.display();
        }

        form = new Form();
        form.display();

        r1 = createSprite(displayWidth/2-100, displayHeight/2-200);
        r1.addImage("player",redPlayer1);
        
        r2 = createSprite(displayWidth/2+100, displayHeight/2-200);
        r2.addImage("player",redPlayer2);
        
        b1 = createSprite(displayWidth/2-100, displayHeight/2+200);
        b1.addImage("player",bluePlayer1);

        b2 = createSprite(displayWidth/2+100, displayHeight/2+200);
        b2.addImage("player",bluePlayer2);
    }

    play(){
        form.hide();
        background(backgroundImg2);
    }





}