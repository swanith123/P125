noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0; 
difference = 0;

function setup(){
    canvas = createCanvas(700, 500);
    canvas.position(1000, 250);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(300, 250);
    poseNetModel = ml5.poseNet(video, modelLoaded);
    poseNetModel.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Model is completely initialized.")
}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
}
}

function draw(){
    background("red")
    document.getElementById("textSize2").innerHTML = difference + " pixels";
    fill("orange");
    stroke("red");
    text('Hello', 50, 400);
    textSize(difference);
}