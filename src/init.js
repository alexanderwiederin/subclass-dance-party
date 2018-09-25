$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName);

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    // console.log(window.dancers);
    
    $('.dancer').mouseover(function(event) {
      console.log($(this));
      $(this).addClass('change')}).mouseout(function(event) {
      $(this).removeClass('change');
    });
  });
  
  $('.lineUpButton').on('click', function(event) {
    
    var totalWidth = $("body").width();
    var widthBetweenNodes = totalWidth / window.dancers.length;
    
    for (var i = 0; i < window.dancers.length; i++) {

      window.dancers[i].setPosition(300, totalWidth);
      window.dancers[i].$node.addClass('lineUp');
      totalWidth -= widthBetweenNodes;
    }
    
  });
  
  $('.dancer').mouseover(function(event) {
    console.log($(this));
  $(this).addClass('change')}).mouseout(function(event) {
    $(this).removeClass('change');
  });
  
});

