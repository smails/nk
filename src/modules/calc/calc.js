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


$('.calc-benefit__list li').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $(this).parent().prev().find('span').text($(this).text());
  $(this).parents('.calc-benefit__select').removeAttr('open');
  $(this).parents('.calc-benefit__select').next().find('.calc-benefit__item').hide();
  $(this).parents('.calc-benefit__select').next().find('.calc-benefit__item').eq($(this).index()).show();
})