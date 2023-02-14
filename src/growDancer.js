var makeGrowDancer = function(top, left, timeBetweenSteps) {
  let newDancer = new GrowDancer(top, left, timeBetweenSteps);
  return newDancer;
};

var GrowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$image =  $('<img class="sprite" src = "./imgs/red dino/frame_00.gif">');
  this.$image.appendTo(this.$node);
};

GrowDancer.prototype = Object.create(Dancer.prototype);
GrowDancer.prototype.constructor = GrowDancer;

GrowDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/g for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if ($(this.$image).hasClass('grown')) {
    $(this.$image).animate({height: '20px'}).removeClass('grown');
  } else {
    $(this.$image).animate({height: '40px'}).addClass('grown');
  }
};