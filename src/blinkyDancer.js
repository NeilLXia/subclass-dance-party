var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var newDancer = new BlinkyDancer(top, left, timeBetweenSteps);

  return newDancer;
};

var BlinkyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this);
  this.oldStep = this.prototype.step;
  this.timeBetweenSteps = timeBetweenSteps;
};

BlinkyDancer.prototype = Object.create(makeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};