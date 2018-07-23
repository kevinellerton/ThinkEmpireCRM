$(document).ready(function(){
//   var navHeight =$('nav').height();
// $('header').css({'margin-top':navHeight});
// var c1 =0,c2=0,c3=0;
// $(window).scroll(function() {
//   // declare variable
//   var topPos = $(this).scrollTop();
//   // if user scrolls down - show scroll to top button
//   if (topPos > 500 && c1 >=0) {
//     c1+=3.5;
//     $('.section1 .white').css('transform', 'translateX(' + c1 + '%)');
//   }
//   if(topPos == 0){
//       c1=0;
//       c2=0;
//       c3=0;
//       $('.section1 .white').css('transform', 'translateX(' + c1 + '%)');
//       $('.section2 .white').css('transform', 'translateX(' + c2 + '%)');
//       $('.section3 .white').css('transform', 'translateX(' + c3 + '%)');
//
//   }
//   if (topPos > 1070) {
//     c2-=3.5;
//     $('.section2 .white').css('transform', 'translateX(' + c2 + '%)');
//   }
//   if (topPos > 1650 && c3 >=0) {
//     c3+=3.5;
//     $('.section3 .white').css('transform', 'translateX(' + c3 + '%)');
//   }
// }); // scroll END
//
//
//
// $('.selectPhone ul .s1').click(function(){
//   $(this).addClass('active').siblings().removeClass('active');
//
//   $('.phone .img1').removeClass('d-none').addClass('d-block').siblings().removeClass('d-block').addClass('d-none');
// });
// $('.selectPhone ul .s2').click(function(){
//   $(this).addClass('active').siblings().removeClass('active');
//   $('.phone .img2').removeClass('d-none').addClass('d-block').siblings().removeClass('d-block').addClass('d-none');
// });
// $('.selectPhone ul .s3').click(function(){
//   $(this).addClass('active').siblings().removeClass('active');
//   $('.phone .img3').removeClass('d-none').addClass('d-block').siblings().removeClass('d-block').addClass('d-none');
// });
//
//
// //////////////
//
// window.setInterval(function(){
//   /*left*/
//   if ($('header .left >div').hasClass('leftImage')) {
//     $('header .left >div').removeClass('leftImage');
//     $('header .left >div').addClass('leftImage1');
//   }
//   else if ($('header .left >div').hasClass('leftImage1')) {
//     $('header .left >div').removeClass('leftImage1');
//     $('header .left >div').addClass('leftImage2');
//   }
//   else if ($('header .left >div').hasClass('leftImage2')) {
//     $('header .left >div').removeClass('leftImage2');
//     $('header .left >div').addClass('leftImage3');
//   }
//   else if ($('header .left >div').hasClass('leftImage3')) {
//     $('header .left >div').removeClass('leftImage3');
//     $('header .left >div').addClass('leftImage4');
//   }
//   else if ($('header .left >div').hasClass('leftImage4')) {
//     $('header .left >div').removeClass('leftImage4');
//     $('header .left >div').addClass('leftImage5');
//   }
//   else if ($('header .left >div').hasClass('leftImage5')) {
//     $('header .left >div').removeClass('leftImage5');
//     $('header .left >div').addClass('leftImage6');
//   }
//   else if ($('header .left >div').hasClass('leftImage6')) {
//     $('header .left >div').removeClass('leftImage6');
//     $('header .left >div').addClass('leftImage');
//   }
//   /*right */
//   if ($('header .right >div').hasClass('rightImage')) {
//     $('header .right >div').removeClass('rightImage');
//     $('header .right >div').addClass('rightImage1');
//   }
//   else if ($('header .right >div').hasClass('rightImage1')) {
//     $('header .right >div').removeClass('rightImage1');
//     $('header .right >div').addClass('rightImage2');
//   }
//   else if ($('header .right >div').hasClass('rightImage2')) {
//     $('header .right >div').removeClass('rightImage2');
//     $('header .right >div').addClass('rightImage3');
//   }
//   else if ($('header .right >div').hasClass('rightImage3')) {
//     $('header .right >div').removeClass('rightImage3');
//     $('header .right >div').addClass('rightImage4');
//   }
//   else if ($('header .right >div').hasClass('rightImage4')) {
//     $('header .right >div').removeClass('rightImage4');
//     $('header .right >div').addClass('rightImage5');
//   }
//   else if ($('header .right >div').hasClass('rightImage5')) {
//     $('header .right >div').removeClass('rightImage5');
//     $('header .right >div').addClass('rightImage6');
//   }
//   else if ($('header .right >div').hasClass('rightImage6')) {
//     $('header .right >div').removeClass('rightImage6');
//     $('header .right >div').addClass('rightImage');
//   }
// }, 7000);
//

$('.left-sidebar').hover(function(){
  $('.contacts').css("padding-left", $(this).width() );
  $('.left-sidebar button.add-contact').show();
});
$('.left-sidebar').mouseleave(function(){
  $('.contacts').css("padding-left", $(this).width() );
  $('.left-sidebar button.add-contact').hide();

});




$('.left-sidebar .dashboard li .label').click(function(){
  if($('.left-sidebar .dashboard >li .labels').hasClass('hide')){
    $('.left-sidebar .dashboard >li .labels').addClass('show');
    $('.left-sidebar .dashboard >li .labels').slideDown();
    $('.left-sidebar .dashboard >li .labels').removeClass('hide');
  }
  else {
    $('.left-sidebar .dashboard >li .labels').addClass('hide');
    $('.left-sidebar .dashboard >li .labels').slideUp();
    $('.left-sidebar .dashboard >li .labels').removeClass('show');
  }
});
$('.left-sidebar .dashboard li .more').click(function(){
  if($('.left-sidebar .dashboard >li .more-list').hasClass('hide')){
    $('.left-sidebar .dashboard >li .more-list').addClass('show');
    $('.left-sidebar .dashboard >li .more-list').slideDown();
    $('.left-sidebar .dashboard >li .more-list').removeClass('hide');
  }
  else {
    $('.left-sidebar .dashboard >li .more-list').addClass('hide');
    $('.left-sidebar .dashboard >li .more-list').slideUp();
    $('.left-sidebar .dashboard >li .more-list').removeClass('show');
  }
});


});
