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
				selectors: {
					up: '.scroll-to--up',
					down: '.scroll-to--down',
					footer: 'footer',
					footerHide: 'footer--hide',
					footerShow: 'footer--show'
				},
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
			var	$obj = $(_.defaults.componentSelector),
			active = _.defaults.pluginOptions.classes.isActive,
			hidden = _.defaults.pluginOptions.classes.isHidden,
			$arrowUp = $(_.defaults.pluginOptions.selectors.up),
			$arrowDown = $(_.defaults.pluginOptions.selectors.down),
			$footer = $(_.defaults.pluginOptions.selectors.footer),
			footerHide = _.defaults.pluginOptions.selectors.footerHide,
			footerShow = _.defaults.pluginOptions.selectors.footerShow;

			//console.log('currY:' +  _.getPosition().currY, 'posY:' + _.getPosition().posY);

			if ( _.getPosition().currY > _.getPosition().posY) {
				if ( _.getPosition().currY > Capitan.Vars.$body.outerHeight() - ($('.stage').outerHeight() / 2)) {
					$($arrowDown).removeClass(active);
					$($arrowDown).addClass(hidden);
				}
				else {
					$($arrowDown).removeClass(hidden);
					$($arrowDown).addClass(active);
				}

				$($arrowUp).removeClass(hidden);
				//$($arrowUp).addClass(active);

				$($footer).removeClass(footerShow);
				$($footer).addClass(footerHide);
			}
			else {
				$($arrowUp).removeClass(active);
				$($arrowUp).addClass(hidden);

				$($footer).removeClass(footerHide);
				$($footer).addClass(footerShow);
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
			currY = $this.position().top + posY;

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
