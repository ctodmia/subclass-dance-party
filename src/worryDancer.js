var WorryDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="worry"><img src="deadpool.gif"> </span>');
    this.setPosition(top,left); 
    

  

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.$node = $('<span class="worry"></span>');
  
};

WorryDancer.prototype = Object.create(Dancer.prototype);
WorryDancer.prototype.constructor = WorryDancer;

WorryDancer.prototype.step = function (){
    Dancer.prototype.step.call(this);
    this.$node.toggle(); 
};
WorryDancer.prototype.lineUp = function () {
  Dancer.prototype.lineUp.call(this);
}