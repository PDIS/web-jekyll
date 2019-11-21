/* init of Materialize */
(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.carousel').carousel();
    $('#cssmenu').prepend('<div id="menu-button">Menu</div>');
    $('#cssmenu #menu-button').on('click', function(){
      var menu = $(this).next('ul');
      if (menu.hasClass('open')) {
        menu.removeClass('open');
      }
      else {
        menu.addClass('open');
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

/* init of Swiper */
var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})