class Iron {
    constructor(x,y,width,height) {
      var options = {
          restituition:0.8,
          friction:3,
          density:30
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
        push()
      var pos =this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  };