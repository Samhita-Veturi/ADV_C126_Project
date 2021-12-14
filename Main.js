Shake_It_Off = "";
Left_X = "";
Left_Y = "";
Right_X = "";
Right_Y = "";
Left_Score = 0;
Right_Score = 0;
Song_Left = "";
Song_Right = "";
ZAYN = "";
function Pause(){
    Shake_It_Off.pause();
    ZAYN.pause();
}
function preload(){
    Shake_It_Off = loadSound('zayn-malik_one-direction-one-thing-mp3.mp3');
    ZAYN = loadSound('ZAYN, Taylor Swift - I Don’t Wanna Live Forever (Fifty Shades Darker) copy.mp3');
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
        Left_Score = results[0].pose.keypoints[9].score;
        console.log("Left wrist X: " + Left_X + " Left wrist Y: " + Left_Y);
        
        Right_X = results[0].pose.rightWrist.x;
        Right_Y = results[0].pose.rightWrist.y;
        Right_Score = results[0].pose.keypoints[10].score;
        console.log("Right wrist X: " + Right_X + " Right wrist Y: " + Right_Y);
    }
}
function draw(){
    image(Video, 0, 0, 700, 500);
    fill("#763dfc");
    stroke("#763dfc");
    Song_Left = Shake_It_Off.isPlaying();
    Song_Right = ZAYN.isPlaying()
    if(Left_Score > 0.2){
        circle(Left_X, Left_Y, 25);
        ZAYN.stop();
        if(Song_Left == false){
            Shake_It_Off.play();
            document.getElementById("Name").innerHTML = "Name of song: One Thing";
            document.getElementById("Artist").innerHTML = "Artist: One Direction";
        }
    }
    if(Right_Score > 0.2){
         circle(Right_X, Right_Y, 25);
        Shake_It_Off.stop();
        if(Song_Right == false){
            ZAYN.play();
            document.getElementById("Name").innerHTML = "Name of song: I Don't Wanna Live Forever";
            document.getElementById("Artist").innerHTML = "Artist: ZAYN, Taylor Swift";
        }
    }
}