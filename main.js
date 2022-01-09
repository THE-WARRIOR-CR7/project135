video="";
status1="";
function setup() {
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,380,380);

}
function start() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detected";
}
function modelLoaded() {
console.log("Model is Loaded");
status1=true;
}