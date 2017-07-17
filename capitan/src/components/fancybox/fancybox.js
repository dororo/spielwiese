/*
 * Capitan formValidation v0.9.1
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
			componentSelector: '[data-fancybox="images"]',
			pluginOptions: {
				lang : 'de',
				toolbar: true,
				arrows: false,
				smallBtn: true,
				buttons: [
					'close'
				],
				beforeLoad: function( instance, slide ) {
					var cap = '<div class="fancybox-caption-wrap">' +
						'<div class="fancybox-toolbar">' +
							'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>' +
						'</div>' +
						'<div class="fancybox-caption"></div>' +
					'</div>';

 					console.info( instance.$refs );
					console.info( slide.opts.$orig );
					console.log($(slide.$slide));
					$(cap).appendTo('.fancybox-image-wrap');
				},
				baseTpl	:
		'<div class="fancybox-container" role="dialog" tabindex="-1">' +
			'<div class="fancybox-bg"></div>' +
			'<div class="fancybox-inner">' +
				'<div class="fancybox-infobar">' +
					'<button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button>' +
					'<div class="fancybox-infobar__body">' +
						'<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
					'</div>' +
					'<button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button>' +
				'</div>' +
				'<div class="fancybox-navigation">' +
					'<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" />' +
					'<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" />' +
				'</div>' +
				'<div class="fancybox-stage">'+
					// '<div class="fancybox-caption-wrap">' +
					// 	'<div class="fancybox-toolbar">' +
					// 		'{{BUTTONS}}' +
					// 	'</div>' +
					// 	'<div class="fancybox-caption"></div>' +
					// '</div>' +
				'</div>' +
			'</div>' +
		'</div>',
			}
		}
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
		console.log(initOptions.pluginOptions);

		//init the plugin
		componentElements.fancybox(initOptions.pluginOptions);
	};

	return self;
}(jQuery);

/**
 * init component
 */
Capitan.Component.fancybox.init({
	//init with defaults...
});
