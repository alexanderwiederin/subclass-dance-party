var makeBeerDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.setPosition(this.top, this.left);
  this.$node.prepend('<img src="http://pngimg.com/uploads/beer/beer_PNG2388.png" height="42" width="42"/>');
  this.$node.toggleClass('beer');

};



makeBeerDancer.prototype = Object.create(makeDancer.prototype);
makeBeerDancer.prototype.constructor = makeBeerDancer;

makeBeerDancer.prototype.step = function() {
  
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};
