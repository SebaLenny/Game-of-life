var window_width = 750;
var window_height = 750;
var rows = 50;
var columns = rows;
var grid = null;

function setup() {
  createCanvas(window_width, window_height);
  background(0);
  color(255);
  noStroke();
  grid = new Grid(window_width, window_height, rows, columns);
  grid.predictNextGeneration();
  noLoop();
}

function draw() {
  grid.nextGeneration();
  grid.predictNextGeneration();
  grid.draw();
}

function mouseClicked() {
  var x = floor(mouseX*grid.columns/grid.gridWidth);
  var y = floor(mouseY*grid.rows/grid.gridHeight);
  if(grid.isCoordInGrid(x,y)){
    noLoop();
    grid.cells[x][y].switch();
    grid.predictNextGeneration();
    grid.draw();
  }
}

function keyPressed(){
  grid.predictNextGeneration();
  if (keyCode == 32){//32 is spacebar
    noLoop();
    grid.nextGeneration();
    grid.predictNextGeneration();
    grid.draw();
  }else if(keyCode == 67){// 67 is 'c'
    grid.clear();
    grid.draw();
    noLoop();
  }else if(keyCode == 86){// 86 is 'v'
    loop();
  }else if(keyCode == 82){// 82 is 'r'
    grid.random();
    grid.predictNextGeneration();
    grid.draw();
    noLoop();
  }

}
