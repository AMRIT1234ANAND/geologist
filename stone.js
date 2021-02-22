class Stone{
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':5.0
      }
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
   
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      rectMode(CENTER);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      
    }
  };
  