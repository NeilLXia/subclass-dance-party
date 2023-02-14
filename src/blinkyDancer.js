var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  let newDancer = new BlinkyDancer(top, left, timeBetweenSteps);
  return newDancer;
};



var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$image = $('<img class="sprite" src = "./imgs/green dino/frame_00.gif">');
  this.$image.appendTo(this.$node);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

// b = function(c,d) {return c + d}
// function(a,b) {return a + b}

// Dancer.prototype.step.call(this (undefined within BlinkyDancer.prototype.step));

// Dancer.prototype.step = setTimeout invokes (this.step) after some time (this = object 1237812)

// var BlinkyDancer = function(top, left, timeBetweenSteps) {
//   BlinkyDancer.$node = $('<span class="dancer"></span>');
//   BlinkyDancer.timeBetweenSteps = timeBetweenSteps;

//   BlinkyDancer.step -> BlinkyDancer.prototype.step -> object.prototype? step is undefined

//   BlinkyDancer.prototype.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     Dancer.prototype.step.call(BlinkyDancer);

//     Dancer.prototype.step = function() {
//       // the basic dancer doesn't do anything interesting at all on each step,
//       // it just schedules the next step
//       setTimeout(BlinkyDancer.step.bind(BlinkyDancer), BlinkyDancer.timeBetweenSteps);
//     };
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     this.$node.toggle(); //jquery (blinking)
//   };

//   BlinkyDancer.setPosition(top, left);

//   BlinkyDancer.$image =  $('<img class="sprite" src = "./imgs/green dino/frame_00.gif">');
//   BlinkyDancer.$image.appendTo(BlinkyDancer.$node);
// };