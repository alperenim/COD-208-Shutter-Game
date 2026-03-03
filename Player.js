//AI fixed code


class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 80;
    this.speed = 10;
    
    this.keys = { ArrowRight: false, ArrowLeft: false };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  }

  handleKeyDown(event) {
    if (this.keys.hasOwnProperty(event.key)) {
      this.keys[event.key] = true;
      event.preventDefault();
    }
  }

  handleKeyUp(event) {
    if (this.keys.hasOwnProperty(event.key)) {
      this.keys[event.key] = false;
    }
  }

  update() {
    if (this.keys.ArrowRight) {
      this.x += this.speed;
    }
    if (this.keys.ArrowLeft) {
      this.x -= this.speed;
    }
    this.x = constrain(this.x, this.width / 2, width - this.width / 2);
  }

  display() {
    this.update(); 

    push();
    translate(this.x, this.y);

    noFill();
    stroke(255, 255, 0); 
    strokeWeight(4);
    rectMode(CENTER);
    
    rect(0, 0, this.width, this.height);

    line(-10, 0, 10, 0);
    line(0, -10, 0, 10);

    pop();
  }
}