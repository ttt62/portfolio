function setup() {
  createCanvas(1350,800);
  
  frameRate(60);
  background(16, 16, 48);
  noiseSeed(1);
}

function draw() {
  
  
  
  
  
    let noiseLevel = 1500;
    let noiseScale = 0.001; 
    let nt = noiseScale * frameCount;
    let x = noiseLevel * noise(nt);
  
    stroke(0, 200, 0, 20);
    strokeWeight(random(1, 2));
    line(x, 0, x, height);
  
    let noiseLevel2 = 1500;
    let noiseScale2 = 0.0005; 
    let nt2 = noiseScale2 * frameCount;
    let x2 = noiseLevel2 * noise(nt2);
  
    stroke(0,0,200, 10);
    line(x2, 0, x2, height);
  

  
}
