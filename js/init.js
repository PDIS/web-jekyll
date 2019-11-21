/* init of Materialize */
document.addEventListener('DOMContentLoaded', function() {
  /* sidenav */
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  /* tooltips */
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);
});

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