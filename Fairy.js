class Fairy{
    constructor(x,y,width,height){
        var options = {
            friction: 1.0, 
            density: 0.8
                     
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    
    }
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x,pos.y,this.width,this.height);
    
    }
};