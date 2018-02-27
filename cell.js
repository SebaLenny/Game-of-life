class Cell{
  constructor(x, y, h, w){
    this.pos = createVector(x,y);
    this.height = h;
    this.width = w;
    this.isAlive = randomBool();
    this.willSurvive = false;
  }
}

Cell.prototype.applyRules = function(neibours){
  this.willSurvive = true;
  if(this.isAlive && neibours !=2 && neibours !=3){
      this.willSurvive = false;
  }else if(!this.isAlive && neibours != 3){
      this.willSurvive = false;
  }
}

Cell.prototype.isInBounds = function(x, y){
  return x > this.pos.x &&
         y > this.pos.y &&
         x <= this.pos.x + this.width &&
         y <= this.pos.y + this.height;
}

Cell.prototype.isInBounds = function(positionVector){
  return positionVector.x > this.pos.x &&
         positionVector.y > this.pos.y &&
         positionVector.x <= this.pos.x + this.width &&
         positionVector.y <= this.pos.y + this.height;
}

Cell.prototype.switch = function(){
  this.isAlive = !this.isAlive;
}

Cell.prototype.kill = function(){
  this.isAlive = false;
  this.willSurvive = false;
}

Cell.prototype.draw = function(){
  push();
  stroke(255);
  fill(0);
  rect(this.pos.x, this.pos.y, this.width, this.height);
  noStroke();
  if(this.isAlive){
    fill(255);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }if(this.willSurvive){
    fill(255);
    rect(this.pos.x + this.width/3 , this.pos.y + this.height/3,
         this.width/3, this.height/3);
  }else{
    fill(0);
    rect(this.pos.x + this.width/3 , this.pos.y + this.height/3,
         this.width/3, this.height/3);
  }
  pop();
}

function randomBool(){
  return random() < 0.5;
}
