class Skelly {
    constructor(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.sprite = skellySprite;
        this.scaleFactor = 1
    }
    rev() {
        this.sprite = skellySpriteRev;
    }
    scale(speed) {
        let sf = this.scaleFactor
        let interval = setInterval(() => {
            this.scaleFactor -= 0.01
            if(this.scaleFactor < 0.8*sf) {
                clearInterval(interval)
            }
        }, speed*2)
    }
    display() {
        // scale(this.scaleFactor)
        textSize(32);
        fill(255)
        text(this.name, this.x + 125, this.y + 40);
        image(this.sprite, this.x, this.y);
    }
}