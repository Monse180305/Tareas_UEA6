let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO, {flipped: true});
  capture.size(640, 480); //tamaño de resolución del vídeo
  capture.hide();
}

function draw() {
  background(220);
  image(capture, 0, 0, windowWidth, windowHeight);
}
