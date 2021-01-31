class Circle{
     constructor(x,y){
         var options={
         isStatic: true
         }
         this.image = loadImage("Semi-cicle.png");
         this.x=x;
        this.y=y;
        this.radius=25;
         this.body=Bodies.circle(x,y,25,options);
         World.add(world,this.body);
         }  
      
         display(){
           push();
           var pos = this.body.position;
           translate(pos.x, pos.y);
          
          pop();
         }
      
 }