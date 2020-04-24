$(".nav-item").on('click', function(event) {
  $(".nav-item").removeClass('active');
  $(this).addClass("active");
});

$('nav a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    var target = $(this.hash);
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000, function() {
      // Callback after animation
      // Must change focus!
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) { // Checking if the target was focused
        return false;
      } else {
        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
        $target.focus(); // Set focus again
      };
    });

  });

$(document).on("scroll", function(event){
  var scrollPos = $(document).scrollTop();
  $('#navbarNav a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos+100 && refElement.position().top + refElement.height() > scrollPos+100) {
      $('#navbarNav ul li').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
});
