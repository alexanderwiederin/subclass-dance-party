describe('beerDancer', function() {

  var beerDancer, clock;
  var timeBetweenSteps = 30;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    beerDancer = new makeBeerDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(beerDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should have a lineup method', function() {
    expect(typeof beerDancer.lineUp).to.equal('function');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(beerDancer, 'step');
      expect(beerDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(beerDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(beerDancer.step.callCount).to.be.equal(2);
    });
  });
});
