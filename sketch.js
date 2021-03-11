var open, closed, ic, io, gO, gOs;


function preload(){
   ic = loadImage("image_closed.png");
   io = loadImage("image_open.png");
}

function setup(){
    createCanvas(600, 600);

    open = createSprite(200, 200);
    open.addImage(io);
}
function draw(){
    drawSprites();
}
