
$(document).ready(function(){

$('body').css('padding-top', $('.navbar-custom').outerHeight() + 'px');

if ($('.smart-scroll').length > 0) {

  var last_scroll_top = 0;

  $(window).on('scroll', function() {

    scroll_top = $(this).scrollTop();

    if(scroll_top == 0){
      $('.smart-scroll').removeClass('trans');
      $('.smart-scroll').css({"background-color": "#e3fdfd", "opacity": "1"});
    }

    else if (scroll_top < last_scroll_top) {
      $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up trans');
    }

    else {
      $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
      $('.smart-scroll').css({opacity: 0.75});
    }
    last_scroll_top = scroll_top;
  });
}

  function sendEmail()
{
    var name = $('#name').val();
    var msg = $('#message').val();
    window.location = "mailto:nharishg12@gmail.com?subject=Contact from website&body=Name - "+name+"%0d%0a Message - %0d%0a"+msg;
}

function expandContact(){
  $('#contact-form').collapse('show');
}

$('#collapsingNavbar3').on('show.bs.collapse', function () {
  $('.smart-scroll').css({"opacity": "1", "background-color": "#E7EBFE"});
});

$('#collapsingNavbar3').on('hide.bs.collapse', function () {
    $('.smart-scroll').css({"background-color": "#e3fdfd", "opacity": "1"});
});

$('#collapsingNavbar3').on('hidden.bs.collapse', function () {
  if(scroll_top == 0){
    $('.smart-scroll').css({"background-color": "#e3fdfd", "opacity": "1"});
  }
    else{
    $('.smart-scroll').css({"opacity": "0.75", "background-color": "#e3fdfd" });
  }
});
});