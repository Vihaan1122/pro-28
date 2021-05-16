class launcher
{
    constructor(bodyA,pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1.0
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain); 
    }

    fly()
    {
     this.chain.bodyA=null
    }
    attach(body)
    {
      this.chain.bodyA=body;
    }

    display(){
        if(this.chain.bodyA){
        var pointA=this.bodyA.position
        var pointB=this.pointB
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}