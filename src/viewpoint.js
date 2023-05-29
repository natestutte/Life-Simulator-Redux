class viewpoint {

    constructor(xLoc=0, yLoc=0, zoom=1) {
        this.xLoc = xLoc;
        this.yLoc = yLoc;
        this.relativeXLoc = 0;
        this.relativeYLoc = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.zoom = zoom;
        this.dragActive = false;
        this.clickedPossibility = false;
    }

    pressed() {
        if (mouseX - this.offsetX !== 0 || mouseY - this.offsetY !== 0)
            this.clickedPossibility = false;
        this.xLoc += (mouseX - this.offsetX) / this.zoom;
        this.yLoc += (mouseY - this.offsetY) / this.zoom;
        this.relativeXLoc -= (mouseX - this.offsetX) / this.zoom;
        this.relativeYLoc += (mouseY - this.offsetY) / this.zoom;
        this.offsetX = mouseX;
        this.offsetY = mouseY;
    }

    released() {
        this.dragActive = false;
        this.offsetX = 0;
        this.offsetY = 0;
        if (this.clickedPossibility)
            clicked(mouseX - this.xLoc, mouseY - this.yLoc);
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
        translate(width / 2, height / 2);
        scale(this.zoom);
        translate(-width / 2, -height / 2);

        translate(this.xLoc, this.yLoc);
    }

    getViewpointLoc() {
        return createVector(this.xLoc, this.yLoc);
    }

    getRelativeViewpointLoc() {
        return createVector(this.relativeXLoc, this.relativeYLoc);
    }

    getRelativeMousePosition() {
        const mouseXRelativeToView = ((mouseX - width / 2) / this.zoom) + this.relativeXLoc;
        const mouseYRelativeToView = ((mouseY - height / 2) / this.zoom) - this.relativeYLoc;
        return createVector(mouseXRelativeToView, mouseYRelativeToView);
    }

    getZoom() {
        return this.zoom;
    }

    setZoom(delta) {
        if (delta > 0) {
            this.zoom += 0.05;
        } else if (delta < 0) {
            this.zoom -= 0.05;
        }

        if (this.zoom > 5.0) {
            this.zoom = 5.0;
        } else if (this.zoom < 0.5) {
            this.zoom = 0.5;
        }
        console.log(this.zoom);
    }
}