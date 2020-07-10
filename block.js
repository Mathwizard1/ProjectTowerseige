class Block{
    constructor(x, y,width,height) {
        this.body = Bodies.rectangle(x, y, width, height,{restitution:0.25,friction:0.75,density:1.75});
        this.width = width;
        this.height = height;
        this.image = loadImage("wood2.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}