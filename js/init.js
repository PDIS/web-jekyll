(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.carousel').carousel();

  }); // end of document ready
})(jQuery); // end of jQuery name space

( function( $ ) {
  $( document ).ready(function() {
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
  });
  } )( jQuery );
  