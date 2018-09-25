var makeSchuhplattlerDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer schuhplattlerDancer moving spinning"><img src="http://www.utebreuer.de/Animationen/schuhplattler.gif"></span>');
  this.setPosition(this.top, this.left);

};

makeSchuhplattlerDancer.prototype = Object.create(makeDancer.prototype);
makeSchuhplattlerDancer.prototype.constructor = makeSchuhplattlerDancer;

makeSchuhplattlerDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};