class Bob {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      
      x=x;
      y=y;
      radius=radius;
      this.body = Bodies.circle(x, y, 20, options);
     World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
     
      var angle = this.body.angle;
     push();
      translate(pos.x,pos.y)
      
      ellipesMode(RADIUS)
      fill("pink");
      ellipes(0,0,50,50)
      pop();
    }
  };
  