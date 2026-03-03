class game {
  // Move the contents in setup function to constructor in the class
  constructor() {
    this.numItems = 8; // number of objects
    this.faceArray = []; // array to hold 40 objects

    for (var i = 0; i < this.numItems; i++) {
      // Instatiate the object for each array element - circleFace class
      this.faceArray[i] = new Camera();

      // Set head size randomly between 50-90 for each array element
      this.faceArray[i].rad = random(50, 90);

      // Set position of each array object to random canvas postions
      this.faceArray[i].x = random(0, width);
      this.faceArray[i].y = random(-100, -400);
    }
    
    //this.bocek = loadImage("boc.jpg");
  }

  // Move the codes in draw() function to the display() function in the class
  display() {
    for (var i = 0; i < this.numItems; i++) {
      // update position of each face object to make them move downwards
      this.faceArray[i].y = this.faceArray[i].y + this.faceArray[i].speed;

      // Check if the position of any object greater than the height of the canvas.
      // That means it is out of the canvas.
      // So we move it to the top again.
      // And make it move again to down.
      if (this.faceArray[i].y > height) {
        this.faceArray[i].y = random(-100, -400);
      }

      // Display the objects assigned to the faceArray
      this.faceArray[i].display();
      
      //image(this.bocek,  this.faceArray[i].x,  this.faceArray[i].y);
    }

  }
}
