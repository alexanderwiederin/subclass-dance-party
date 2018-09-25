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
  
  
  // $('.lineUpButton').on('click', function(event) {
  //   debugger; 
    
  //   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  //   var dancerMakerFunction = window.makeDancer.prototype[dancerMakerFunctionName];
    
  //   var totalWidth = $("body").width();
  //   var widthBetweenNodes = totalWidth / window.dancers.length;
    
  //   for(var i = 0; i < window.dancers.length; i++) {
  //     window.dancers[i].prototype.dancerMakerFunction(300, totalWidth);
  //     window.dancers[i].$node.addClass('lineUp');
  //     totalWidth -= widthBetweenNodes;
  //   }
  //   // console.log(window.dancers);
    
  
  
  // });
  
  
  $('.lineUpButton').on('click', function(event) {
    
    var totalWidth = $("body").width();
    var widthBetweenNodes = totalWidth / window.dancers.length;
    
    for (var i = 0; i < window.dancers.length; i++) {

      window.dancers[i].setPosition(300, totalWidth);
      window.dancers[i].$node.addClass('lineUp');
      totalWidth -= widthBetweenNodes;
    }
    
  });

  
  $('.getBeerButton').on('click', function(event) {
    
    var closestNodes = [];
    
    var getDistance = function(node1, node2) {
      if (node1 && node2) {
        var distance = Math.pow((node1.top - node2.top), 2) + Math.pow((node1.left - node2.left), 2);
        return distance;  
      }
    };
    
    var replaceNodes = function(node1, node2) {
      closestNodes = [];
      closestNodes.push(node1, node2);
    };

    
    
    for (var i = 0; i < window.dancers.length; i++) {
      for (var j = 0; j < window.dancers.length; j++) {
        
        var node1 = window.dancers[i];
        var node2 = window.dancers[j];
    
        if (i === j) {
          break;
          
        } else if (closestNodes.length === 0) {
          
          replaceNodes(node1, node2);
          
        } else {
          
          if (getDistance(node1, node2) < getDistance(closestNodes[0], closestNodes[1])) {
            replaceNodes(node1, node2);
          }
          
        }
      }
    }
    
    for (var i = 0; i < closestNodes.length; i++) {
      closestNodes[i].$node.addClass('closestNodes');
      console.log(closestNodes[i]);
    } 
    

  });
  
  
});

