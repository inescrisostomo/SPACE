let swirl =10;
let s= 200;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  centrox=windowWidth/2;
  centroy=windowHeight/2;
}

function draw() {
  background(0);
  rectMode(CENTER);

  stroke(255);    
 for(var x=0; x<width; x= x+1){

mainCircle();
stars();
absorption();     
  }

}

function mainCircle(){
  fill(255)
  noStroke();
  push();
  pop();  
 
  ellipse(centrox,centroy,200,200);
  fill(0);
  ellipse(centrox,centroy,199.5,199.5)
  
}

function stars(){
  fill(random(200));  
  let s1=random(width);
  let s2=random(height);  
  ellipse(s1,s2, 3,2)
  
}


function absorption() {    
  push();   
  translate(centrox,centroy);
  stroke('white');
    
  strokeWeight(random(10));
  let y = s *cos(swirl/.5);
  let z = s*sin(swirl/.10);
  point(y*.005,z*0.0001);   
  s-=1.59; 
  swirl-=49;
  pop();  

}
