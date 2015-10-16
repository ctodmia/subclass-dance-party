var WorryDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="worry"><img class="deadpool" src="deadpool.gif"></span>');
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

      //call the old version of step at the beginning of any call to this new version of step
      //there is an old function of step that will be invocated on the prototype of our superclass.
    // this.oldStep();
      //toggle() is a jQuery method to show/hide the <span> tag.
     // See http://api.jquery.com/category/effects/ for this and
     // other effects you can use on a jQuery-wrapped html tag.
    
    
};



// var blinkyDancer = new makeBlinkyDancer(20, 10, 4000);
