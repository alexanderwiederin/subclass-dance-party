describe('schuhplattlerDancer', function() {

  var schuhplattlerDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    schuhplattlerDancer = new makeSchuhplattlerDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(schuhplattlerDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(schuhplattlerDancer.$node, 'toggle');
    schuhplattlerDancer.step();
    expect(schuhplattlerDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(schuhplattlerDancer, 'step');
      expect(schuhplattlerDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(schuhplattlerDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(schuhplattlerDancer.step.callCount).to.be.equal(2);
    });
  });
});
