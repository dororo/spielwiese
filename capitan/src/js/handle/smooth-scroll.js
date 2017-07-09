/**
 * Capitan
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 19.08.2015
 * MIT License (MIT)
 *
 *
 *
 */
Capitan.Handle.smoothScroll = function () {
	'use strict';

	var _ = {
		classes: {
			hashes: $('a[href*="#"]')
			.not('[href="#"]')
		  .not('[href="#0"]')
		}
	};

	_.handler = function (event) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
      	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

				if (target.length) {
        	event.preventDefault();

      		$('html, body').animate({
          	scrollTop: target.offset().top
        	}, 1000, function() {
          	var $target = $(target);

						$target.focus();

        		if ($target.is(":focus")) {
            	return false;
          	}
						else {
            	$target.attr('tabindex','-1');
            	$target.focus();
          	};
        	});
      	};
		};
	};

	_.classes.hashes.on('click', _.handler);
}();
