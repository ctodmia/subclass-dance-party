var RotatingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="rotating"><img src="singleladies.gif"></span>');
    this.setPosition(top,left); 
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.$node = $('<span class="dancer"></span>');
  
};

RotatingDancer.prototype = Object.create(Dancer.prototype);

RotatingDancer.prototype.constructor = RotatingDancer;

RotatingDancer.prototype.step = function (){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
   
};
RotatingDancer.prototype.lineUp = function () {
  Dancer.prototype.lineUp.call(this);
}
