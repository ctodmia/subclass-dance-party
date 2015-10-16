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
    Dancer.prototype.step.call(this)

  

      //call the old version of step at the beginning of any call to this new version of step
      //there is an old function of step that will be invocated on the prototype of our superclass.
    // this.oldStep();
      //toggle() is a jQuery method to show/hide the <span> tag.
     // See http://api.jquery.com/category/effects/ for this and
     // other effects you can use on a jQuery-wrapped html tag.
    // setTimeout(this.step.bind(this), this.timeBetweenSteps);
    
};




// var blinkyDancer = new makeBlinkyDancer(20, 10, 4000);

