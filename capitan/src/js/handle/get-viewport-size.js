/**
 * Capitan
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 20.08.2015
 * MIT License (MIT)
 *
 * Callback get viewport sizes by resizing window
 */
Capitan.Handle.getViewportSize = function () {
	'use strict';

	var _ = {};

	_.handler = function (event) {
    var x = $(this).width(),
        y = $(this).height();

		};

		Capitan.Vars.$window.on('resize', _.handler);
}();
