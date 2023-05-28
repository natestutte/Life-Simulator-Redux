// Viewpoint

var testObjX, testObjY;
var vp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#fae');
    vp = new viewpoint(windowWidth/2, windowHeight/2);
    c1 = new creature()
    c2 = new creature(150, 150)
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

    // Viewpoint
    push();
    vp.moveViewpoint();

    c1.draw();
    c2.draw();
    pop();

    // Draw debug stats on topleft
    textSize(14);
    vploc = vp.getRelativeViewpointLoc();
    text(Math.floor(vploc.x) + ", " + Math.floor(vploc.y), 20, 30);

    // Draw crosshair in middle of screen
    strokeWeight(2)
    line(width/2-5, height/2, width/2+5, height/2);
    line(width/2, height/2-5, width/2, height/2+5);
}

function clicked(xpos, ypos) {
    vpmloc = vp.getRelativeMousePosition();

    if (c1.inHitbox(vpmloc.x, vpmloc.y)) {
        c1.setColor(color(0, 0, 255));
    } else {
        c1.setColor(color(255, 255, 255));
    } if (c2.inHitbox(vpmloc.x, vpmloc.y)) {
        c2.setColor(color(0, 255, 0));
    } else {
        c2.setColor(color(255, 255, 255));
    }
}

function mouseWheel(event) {
    vp.setZoom(event.delta);
}

