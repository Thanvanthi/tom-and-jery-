var cat,mouse

function preload() {

    gardenimage = loadImage("images/garden.png")
    catimage = loadImage("images/cat1.png")
    mouseimage1 = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png")
    catimage1 = loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png")
    mouseimage = loadImage("images/mouse1.png")
}

function setup(){
    createCanvas(600,500);

    garden = createSprite(300,250,600,500)
    garden.addImage(gardenimage)
    
    cat = createSprite(520,400,50,50);
    cat.shapeColor = "red";
    cat.addImage(catimage);
    cat.scale = 0.1;
    
    mouse = createSprite(200,400,50,50)
    mouse.shapeColor = "blue"
    mouse.addImage(mouseimage)
    mouse.scale = 0.1
}

function draw() {

    background("white");

    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catimage1);
      cat.changeAnimation("catRunning")
  }


}
