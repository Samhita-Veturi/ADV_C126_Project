Shake_It_Off = "";
Left_X = "";
Left_Y = "";
Right_X = "";
Right_Y = "";
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

    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model Initialized!")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        Left_X = results[0].pose.leftWrist.x;
        Left_Y = results[0].pose.leftWrist.y;
        console.log("Left wrist X: " + Left_X + " Left wrist Y: " + Left_Y);
        
        Right_X = results[0].pose.rightWrist.x;
        Right_Y = results[0].pose.rightWrist.y;
        console.log("Right wrist X: " + Right_X + " Right wrist Y: " + Right_Y);
    }
}
function draw(){
    image(Video, 0, 0, 700, 500);
}