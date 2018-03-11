/**
 * Define Global Namespace
 */
var Capitan = function (out) {
	'use strict';

	out = out || {};

	for (var i = 1; i < arguments.length; i++) {
		if (!arguments[i]) {
			continue;
		}

		for (var key in arguments[i]) {
			if (arguments[i].hasOwnProperty(key)) {
				out[key] = arguments[i][key];
			}
		}
	}

	return out;
}({}, (Capitan || {}), {
	Vars: {
		// path to assets folder
		folderPath: '/dist/',
		// standard breakpoints
		breakpoints: {},
		// mobile first (xs, sm, md, lg, xl)
		currentBreakpoint: 'xs',
		// portrait first (portrait, landscape)
		currentOrientation: 'portrait',
		isIE: window.navigator.userAgent.indexOf('MSIE ') > 0 || // IE <= 10
			window.navigator.userAgent.indexOf('Trident/') > 0 || // IE 11
			window.navigator.userAgent.indexOf('Edge/') > 0  // IE 12
	},
	// CSS components script namespace
	Component: {},
	// functions must return something
	Function: {},
	// everything that has to do with event handling
	Handle: {},
	// Should be used for scripts that have nothing to do with components, e.g. placeholder polyfills, plugins, etc.
	Util: {}
});

// <@delete
// clear basket in develop mode
basket.clear();
// delete@>

// abortion timeout for asset fetching, default 5000ms
basket.timeout = 60000;

/**
 * Load main plugins via basket.js
 */
basket.require(
	{
		url: Capitan.Vars.folderPath + 'js/cap.required-vendor.min.js',
		unique: 0
	}
).then(function () {
	'use strict';

	(function ($) {
		// store commonly used jQuery objects to Vars object
		Capitan.Vars = $.extend(Capitan.Vars, {
			$html: $('html'),
			$window: $(window),
			$doc: $(document),
			$body: $('body')
		});

		// Assets that are necessary globally and on every page, can and will be loaded here (DOM not ready)
		Capitan.Util.fetchBeforeRender = function () {
			return $.import([
				{
					condition: true,
					order: 0,
					fetch: [
						// <@bundle#before-render
						Capitan.Vars.folderPath + 'js/util/console-polyfill.js',
						Capitan.Vars.folderPath + 'js/handle/get-viewport-size.js',
						Capitan.Vars.folderPath + 'js/util/inject-smartresize.js',
						Capitan.Vars.folderPath + 'js/function/assert-breakpoint.js',
						Capitan.Vars.folderPath + 'js/function/get-breakpoint.js',
						Capitan.Vars.folderPath + 'js/function/get-orientation.js',
						Capitan.Vars.folderPath + 'js/function/get-computed-style.js',
						Capitan.Vars.folderPath + 'js/function/check-viewport.js',
						Capitan.Vars.folderPath + 'js/util/set-breakpoints.js',
						Capitan.Vars.folderPath + 'js/handle/set-event-class.js',
						Capitan.Vars.folderPath + 'js/handle/smooth-scroll.js',
						Capitan.Vars.folderPath + 'js/handle/resize-handler.js',
						Capitan.Vars.folderPath + 'components/header/header.js'

						// bundle@>
					],
					callback: [
						{
							method: function () {
								// load components when DOM is ready
								$(function(){
									// store body object to Vars object
									Capitan.Vars = $.extend(Capitan.Vars, {
										$body: $('body')
									});
									// load components
									Capitan.Util.loadComponents();
								})
							}
						}
					],
					unique: '<@unique@>'
				}
			], false);
		};

		// Component loader (DOM is ready)
		Capitan.Util.loadComponents = function () {
			$.import([
				{
					condition: $('[data-role="sg"]'),
					fetch: [
						Capitan.Vars.folderPath + 'js/libs/bra/bra_styleguide-widget/bra_styleguide-widget.js',
						Capitan.Vars.folderPath + 'js/libs/bra/bra_styleguide-widget/bra_styleguide-widget.css'
					],
					unique: '<@unique@>'
				},
				{
					condition: $('.alert'),
					fetch: [
						Capitan.Vars.folderPath + 'components/alert/alert.css'
					],
					unique: '<@unique@>'
				},
				{
					condition: $('.form'),
					fetch: [
						Capitan.Vars.folderPath + 'components/form/form.css'
					],
					unique: '<@unique@>'
				},
				{
					condition: $('.form[data-validate="true"]'),
					fetch: [
						// <@bundle#form-validation
						Capitan.Vars.folderPath + 'js/libs/bra/bra_validate/validate.js',
						Capitan.Vars.folderPath + 'components/form/form-validation.js'
						// bundle@>
					],
					unique: '<@unique@>'
				},
				{
					condition: $('.btn'),
					fetch: [
						Capitan.Vars.folderPath + 'components/button/button.css'
					],
					unique: '<@unique@>'
				},
				{
					condition: $('.teaser'),
					fetch: [
						Capitan.Vars.folderPath + 'components/teaser/teaser.js',
						Capitan.Vars.folderPath + 'components/teaser/teaser.css'
					],
					unique: '<@unique@>'
				},
				{
					condition: $('.scroll-to'),
					fetch: [
						Capitan.Vars.folderPath + 'components/scroll-to/scroll-to.css',
						Capitan.Vars.folderPath + 'components/scroll-to/scroll-to.js'
					],
					unique: '<@unique@>'
				},
				{
					condition: $('.fancybox'),
					fetch: [
						Capitan.Vars.folderPath + 'js/libs/vendor/fancybox/jquery.fancybox.min.css',
						Capitan.Vars.folderPath + 'js/libs/vendor/fancybox/jquery.fancybox.min.js',
						Capitan.Vars.folderPath + 'components/fancybox/fancybox.js',
						Capitan.Vars.folderPath + 'components/fancybox/fancybox.css'
					],
					unique: '<@unique@>'
				},
				{
					condition: $('.muuri'),
					fetch: [
						Capitan.Vars.folderPath + 'js/libs/vendor/velocity/velocity.min.js',
						Capitan.Vars.folderPath + 'js/libs/vendor/hammer/hammer.min.js',
						Capitan.Vars.folderPath + 'js/libs/vendor/muuri/muuri.min.js',
						Capitan.Vars.folderPath + 'components/muuri/muuri.js',
						Capitan.Vars.folderPath + 'components/muuri/muuri.css'
					],
					unique: '<@unique@>'
				},
				{
					condition: $('.instagram'),
					fetch: [
						Capitan.Vars.folderPath + 'components/instagram/instagram.css',
						Capitan.Vars.folderPath + 'components/instagram/instagram.js'
					],
					unique: '<@unique@>'
				},
				{
					condition: $('.meta-nav, .nav-main'),
					fetch: [
						Capitan.Vars.folderPath + 'components/meta-nav/meta-nav.css',
						Capitan.Vars.folderPath + 'components/nav-main/nav-main.js'
					],
					unique: '<@unique@>'
				}// <@newComponent@>
			], true);
		};

		// load before-render bundle before DOM ready
		Capitan.Util.fetchBeforeRender();

	})(jQuery);
}, function () {
	'use strict';

	// <@delete
	console.error('main.js: fetching of scripts and initialization failed');
	// delete@>
});
