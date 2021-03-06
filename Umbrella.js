class Umbrella {
    constructor(x,y){
        var umbrella_option = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,umbrella_option);
        this.radius = 50;
        World.add(myWorld, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}