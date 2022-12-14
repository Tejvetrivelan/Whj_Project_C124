mouthX = 0;
mouthY = 0;
preload()
{

}

setup()
{
    canvas = createCanvas(306, 306);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

draw()
{
    image(video, 0, 0, 306, 306);
}

function onclick()
{
}

function modelLoaded() {
    console.log('PoseNet Is Loaded');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mouthX = results[0].pose.mouth.x;
        mouthY = results[0].pose.mouth.y;
    }

}