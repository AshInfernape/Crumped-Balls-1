class Paper{
    constructor(x , y , r)
    {
        var options = {
            density : 1.2,
            friction : 0.5,
            restitution : 0.3,
            isStatic : false
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x , this.y , this.r/2 , options)
        World.add(world , this.body);
    }
    display(){

        var paperpos = this.body.position;

        push()
        translate(paperpos.x , paperpos.y);
        ellipseMode(RADIUS)
        strokeWeight(3);
        fill("#76e31b");
        ellipse(0,0,this.r);
        pop()
        
                   
    }
}