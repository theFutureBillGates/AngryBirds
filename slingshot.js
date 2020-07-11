class Slingshot{
   constructor(body1,point2){
       var options ={
           bodyA:body1,
           pointB:point2,
           stiffness:0.04,
           length:10
       }
      this.slingshot = Constraint.create(options);
      this.pointB = point2;
      World.add(world,this.slingshot);
   }
   display(){
       if(this.slingshot.bodyA!=null){
        var pointA = this.slingshot.bodyA.position;
       
        
        line(pointA.x,pointA.y,this.pointB.x,this.pointB.y);
        
       }
      
   }
   fly(){
       this.slingshot.bodyA=null;
   }
}