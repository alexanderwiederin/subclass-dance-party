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
  
  it('should have a lineup method', function() {
    expect(typeof schuhplattlerDancer.lineUp).to.equal('function');
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
