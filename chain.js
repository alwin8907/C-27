class chain{
    constructor(bodya,bodyb){
        var options ={
            bodyA:bodya,bodyB:bodyb,stiffness:0.4,length:10
        }
        this.chain1=Constraint.create(options)
        World.add(world,this.chain1)
    }
    display(){
        var pointa =this.chain1.bodyA.position
        var pointb=this.chain1.bodyB.position
        line(pointa.x,pointa.y,pointb.x,pointb.y)
    }
}