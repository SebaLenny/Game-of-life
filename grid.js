class Grid{
  constructor(windowWidth, windowHeight, rows, columns){
    this.gridWidth = windowWidth;
    this.gridHeight = windowHeight;
    this.rows = rows;
    this.columns = columns;
    this.cells = _create2DArray(columns, rows);
    this._createCells();
  }

  _createCells(){
    var wid = this.gridWidth/this.columns;
    var hei = this.gridHeight/this.rows;
    for(var w=0; w< this.rows; w++){
      for(var h=0; h< this.columns; h++){
        this.cells[h][w] = new Cell(h*wid, w*hei, wid, hei);
      }
    }
  }
}

Grid.prototype.random = function(){
  for(var w=0; w< this.rows; w++){
    for(var h=0; h< this.columns; h++){
      this.cells[h][w].isAlive = randomBool();
    }
  }
}

Grid.prototype.nextGeneration = function(){
  for(var w=0; w< this.rows; w++){
    for(var h=0; h< this.columns; h++){
      this.cells[h][w].isAlive = this.cells[h][w].willSurvive;
    }
  }
}

Grid.prototype.draw = function(){
  for(var w=0; w< this.rows; w++){
    for(var h=0; h< this.columns; h++){
      this.cells[h][w].draw();
    }
  }
}

Grid.prototype.clear = function(){
  for(var w=0; w< this.rows; w++){
    for(var h=0; h< this.columns; h++){
      this.cells[h][w].kill();
    }
  }
}

Grid.prototype.predictNextGeneration = function(){
  for(var w=0; w< this.rows; w++){
    for(var h=0; h< this.columns; h++){
      this.cells[h][w].applyRules(this.countNeibours(h, w));
    }
  }
}

Grid.prototype.countNeibours = function(x, y){
  var counter = 0;
  if(this.cells[x][y].isAlive){
    counter --;
  }
  var i = constrain
  for(i=x-1; i <= x+1; i++){
    for(j=y-1; j <= y+1; j++){
      if(_isInBound(i,0,this.columns) &&
         _isInBound(j,0,this.rows) &&
         this.cells[i][j].isAlive){
         counter++;
      }
    }
  }
  return counter;
}

Grid.prototype.isCoordInGrid = function(x, y){
  return _isInBound(x,0,this.columns) && _isInBound(y,0,this.rows);
}

function _create2DArray(columns, rows){
  var arr = new Array(columns);
  for(var i=0;i < columns; i++){
    arr[i] = new Array(rows);
  }
  for(var w=0; w< rows; w++){
    for(var h=0; h< columns; h++){
      arr[h][w] = null;
    }
  }
  return arr;
}

function _isInBound(toCheck, lowerBound, upperBound){
  return toCheck >= lowerBound && toCheck < upperBound;
}
