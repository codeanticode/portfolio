var viz_function = function(p) {
  
  var words = new Array("drawing",
                        "statistics", 
                        "simulation", 
                        "visualization",                         
                        "processing",
                        "interaction",
                        "shaders",
                        "performance",
                        "live",
                        "data",
                        "information",
                        "prediction",
                        "disease");
  
  var px, py;
  var x, y;
  var numWords = words.length;
  var maxIter = 1500;
  var lastCount = 0;
  var prob = 2 *  numWords / maxIter;  
  
  p.setup = function() {  
    var canvas = p.createCanvas(800, 600);
    canvas.parent('random_walk');
    p.frameRate(30);
//     p.noLoop();
    p.fill(0,255,0);
    p.background(255);
    p.textAlign(p.CENTER, p.CENTER);
    x = px = 0.5 * p.width;
    y = py = 0.5 * p.height;
    p.textSize(15);
  }

  p.draw = function() {    
    if (px < 50) x = px + p.random(0, 10);
    else if (p.width - 50 < px) x = px + p.random(-10, 0);    
    else x = px + p.random(-10, 10);
    
    if (py < 50) y = py + p.random(0, 10);
    else if (p.height - 50 < py) y = py + p.random(-10, 0);    
    else y = py + p.random(-10, 10);
    
    if (60 < p.frameCount) {
      p.noStroke();
      p.fill(255);
      p.rect(0, p.height - 50, p.width, 50);
      
      p.fill(180, p.map(p.frameCount, 60, 90, 0, 255));

      p.text("Please use the arrow keys or the buttons to the right to navigate this slideshow.\nPress ESC for an overview", 0, p.height - 50, p.width, 50);
    }

    
//     if (p.random(1) < prob && 0 < words.length && lastCount + 30 < p.frameCount) {
//       var w = words.splice(0, 1);
// 
//       p.noStroke();
//       p.fill(100);
//       p.text(w, x, y);
//       lastCount = p.frameCount;
//     }

    p.stroke(200);
    p.line(px, py, x, y);
    px = x;
    py = y;  
    
    if (maxIter < p.frameCount) {
       p.noLoop();
    }
    
// 	p.mouseMoved = function() {
// 	  if (!p.looping && p.frameCount < maxIter) {
// 	    p.loop()
// 	  }
// 	}
// 	
// 	p.keyPressed = function() {
// 	  if (!p.looping && p.frameCount < maxIter) {
// 	    p.loop()
// 	  }	
// 	}	
  }
}

var viz = new p5(viz_function)