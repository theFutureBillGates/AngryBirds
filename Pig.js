class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

    this.visibility = 255;
  }

  display(){
    var pigSpeed = this.body.speed;

    if(pigSpeed<3){
      super.display()
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.x,this.body.y,50,50);
      pop();
    }
  }
};