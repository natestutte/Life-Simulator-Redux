class viewpoint {

    constructor(xloc=0, yloc=0, zoom=1) {
        this.xloc = xloc;
        this.yloc = yloc;
        this.offsetX = 0;
        this.offsetY = 0;
        this.zoom = zoom;
        this.dragActive = false;
        this.clickedPossibility = false;
    }

    pressed() {
        if (mouseX - this.offsetX != 0 || mouseY - this.offsetY != 0)
            this.clickedPossibility = false;
        this.xloc += mouseX - this.offsetX;
        this.yloc += mouseY - this.offsetY;
        this.offsetX = mouseX;
        this.offsetY = mouseY;
    }

    released() {
        this.dragActive = false;
        this.offsetX = 0;
        this.offsetY = 0;
        if (this.clickedPossibility)
            clicked(mouseX - this.xloc, mouseY - this.yloc);
        this.clickedPossibility = false
    }

    moveViewpoint() {
        if (mouseIsPressed) {
            if (!this.dragActive) {
                this.offsetX = mouseX;
                this.offsetY = mouseY;
                this.clickedPossibility = true
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