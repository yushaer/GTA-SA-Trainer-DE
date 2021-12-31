///<reference path=".config/sa.d.ts" />
var player =new Player(0);

while (true) {
    
    wait(0);
    var char = player.getChar();
    Pad.SetPlayerJumpButton(player,false);
    //char.setVelocity(15,100,0)
    if(Pad.IsKeyPressed(32)&&!char.isInAir()){
        
        var jumpfac=1;
        
        while(Pad.IsKeyPressed(32)){
            wait(0)
            if(jumpfac<=1000){
                jumpfac+=5;
            }
        }
        
        var vspeed=0;
             
        // if(Pad.IsKeyPressed(87)){
        //     vspeed=100
        // }
        var angle= ((char.getHeading()*Math.PI)/180)
   
        char.setVelocity(0,0,jumpfac);
        wait(20);

          log("angle" + Math.sin(angle))
          
        var hspeed=Math.sin(angle)*30;
        var vspeed=Math.cos(angle)*30;
        log("hspeed"+ vspeed+ ", vspeed"+ vspeed)

        char.setVelocity(-hspeed,vspeed,jumpfac);
        wait(200)

    }
    if(char.isInAir() &&Pad.IsKeyPressed(17)){
        var speed =45;
   
        var decenspeed=-1
        if(Pad.IsKeyPressed(65)){
           
            char.setHeading(char.getHeading()+1)
           
            
        }
        else if(Pad.IsKeyPressed(68)){
            char.setHeading(char.getHeading()-1)

        }
        else if(Pad.IsKeyPressed(87)){
            decenspeed-=1;
        }
        var angle= ((char.getHeading()*Math.PI)/180)
     
        log("angle" + Math.sin(angle))
        var hspeed=Math.sin(angle)*speed;
        var vspeed=Math.cos(angle)*speed;
        log("hspeed"+ vspeed+ ", vspeed"+ vspeed)

        char.setVelocity(-hspeed,vspeed,decenspeed);
    }


    player.getChar().setProofs(false,false,false,true,false);
    
}