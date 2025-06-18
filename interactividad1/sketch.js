let frase00= " ";
let frase0=" ";
let frase=" ";
let frase2=" ";
let frase3=" ";
let frase4=" ";
let frase5=" ";
let frase6=" ";
let frase7= " ";
let frase8=" ";
let frase9=" ";
let symmetry = 6; 
let angle = 360 / symmetry; 

function setup() {

  describe(`Dark grey canvas that reflects the lines drawn within it in ${symmetry} sections.`);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background (0);
  
}

function draw() {

  text(frase00, 900, 400);
  text(frase0, 900, 400);
  text(frase, 570, 420);
  text(frase2, 570, 440);
  text(frase3, 570, 460);
  text(frase4, 570, 480);
  text(frase5, 570, 500);
  text(frase6, 570, 520);
  text(frase7, 570, 540);
  text(frase8, 570, 560);
  text(frase9, 570, 580);


  translate(width/2, height/2);

  if (mouseX > 0 && mouseX <width && mouseY > 0 && mouseY < height){

    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2; 

    if (mouseIsPressed === true){
      for (let i = 0; i <symmetry; i++){
        rotate (angle);
        stroke (200);
        strokeWeight(3);
        line(lineStartX, lineStartY, lineEndX, lineEndY);

        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();

      } 
    }
  }
}

  function keyPressed(){
    if (key === "q") {
      textSize(30);
      stroke(1);
      fill(255);
      frase00= " ";
      frase0="Hola";
     }

     if (key === "w") {
      textSize(25);
      stroke(1);
      fill(255);
      frase0= " ";
      frase="¿Alguna vez te has preguntado cómo se ve tu interior el día de hoy en un dibujo?";
     }

     if (key === "e") {
      textSize(25);
      stroke(1);
      fill(255);
      frase= " ";
      frase2="¿Descansaste hoy? SÍ= dibuja un círculo NO= dibuja una raya";
     }

     if (key === "r") {
      textSize(25);
      stroke(1);
      fill(255);
      frase2= " ",
      frase3="¿Puedes recordar de qué color era tu shampoo? SÍ= dibuja un óvalo NO= dibuja una X";
     }

     if (key === "t") {
      textSize(25);
      stroke(1);
      fill(255);
      frase3=" ";
      frase4="¿Puedes recordar lo que soñaste hoy? SÍ= dibuja un círculo pequeño NO= dos rayas";
     }

     if (key === "y") {
      textSize(25);
      stroke(1);
      fill(255);
      frase4=" ";
      frase5="¿Has reído hoy? SÍ= dibuja una espiral NO= dibuja otra raya";
     }

     if (key === "u") {
      textSize(25);
      stroke(1);
      fill(255);
      frase5=" ";
      frase6="¿Ya comiste? SÍ= dibuja una V NO= dibuja una línea en zig-zag";
     }

     if (key === "i"){
      textSize(25);
      stroke(1);
      fill(255);
      frase6=" ";
      frase7="¿Te has molestado el día de hoy? SÍ= dos círculos NO= dibuja una W";

     }

     if (key === "o"){
      textSize(25);
      stroke(1);
      fill(255);
      frase7=" ";
      frase8="¿Has llorado el día de hoy? SÍ= dibuja una U NO= dibuja una línea horizontal";
     }

     if(key === "p"){
      textSize(25);
      stroke(1);
      fill(255);
      frase8=" ";
      frase9="¿Crees que vivimos muy rápido? SÍ= círculo NO=dos arcos NO SÉ= otra X";
     }
    }


  



