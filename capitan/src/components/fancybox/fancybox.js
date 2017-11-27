/*
 * Capitan fancybox v0.9.1
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.Capitan.de/
 *
 * Date: 2017-01-14
 * MIT License (MIT)
 */

Capitan.Component.fancybox = function ($) {

// public methods / properties
var self = {
	//...
};

//private functions / properties
var _ = {
	defaults: {
		componentSelector: '[data-fancybox]',
		pluginOptions: {
			lang: 'de',
			toolbar: false,
			arrows: true,
			smallBtn: false,
			buttons: [
				'slideShow',
				'fullScreen',
				'thumbs',
				'close'
			],
			animationEffect: 'fade',
			animationDuration: 700,
			image: {
				preload: "auto",
			},
			baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
				'<div class="fancybox-bg"></div>' +
				'<div class="fancybox-inner">' +
				'<div class="fancybox-infobar">' +
				'<button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button>' +
				'<div class="fancybox-infobar__body">' +
				'<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
				'</div>' +
				'<button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button>' +
				'</div>' +
				'<div class="fancybox-toolbar">' +
				'{{BUTTONS}}' +
				'</div>' +
				'<div class="fancybox-navigation">' +
				'<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" />' +
				'<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" />' +
				'</div>' +
				'<div class="fancybox-stage"></div>' +
				'<div class="fancybox-caption-wrap">' +
				'<div class="fancybox-caption"></div>' +
				'</div>' +
				'</div>' +
				'</div>'
		},
		customTpl: '<div class="fancybox-custom">' +
			'<div class="custom-image">' +
			'</div>' +
			'<div class="custom-caption-wrap">' +
			'<div class="custom-caption">' +
			'</div>' +
			'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="CLOSE"></button>' +
			'</div>' +
			'</div>'
	}
};

_.bindEvents = function (obj) {

	// First clear preloaded Content
	Capitan.Vars.$doc.on('afterLoad.fb', function (e, instance, slide) {
		var stage = $(slide.$slide[0]);
		$(stage).html('');
		$(stage).find('.fancybox-stage').hide;
	});

	Capitan.Vars.$doc.on('afterShow.fb', function (e, instance, slide) {
		var stage = $(slide.$slide[0]);

		var caption = instance.$refs.caption[0].innerHTML;
		var image = '<img src="' + slide.$image[0].currentSrc + '" />';

		$(stage).html(_.defaults.customTpl);

		var customObj = $(instance.$refs.stage[0]).find('.custom-image'); // Image holder
		var target = $(instance.$refs.stage[0]).find('.custom-caption'); // Caption holder

		$(customObj).html(image); // get image and paste it into customTemplate
		$(target).html(caption); // take caption and paste it into customTemplate

		// Inline Solution
		// var caption = instance.$refs.caption[0].innerHTML;
		// var image = slide.opts.$orig[0].innerHTML;
		// var customObj = $(instance.$refs.stage[0]).find('.fancybox-custom');
		// var target = $(instance.$refs.stage[0]).find('.custom-caption');
		//
		// $(customObj).html(image); // get image and paste it into custom inline-Template
		// $(target).html(caption); // take caption and paste it into custom inline-Template

		});
	};

	/**
	 * Init component
	 *
	 * @public
	 * @param settings
	 */
	self.init = function (settings, context) {
		var componentElements;
		var initOptions = $.extend(true, {}, _.defaults, settings);

		if (!initOptions.componentSelector) {
			return console.error('Capitan.Component.fancybox | componentSelector needed!');
		}

		//get component elements in context (whole document or just a fraction eg. ajax loaded content)
		componentElements = $(initOptions.componentSelector, context ||  document);
		//console.log(initOptions.pluginOptions);

		//init the plugin
		componentElements.fancybox(initOptions.pluginOptions);

		_.bindEvents();
	};

	return self;
}(jQuery);

/**
 * init component
 */
Capitan.Component.fancybox.init({
	//init with defaults...
});
