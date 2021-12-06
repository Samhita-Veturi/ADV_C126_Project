Shake_It_Off = "";
function Play(){
    Shake_It_Off.play();
}
function Pause(){
    Shake_It_Off.pause();
}
function preload(){
    Shake_It_Off = loadSound('Shake.mp3');
}
function setup(){
    Canvas = createCanvas(700, 500);
    Canvas.position(375, 200);
    Video = createCapture(VIDEO);
    Video.hide();
}
function draw(){
    image(Video, 0, 0, 700, 500);
}