var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="blinky"><img src="carlton.gif"></span>');
    this.setPosition(top,left); 
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
//
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function (){
    Dancer.prototype.step.call(this);
};
BlinkyDancer.prototype.lineUp = function (){
  Dancer.prototype.lineUp.call(this);
}



// var blinkyDancer = new makeBlinkyDancer(20, 10, 4000);

