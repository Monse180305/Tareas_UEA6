let capture;



function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO, {flipped: true});
  capture.size(400, 400); //tamaño de resolución del vídeo
  capture.hide();//esconde el vídeo
}

function draw() {
  background(220);
  imageMode(CENTER);
  image(capture, width/2, height/2, 480, 640);
  
}
