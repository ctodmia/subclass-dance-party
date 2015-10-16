describe("worryDancer", function() {

  var worryDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    worryDancer = new WorryDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(worryDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node change colors", function() {
    sinon.spy(worryDancer.$node, 'toggle');
    worryDancer.step();
    expect(worryDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(worryDancer, "step");
      expect(worryDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(worryDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(worryDancer.step.callCount).to.be.equal(2);
    });
  });
});