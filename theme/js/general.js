(function($, window, document, undefined) {
  $(document).ready(function() {
    if ($(".production-list").length) {
      $( ".production-list .production-tabs a" ).click(function(e) {
        e.preventDefault();
        var category = $(this).attr('href');
        if (!$(this).hasClass('selected')) {
          $( ".production-list .production-tabs a" ).removeClass('selected');
          $(this).addClass('selected');
        }
        if (category == 'all') {
          $(".production-list .plays-list a").show();
        }
        else {
          $(".production-list .plays-list a").hide();
          $(".production-list .plays-list a." + category).show();
        }
      });
    }
    if ($(".team-members-slider").length) {
      $(".team-members-slider").not('.slick-initialized').slick({
				dots: false,
				arrows: true,
				slidesToShow:4,
				slidesToScroll:1,
				autoplay:false,
				autoplaySpeed:5000,
				infinite: true,
				speed: 300,
				responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				},
			]
			});
    }
  });
})(jQuery, window, document);
