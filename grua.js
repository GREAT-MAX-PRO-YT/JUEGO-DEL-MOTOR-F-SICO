class grua {
constructor( x,y,w,h){
 this .x=x;
 this .y=y;
 this .w=w;
 this .h=h;
 this.Image =loadImage("wreckingball.jpg")
}
display (){
    imageMode (CENTER)
    image(this.Image,this.x,this.y,this.w,this.h)
}
}