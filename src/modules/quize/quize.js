import $ from 'jquery'

let counter = 0;

$('.quize__btn_next').click(function() {
  const countBox = $(this).parent().prev().children().length;
  counter++;
  if(counter < countBox){
    $('.quize__box').removeClass('active');
    $('.quize__box').eq(counter).addClass('active')
    $('.quize__step').removeClass('green');
    $('.quize__step').eq(counter).addClass('green')
  }
})
$('.quize__btn_back').click(function() {
  counter--;
  if(counter >= 0){
    $('.quize__box').removeClass('active');
    $('.quize__box').eq(counter).addClass('active')
    $('.quize__step').removeClass('green');
    $('.quize__step').eq(counter).addClass('green')
  }
})