class Dustbin{

    constructor(x,y){
    
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,20,50,options);
        World.add(world,this.body);
    
        
    
        this.width = 20;
        this.height = 50;
    }
        display(){
            var pos = this.body.position;
    
            fill ("white");
    
            rectMode(CENTER);
            rect(pos.x,pos.y,20,50);
    
    
        }
    }