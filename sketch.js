var gif_teacher;

function preload() {
  gif_teacher = createImg("awesome-gif-for-teachers-day.gif");
}

function setup() {
  createCanvas(gif_teacher.width, gif_teacher.height);
  background("blue");
}

function draw() {
  gif_teacher.position(0, 0);
}