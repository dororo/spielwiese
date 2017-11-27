/**
 * Capitan
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 20.08.2015
 * MIT License (MIT)
 *
 * Listen to the Callback changing the viewport to check for Device Viewport
 * @return {boolean} - true if viewport is over 991 eq could be mobile
 */
Capitan.Function.checkViewport = function () {
	'use strict';

	var width = window.innerWidth,
		height = window.innerHeight,
		desktop = 992,
		isMobile = width < desktop ? true : false;

	Capitan.Vars.$window.on('resize', function(e) {
      width = $(this).width(),
      height = $(this).height();
			//console.log(isMobile, width, height, Capitan.Function.getBreakpoint(), Capitan.Function.getOrientation());

			if (width >= desktop) {
				return isMobile = false;
			}
			else {
				return isMobile = true;
			}
	});
	return isMobile;
};
