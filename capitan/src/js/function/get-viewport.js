/**
 * Capitan
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 26.10.2015
 * MIT License (MIT)
 */
Capitan.Function.getViewport = function () {
	var viewport = {
		top : Capitan.Vars.$window.scrollTop(),
		left : Capitan.Vars.$window.scrollLeft()
	};
	viewport.right = viewport.left + Capitan.Vars.$window.width();
	viewport.bottom = viewport.top + Capitan.Vars.$window.height();

	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();

	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
