objects=[];
status1="";
function setup() {
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();

}
function draw() {
    image(video,0,0,380,380);
if (status1!="") {
    objectDetector.detect(video,gotResult);
    for(i= 0; i<objects.length;i++) {
        document.getElementById("status").innerHTML="status:object detected";
        percent=floor(objects[i].confidence*100);
        fill("#ff0000");
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("#ff0000")
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
if (objects[i].label==object_name) {
    video.stop();
    objectDetector.detect(gotResult);
    document.getElementById("number_objects").innerHTML=object_name+" found";
}
else {
    document.getElementById("number_objects").innerHTML=object_name+" not found";
}
    }
}
}
function gotResult(error,results) {
     if (error) {
         console.log(error);
     } else {
         console.log(results);
         objects=results;
     }
}
function start() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";
    object_name=document.getElementById("input1").value;
}
function modelLoaded() {
console.log("Model is Loaded");
status1=true;
}