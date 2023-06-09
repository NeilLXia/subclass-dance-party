// ***Pseudoclassical implementation of the dancer object*** //
// All methods should be revised to the prototype
// Set parameters to reference this

// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // define dancer properties
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
