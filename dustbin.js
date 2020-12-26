class Dustbin{
    constructor(x,y,width,height) {
        var dustbin_option ={
            isStatic:true
        }
        this.body1 = Bodies.rectangle(x,y,width,height,dustbin_option);
        this.image = loadImage("dustbingreen.png");
        this.body1.width = width;
        this.body1.height = height;
        World.add(world,this.body1);
    }
    display() {
        fill(rgb(255,0,0));
        rect(this.body1.position.x,this.body1.position.y,this.body1.width,this.body1.height);
    }
}