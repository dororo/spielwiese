
/*
* Capitan formValidation v0.9.1
*
* Copyright brandung GmbH & Co.KG
* http://www.Capitan.de/
*
* Date: 2017-01-14
* MIT License (MIT)
*/

Capitan.Component.teaser = function ($) {

	// public methods / properties
	var self = {
		//...
	};

	//private functions / properties
	var _ = {
			defaults: {
				componentSelector: '.teaser--flip',
				pluginOptions: {
					selectors: {
						close: 'util-icon--fa-var-close'
					},
					classes: {},
					callbacks: {},
					errorMessages: {}
				}
			}
		}
	;


	/**
	 * Eventlistener
	 * @private
	 * @options
	 */
	_.bindEvents = function (options) {

		$('body').on('click', '.teaser--flip', function (event) {
			var $this = $(event.currentTarget);

			_.toggle($this);
		});

		$('body').on('click', '.teaser--flip__front', function (event) {
			var $this = $(event.currentTarget);

			_.open($this);
		});

		$('body').on('click', '.util-icon--fa-var-close', function (event) {
			var $this = $(event.currentTarget);

			_.close($this);
		});
	};


	/**
	 * Toggle Animation
	 * @private
	 * @object
	 */
	_.toggle = function (obj) {
		if (Capitan.Function.checkViewport() === true) {
			if (obj.closest(_.defaults.componentSelector).hasClass('flipped')) {
				obj.closest(_.defaults.componentSelector).removeClass('flipped');
			}
			else {
				$('body').find('.flipped').removeClass('flipped');
				obj.closest(_.defaults.componentSelector).addClass('flipped');
			};
		};
	};


	/**
	 * Open
	 * @private
	 * @object
	 */
	_.open = function (obj) {
		if (Capitan.Function.checkViewport() === false) {
			if (!obj.closest(_.defaults.componentSelector).hasClass('flipped')) {
				$('body').find('.flipped').removeClass('flipped');
				obj.closest(_.defaults.componentSelector).addClass('flipped');
			} else {
				_.toggle(obj);
			};
		};
	};

	/**
	 * Close
	 * @private
	 * @object
	 */
	_.close = function (obj) {
		if (Capitan.Function.checkViewport() === false) {
			if (obj.closest(_.defaults.componentSelector).hasClass('flipped') && obj.find(_.defaults.pluginOptions.selectors.close)) {
				obj.closest(_.defaults.componentSelector).removeClass('flipped');
			};
		};
	};


	/**
	 * Init component
	 *
	 * @public
	 * @param settings
	 */
	self.init = function (settings, context) {
		var initOptions = $.extend(true, {}, _.defaults, settings);

		_.bindEvents();
	};

	return self;
}(jQuery);

/**
 * init component
 */
Capitan.Component.teaser.init({
    //init with defaults...
});
