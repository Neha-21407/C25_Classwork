class Cannonball {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        //this = used as a variable creator
        this.r = 30
        this.body = Bodies.circle(x, y, this.r, options)
        this.img = loadImage("./assets/cannonball.png")
        World.add(world, this.body);
        this.t = [];
    }


    shoot() {
        var newAngle = cannon.angle - 28;
        newAngle = newAngle * (3.14 / 180);
        var velocity = p5.Vector.fromAngle(newAngle);
        //Vector comes from p5 library and represents x and y axis, includes magnitude and direction
        //(you must tell how much power and which direction in must go in)
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
            x: velocity.x * (180 / 3.14),
            y: velocity.y * (180 / 3.14)
        })
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.img, pos.x, pos.y, this.r, this.r);
        pop();

        if(this.body.velocity.x > 0 && pos.x > 50){
            var position = [pos.x, pos.y];
            this.t.push(position);
        }
        

        
        for (var i = 0; i < this.t.length; i++){
            image(this.img,this.t[i][0], this.t[i][1],5,5);
        }
    }
}