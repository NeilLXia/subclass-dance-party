$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = dancerMakerFunction(
      $("body").height() * (Math.random() * 0.9 + 0.05),
      $("body").width() * (Math.random() * 0.9 + 0.05),
      Math.random() * 500 + 500
    );
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(event) {
    // Look through some sort of array with all the dancers
    let dancers = document.getElementsByClassName('dancer');

    let spriteSpacing = ($("body").width() - 200)/dancers.length; 1000 -200 = 800
    // For each dancer, we'll reassign their position (top and left)
    for (let index = 0; index < dancers.length; index++) {
      // Set their top as a constant, and left based on the iterator

      $(dancers[index]).css({
        top: 500,
        left: (index * spriteSpacing) + 100
      });
    }
  });
});

