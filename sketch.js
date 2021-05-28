const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg()

}

function draw(){
    if(backgroundimage){
        background(backgroundimage);
    }

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson=await response.json();
    console.log(responsejson);
    console.log(responsejson.datetime); 
    var hour=responsejson.datetime.slice(11,13);
    console.log(hour);
    if(hour>=04&&hour<=06){
        bg="sunrise1.png"
    }
    else if(hour>=06&&hour<=08)
    {
        bg="sunrise2.png"
    }
    else if(hour>=023&&hour<=00)
    {
        bg="sunrise3.png"
    }
    else if(hour>=00&&hour<=03)
    {
        bg="sunrise4.png"
    }
    else
    {
        bg="sunset6.png"
    }
    backgroundimage=loadImage(bg);
}
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here


