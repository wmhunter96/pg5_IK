// Single-sketch example

function setup (){
  bg = loadImage('bg.jpg');
  createCanvas (800, 800);



  let sides = ['A','B','C','D'];
  side1 = random(sides);
  side2 = random(sides);
  while (side1 == side2){
    side2 = random(sides);
  }

  switch (side1) {
    case 'A':
      startx = random(0,800);
      starty = 0;
      break;
    case 'B':
      startx = 800;
      starty = random(0,800);
      break;
    case 'C':
      startx = random(0,800);
      starty = 800;
      break;
    case 'D':
      startx = 0;
      starty = random(0,800);
      break;
  }
  switch (side2) {
    case 'A':
      endx = random(0,800);
      endy = 0;
      break;
    case 'B':
      endx = 800;
      endy = random(0,800);
      break;
    case 'C':
      endx = random(0,800);
      endy = 800;
      break;
    case 'D':
      endx = 0;
      endy = random(0,800);
      break;
  }
}

function draw(){
  background(bg);
  fill(255);
  noStroke();
  stroke(255);

  line(startx,starty,endx,endy);
}

