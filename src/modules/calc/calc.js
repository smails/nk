import $ from 'jquery'
import '../../static/js/jquery-ui.js'


$(".contribution .slider").slider({
  animate: "slow",
  min: 1,
  max: 25,
  value: 25,
  step: 0.1,
  range: "min",
  slide : function(event, ui) {    
      $(".contribution .range-start").text( ui.value);       
  },
  stop  : function(event, ui) {    
      $(".contribution .start").val( ui.value ).change(); 
  }
});

$(".year .slider").slider({
  animate: "slow",
  min: 1,
  max: 5,
  value: 5,
  step: 0.1,
  range: "min",
  slide : function(event, ui) {    
      $(".year .range-start").text( ui.value);       
  },
  stop  : function(event, ui) {    
      $(".year .start").val( ui.value ).change(); 
  }
});