class Plane{
    constructor(x, y,width,height) {
      
      this.body = Bodies.rectangle(x, y, this.width,this.height);
      this.width = width;
      this.height =height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      push();
      
      rotate(angle);
      strokeWeight(3);
     
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  