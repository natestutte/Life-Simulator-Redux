// Viewpoint

var testObjX, testObjY;
var vp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#fae');
    
    testObjX = width/2;
    testObjY = height/2;
    vp = new viewpoint();
}

function windowResized() {
    vp.xloc += (windowWidth - width)/2;
    vp.yloc += (windowHeight - height)/2;
    resizeCanvas(windowWidth, windowHeight);
}
  
function draw() {
    // Color setup
    background('#fae');
    stroke(0);
    strokeWeight(1);

    // Draw debug stats on topleft
    textSize(14);
    vploc = vp.getViewpointLoc();
    text(vploc.x + ", " + vploc.y, 20, 30);

    // Viewpoint
    push();
    vp.moveViewpoint();

    ellipse(testObjX, testObjY, 40, 40);
    pop();

    // Draw crosshair in middle of screen
    strokeWeight(2)
    line(width/2-5, height/2, width/2+5, height/2);
    line(width/2, height/2-5, width/2, height/2+5);
}

function clicked(xpos, ypos) {
    console.log(xpos + ", " + ypos);
}

