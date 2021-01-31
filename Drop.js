class Drop{
  constructor(x,y){
     var options={
     isStatic : false,
     friction: 1,
     restitution: 0.001
     }
      this.body=Bodies.rectangle(x,y,10,10,options);
      this.radius = 5;
      World.add(world, this.body);
  }

  update(){ 
      if(this.body.position.y>height){
          Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
      }
  }

  display(){
      
      var pos = this.body.position; 
      fill(0,102,204);
      push()
      //translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,5,5);
      pop()

  }

   showDrop(){
       fill("lightblue");
      ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y, this.radius,this.radius);   
    }

}