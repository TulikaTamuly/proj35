//Create variables here
var dog
var foodS=20
var count
function preload()
{
  //load images here
  DogImage=loadImage("images/dogImg.png")
  DogHappyImage=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
  
	createCanvas(800, 700);
  dog=createSprite(400,600)
  dog.addImage(DogImage)
  dog.scale=0.3
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)

}


function draw() {  
  console.log(frameCount)
  background("yellowgreen")
  if(keyWentDown(UP_ARROW)){
   
    dog.addImage(DogHappyImage)
    writeStock(foodS)
    
  }
  
  fill("darkgreen")
  textSize(30)
  text("Press up arrow to feed Tommy",200,200)
  text("Food:"+foodS,350,400)
  drawSprites();
  //add styles here
  if(foodS<20){
    dog.addImage(DogHappyImage)
  }
}
function readStock(data){
  foodS=data.val()
 
}
function showError(){
  console.log("error in writing the database")
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
 
  database.ref('/').update(
    {Food:x}
  )
}



