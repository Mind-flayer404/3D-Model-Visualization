let bone;
let img;
let angleX = -150;
let angleY = -60;
let size = 0;
let word;
let slider;

function preload()
{
    //  Loading image for texture
    img = loadImage('texture1.jpg',true);

    //  Loading 3D Model
    bone = loadModel('Shoulder_Bone.stl',true);

    //  Loading text font
    word = loadFont('inconsolata.otf');
}

function setup()
{
    createCanvas(windowWidth,windowHeight,WEBGL);
    textFont(word);
    slider = createSlider(0, 255, 150);
    slider.position(10, 100);
    slider.style('width', '200px');
}

function draw()
{
    //  Model at the center of the screen
    translate(0,0);

    //  Background color 
    let val = slider.value();
    background(val);

    textSize(25);
    if(val>150)
        fill(0,0,0);
    else
        fill(255,255,255);
    text('Scroll to Zoom In/Out',-670,-280);
    text('Press the mouse button to rotate',-670,-250);
    text('Slide to change Background color',-670,-220);

    //  Light from the top
    directionalLight(255,255,255,0,1,0);
    
    //  Comment the below line and uncomment the next line to use texture instead of color 
    fill(222,202,206);
    // texture(img);

    //  Comment the below line and uncomment the next line to add polygons/lines
    noStroke();
    // stroke(255);

    //  For rotation
    rotateX(angleX*0.01);
    rotateY(angleY*0.01);
    if(mouseIsPressed)
    {
        angleX = -mouseY;
        angleY = -mouseX;
    }
    
    scale(1 + size/100);
    model(bone);    
}

function mouseWheel(event)
{
    if(size >= -50 || event.delta > 0)
        size += event.delta/10;
}