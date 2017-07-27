/*
 * Capitan formValidation v0.9.1
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.Capitan.de/
 *
 * Date: 2017-01-14
 * MIT License (MIT)
 */

Capitan.Component.scrollTo = function ($) {

	// public methods / properties
	var self = {
		//...
	};

	//private functions / properties
	var _ = {
		defaults: {
			componentSelector: '.scroll-to',
			pluginOptions: {
				selectors: {},
				classes: {
					isActive: 'is-active',
					isHidden: 'is-hidden'
				},
				callbacks: {
					active: false
				},
				errorMessages: {}
			}
		}
	};


	/**
	 * Eventlistener
	 * @private
	 * @options
	 */
	_.bindEvents = function (options) {
		Capitan.Vars.$window.on('scroll', function (e) {
			var	obj = $(_.defaults.componentSelector),
			active = _.defaults.pluginOptions.classes.isActive,
			hidden = _.defaults.pluginOptions.classes.isHidden;

			//console.log('currY:' +  _.getPosition().currY, 'posY:' + _.getPosition().posY);

			if ( _.getPosition().currY > _.getPosition().posY) {
				$(obj).removeClass(hidden);
				$(obj).addClass(active);
			} else {
				$(obj).addClass(hidden);
				$(obj).removeClass(active);
			}
		});
	};

	/**
	 * get position
	 *
	 * @private
	 * @param settings
	 */
	_.getPosition = function () {
		var $this = $('body'),
			stat = $(_.defaults.pluginOptions.callbacks.active),
			posY = $(_.defaults.componentSelector).position().top,
			currY = $this.scrollTop() + posY;

		var result = {
			'currY': currY,
			'posY': posY
		};
		return result;
	}

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
Capitan.Component.scrollTo.init({
	//init with defaults...
});
