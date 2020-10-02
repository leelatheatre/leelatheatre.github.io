(function($, window, document, undefined) {
  $(document).ready(function() {
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
