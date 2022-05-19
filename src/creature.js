class creature {

    constructor(xloc=0, yloc=0, size=40) {
        this.pos = createVector(xloc, yloc);
        this.size = size;
        this.color = color(255, 255, 255)
    }

    getPosition() {
        return this.pos
    }

    draw() {
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }

    inHitbox(xloc, yloc) {
        return (this.pos.dist(createVector(xloc, yloc)) < 20);
    }

    setColor(c) {
        this.color = c;
    }
}