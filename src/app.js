// Viewpoint

var testObjX, testObjY;
var vp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#fae');
    vp = new viewpoint();
    c = new creature()
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

    c.draw();
    pop();

    // Draw crosshair in middle of screen
    strokeWeight(2)
    line(width/2-5, height/2, width/2+5, height/2);
    line(width/2, height/2-5, width/2, height/2+5);
}

function clicked(xpos, ypos) {
    console.log(xpos + ", " + ypos);
    console.log(c.inHitbox(xpos, ypos));

    if (c.inHitbox(xpos, ypos)) {
        c.setColor(color(0, 255, 0));
    } else {
        c.setColor(color(255, 255, 255));
    }
}

