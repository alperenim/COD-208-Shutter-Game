class Camera {
  constructor() {
    this.x = random(50, width - 50);
    this.y = random(-100, -800);

    this.speed = random(1, 3);
    this.s = random(0.4, 0.8);

    let colorList = [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#FF33A8",
      "#FFA500",
      "#008080",
    ];
    this.c = random(colorList);
  }

  display() {
    push();

    translate(this.x, this.y);
    scale(this.s);

    rectMode(CENTER);

    // Body
    noStroke();
    fill(this.c);
    rect(0, 0, 120, 80);

    // Lens
    fill(30);
    circle(0, 0, 60);

    // Flash
    fill(255, 255, 0);
    rect(40, -30, 20, 15);

    // Shutter Button
    fill(200, 50, 50);
    rect(-40, -45, 30, 10);

    pop();
  }
}
