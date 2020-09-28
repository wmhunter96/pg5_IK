// Single-sketch example

function setup (){
  createCanvas (1000, 1000);
}

function draw(){
  background(255);
  startingx = 400;
  startingy = 400;
  RAD2DEG = 57.2957795130823209;
  armlength = 200;


  angle = atan2((mouseX - startingx), (mouseY - startingy));
  
  if (angle < 0.0){
    angle += TWO_PI;
  }
  angledeg = RAD2DEG * angle;


  let d = int(dist(startingx, startingy, mouseX, mouseY));
  text("d: " + d, 0, height/10);
  if ( d <= armlength){
    var mod = map(d, 0, armlength, PI/2, PI/3)
    angle = angle + mod;
  }
  if ( d < (armlength * 2) && d > armlength){
    if ( d > (armlength * 2)*0.75){
      var mod = map(d, armlength, (armlength * 2), PI/3, PI/8)
      angle = angle + mod;
    }
    var mod = map(d, armlength, (armlength * 2)*0.75, PI/3, PI/5)
    angle = angle + mod;
  }
  if ( d == (armlength * 2)){
    angle = angle
  }
  else{
    angle = angle
  }


  arm1y = armlength * cos(angle) + startingx;
  arm1x = armlength * sin(angle) + startingy;

  ellipse(startingx, startingy, 25);
  ellipse(startingx, startingy, (armlength * 4) );
  ellipse(startingx, startingy, (armlength * 3));
  ellipse(startingx, startingy, (armlength * 2));
  line(startingx, startingy, arm1x, arm1y);



  ellipse(arm1x, arm1y, 25);



  angle1 = atan2((mouseX - arm1x), (mouseY - arm1y));
  if (angle1 < 0.0){
    angle1 += TWO_PI;
  }
  angledeg1 = RAD2DEG * angle;

  arm2y = armlength * cos(angle1) + arm1y;
  arm2x = armlength * sin(angle1) + arm1x;

  line(arm1x, arm1y, arm2x, arm2y);
  ellipse(arm2x, arm2y, 8);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
  text("angle_degrees: " + angledeg, 0, height/6);
  text("angle_radians: " + round(angle/PI) + "PI", 0, height/8);
}

