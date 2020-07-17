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
      this.slingOne = loadImage("sprites/sling1.png")
      this.slingTwo = loadImage("sprites/sling2.png")
      this.slingThree = loadImage("sprites/sling3.png")

      World.add(world,this.slingshot);
   }
   display(){
       image(this.slingOne,210,20);
       image(this.slingTwo,180,20);
      
       if(this.slingshot.bodyA!=null){
        var pointA = this.slingshot.bodyA.position;
       
        push();
        stroke(48,22,8);    
        if(pointA.x<220){
            strokeWeight(7);
      
            line(pointA.x-25,pointA.y,this.pointB.x-10,this.pointB.y);
            line(pointA.x-25,pointA.y,this.pointB.x+30,this.pointB.y-3);
    
            image(this.slingThree,pointA.x-30,pointA.y-10,15,30);

        }
        else{
            strokeWeight(7);
      
            line(pointA.x+25,pointA.y,this.pointB.x-10,this.pointB.y);
            line(pointA.x+25,pointA.y,this.pointB.x+30,this.pointB.y-3);
    
            image(this.slingThree,pointA.x+30,pointA.y-10,15,30);
        }

      
        pop();
       }
      
   }
   fly(){
       this.slingshot.bodyA=null;
   }

   attach(bodyA){
       this.slingshot.bodyA = bodyA;
   }
}

