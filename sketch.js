var bg
var tom,jerry,tomImg,jerryImg

function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    tomImg=loadImage("images/cat1.png")
    jerryImg=loadImage("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addImage("tom",tomImg);
    tom.scale=0.2;

    jerry=createSprite(200,600);
    jerry.addImage("jerry",jerryImg);
    jerry.scale=0.2;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
