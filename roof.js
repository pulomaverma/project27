class Roof{
    constructor(x,y,w,h){
        var options ={
            isStatic: true
        }
    x=x;
    y=y;
    w=w;
    h=h;

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
   this.width=w;
   this.height=h; 
}
display(){
Push();
    fill("yellow")
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
}


} 