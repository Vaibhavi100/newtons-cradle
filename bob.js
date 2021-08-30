class Bob{
    constructor(x,y,r){
        var options={
            restitution:1,
            friction:0.1,
            density:0.8,
    
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        fill ("yellow")
        strokeWeight(3)
        stroke("red")
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}