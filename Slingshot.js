class slingshot{
    constructor(bodyA, pointB){
var op ={bodyA:bodyA, pointB:pointB, stiffness: 0.01, length: 1};
this.sling= Constraint.create(op);
this.pointB=pointB
World.add(world,this.sling);

      
    }
    display(){
if (this.sling.bodyA){
line(this.sling.bodyA.position.x,this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);
      }
    }
fly(){
this.sling.bodyA=null;
    
}
  
    };
  
  