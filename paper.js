class Paper{

    constructor(x,y,radius){

        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
    

        
        World.add(world, this.body);}


        display(){
            var pos = this.body.position;
    
            fill ("green");
    
            ellipseMode(CENTER);
            ellipse(pos.x,pos.y,40);
    
    
        }

            
   


}