class Tiro{
  constructor(x,y,r) {
    var options ={
      "restitution": 0,
      isStatic: true
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, this.r);
  }
}