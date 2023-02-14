var makeRotateDancer = function(top, left, timeBetweenSteps) {
  let newDancer = new RotateDancer(top, left, timeBetweenSteps);
  return newDancer;
};

var RotateDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$image =  $('<img class="sprite" src = "./imgs/blue dino/frame_00.gif">');
  this.$image.appendTo(this.$node);
};

RotateDancer.prototype = Object.create(Dancer.prototype);
RotateDancer.prototype.constructor = RotateDancer;

RotateDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  $(this.$image).animate({
     rotate: '+=360deg'
   }, 750);
};