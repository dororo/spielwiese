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
			componentSelector: '[data-fancybox]',
			pluginOptions: {
				lang: 'de',
				toolbar: false,
				arrows: false,
				smallBtn: false,
				buttons: [
					'close'
				],
				animationEffect: 'fade',
				animationDuration: 1000,
				image: {
					// Wait for images to load before displaying
					// Requires predefined image dimensions
					// If 'auto' - will zoom in thumbnail if 'width' and 'height' attributes are found
					preload: "auto",
				},
				// afterShow: function (instance, slide) {
				// 	console.info(instance, slide);
				//
				// 	// Tip: Each event passes useful information within the event object:
				//
				// 	// Object containing references to interface elements
				// 	// (background, buttons, caption, etc)
				// 	console.info(instance.$refs);
				//
				// 	// Current slide options
				// 	console.info(slide.opts);
				//
				// 	// Clicked element
				// 	console.info(slide.opts.$orig);
				//
				// 	// Reference to DOM element of the slide
				// 	console.info(slide.$slide);
				// }
			}
		}
	};

	_.bindEvents = function (obj) {
		// onInit: $.noop, // When instance has been initialized
		//
		// beforeLoad: $.noop, // Before the content of a slide is being loaded
		// afterLoad: $.noop, // When the content of a slide is done loading
		//
		// beforeShow: $.noop, // Before open animation starts
		// afterShow: $.noop, // When content is done loading and animating
		//
		// beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
		// afterClose: $.noop, // After instance has been closed
		//
		// onActivate: $.noop, // When instance is brought to front
		// onDeactivate: $.noop, // When other instance has been activated

		Capitan.Vars.$doc.on('afterLoad.fb', function (e, instance, slide) {

			var caption = instance.$refs.caption[0].innerHTML;
			var image = slide.opts.$orig[0].innerHTML;
			var customObj = $(instance.$refs.stage[0]).find('.fancybox-custom');
			var target = $(instance.$refs.stage[0]).find('.custom-caption');
			$(customObj).html(image);
			$(target).html(caption);

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
