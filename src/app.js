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
    ellipse(testObjX, testObjY+100, 40, 60);
    pop();

    // Draw crosshair in middle of screen
    strokeWeight(2)
    line(width/2-5, height/2, width/2+5, height/2);
    line(width/2, height/2-5, width/2, height/2+5);
}
class viewpoint {

    constructor(xloc=0, yloc=0, zoom=1) {
        this.xloc = xloc;
        this.yloc = yloc;
        this.offsetX = 0;
        this.offsetY = 0;
        this.zoom = zoom;
        this.dragActive = false;
    }

    pressed() {
        this.xloc += mouseX - this.offsetX;
        this.yloc += mouseY - this.offsetY;
        this.offsetX = mouseX;
        this.offsetY = mouseY;
    }

    released() {
        this.dragActive = false;
        this.offsetX = 0;
        this.offsetY = 0;
    }

    moveViewpoint() {
        if (mouseIsPressed) {
            if (!this.dragActive) {
                this.offsetX = mouseX;
                this.offsetY = mouseY;
                this.dragActive = true;
            }
            this.pressed();
        } else {
            this.released();
        }
        translate(this.xloc, this.yloc);
    }

    getViewpointLoc() {
        return createVector(this.xloc, this.yloc);
    }
}