class Umbrella{
   constructor(x,y){
       var options={
          isStatic: true
       }
       
       this.image = loadImage("walking_1.png");
       this.x=x;
       this.y=y;
       this.radius=90;
       this.body=Bodies.circle(x,y, this.radius,options);
       World.add(world,this.body);
   }  
   display(){
     push()
     fill(255);
     var pos = this.body.position;
     //translate(pos.x, pos.y);
     //ellipseMode(RADIUS);
     //ellipse(this.x,this.y,this.radius,this.radius);
     imageMode(CENTER);
     //image(this.image,pos.x,pos.y+70,300,300);
     image(this.image, pos.x,pos.y, 250, 250);
    this.visibility=0;
     pop()
  }
}

  /*constructor(x,y){
        var options={
            isStatic:true

        }
        this.x=x;
        this.y=y;
        this.r=60;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        
        World.add(world, this.body);
    }

    display()
    {
        var paperpos=this.body.position;
        
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r,this.r);
        //ellipse(CENTER);
        pop()
    }
}*/