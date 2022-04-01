class Boat {
    constructor (x,y,width,height,boatPos){
        this.body = Bodies.rectangle(x,y,width,height) 
        this.width = width
        this.height = height
        this.boatPos = boatPos

        this.img = loadImage ("assets/boat.png")
        World.add (world,this.body)
    }
    display(){
        var angle = this.body.angle
        var pos = this.body.position

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img,0,this.boatPos,this.width,this.height)
        pop();
    }
}