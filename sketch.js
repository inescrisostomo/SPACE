let swirl =10;
  let s= 200;

function setup() {
  createCanvas(windowWidth, windowWidth);

  

}

function draw() {
  background(0);
  rectMode(CENTER);
  
 translate(height/0,width/10);
 
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
  
 
  ellipse(295,185,200,200)
  fill(0)
  ellipse(295,185,199.5,199.5)
  
}

function stars(){
  fill(random(200))
  
  let s1=random(width);
  let s2=random(height);
  
  ellipse(s1,s2, 3,2)
  
}


function absorption() {
  
  
  if (mouseIsPressed==true){
      push(); 
 
  
  translate(300,200);
  stroke('white');
    
  strokeWeight(random(10));
  let y = s *cos(swirl/.5);
  let z = s*sin(swirl/.10);
  point(y*.005,z*0.0001);
  
  
  s-=1.59; 
  swirl-=49;
  pop();
  
  }

}

