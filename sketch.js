// Alperen Karaman Week 04 Game and Class Implications
// I used AI tools and AI generated codes

var sceneGame;
var sceneIntro;

let inGameBg;
let endBg;
let myPlayer;

// start button
var startBtn;

// define a current variable
// we will have 3 main scenes -> "intro", "game", "end"
var currentScene;

function setup() {
  createCanvas(800, 800);

  sceneIntro = new intro();
  sceneIntro.setImage("s1_bg.jpg");

  inGameBg = loadImage("bg1.png");
  endBg = loadImage("play_again_screen.png");
  myPlayer = new Player(width / 2, 650);

  startBtn = new Button(width / 2, 650);
  startBtn.setImage("s1_button.png");
  startBtn.addListener(startGame);

  // Create instance of the game class
  sceneGame = new game();

  // Set current scene
  // This will determine the order of the game scenes...
  currentScene = "intro";
}

function startGame() {
  currentScene = "game";
}

function draw() {
  background(250);

  // Render Intro Scene
  if (currentScene == "intro") {
    sceneIntro.display();

    startBtn.draw();
  }

  // Render Game Scene
  //if (currentScene == "game") {
  // To display the content we need to call display function in the game class
  //sceneGame.display();

  if (currentScene == "game") {
    // background(200);
    image(inGameBg, 0, 0, width, height);
    sceneGame.display();
    myPlayer.display();
  }
}

if (currentScene == "end") {
  // background(0);
  image(endBg, 0, 0, width, height);
}

function keyPressed() {
  if (key === "s") {
    // Use the following naming convention while uploading the images.
    saveCanvas("week4_alperen_karaman");
  }
}
