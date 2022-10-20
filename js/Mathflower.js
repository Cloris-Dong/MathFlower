var d;
var n;
var dv;

function setup() {
  let cnv = createCanvas(innerWidth, innerHeight);
  // let p = createP('A Digital Garden');
  // p.style('font-size', '30px');
  // p.style('font-family', 'Courier New');
  // p.style('color', '#16b9d8');
  // p.position(30, 3);
}

function draw(){
  d = map(mouseX, 0, width, 1, 9);
  n = map(mouseY, 0, height, 1, 7);
  var k = n / d;
  background('#EAE2B7');
  translate (width / 2, height / 2);
  beginShape();
  stroke('#ea8abb');
  strokeWeight(1.5);
  // fill('#4dd4ed');
  noFill();
  for (var a = 0; a < TWO_PI * d; a += 0.01){
    var r = 370 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);

  text('Numerator:  ' + str(d), 90, 170);
  text('Denominator:  ' + str(n), 90, 140);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
  }
  //this is to readjust the window when refresh is not pressed;
