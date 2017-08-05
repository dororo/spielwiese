/*
 * Capitan formValidation v0.9.1
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.Capitan.de/
 *
 * Date: 2017-01-14
 * MIT License (MIT)
 */

Capitan.Component.muuri = function ($) {

	// public methods / properties
	var self = {
		//...
	};

	//private functions / properties
	var _ = {
		defaults: {
			componentSelector: '.muuri',
			pluginOptions: {
		    // Item elements
		    items: '*',

		    // Default show animation
		    showDuration: 300,
		    showEasing: 'ease',

		    // Default hide animation
		    hideDuration: 300,
		    hideEasing: 'ease',

		    // Custom show/hide animations
		    showAnimation: null,
		    hideAnimation: null,

		    // Item's visible/hidden state styles
		    visibleStyles: {
		      opacity: 1,
		      scale: 1
		    },
		    hiddenStyles: {
		      opacity: 0,
		      scale: 0.5
		    },

		    // Layout
		    layout: {
		      fillGaps: true,
		      horizontal: false,
		      alignRight: false,
		      alignBottom: false,
		      rounding: true
		    },
		    layoutOnResize: 100,
		    layoutOnInit: true,
		    layoutDuration: 300,
		    layoutEasing: 'ease',

		    // Sorting
		    sortData: null,

		    // Drag & Drop
		    dragEnabled: true,
		    dragContainer: document.body,
		    dragStartPredicate: {
		      distance: 0,
		      delay: 0,
		      handle: false
		    },
		    dragAxis: null,
		    dragSort: true,
		    dragSortInterval: 100,
		    dragSortPredicate: {
		      threshold: 50,
		      action: 'move'
		    },
		    dragSortGroup: null,
		    dragSortWith: null,
		    dragReleaseDuration: 300,
		    dragReleaseEasing: 'ease',
		    dragHammerSettings: {
		      touchAction: 'none'
		    },

		    // Classnames
		    containerClass: 'muuri',
		    itemClass: 'muuri-item',
		    itemVisibleClass: 'muuri-item-shown',
		    itemHiddenClass: 'muuri-item-hidden',
		    itemPositioningClass: 'muuri-item-positioning',
		    itemDraggingClass: 'muuri-item-dragging',
		    itemReleasingClass: 'muuri-item-releasing'

				}
		}
	};

	_.bindEvents = function (obj) {

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
			return console.error('Capitan.Component.muuri | componentSelector needed!');
		}

		//get component elements in context (whole document or just a fraction eg. ajax loaded content)
		componentElements = $(initOptions.componentSelector, context ||  document);
		//console.log(initOptions.pluginOptions);

		//init the plugin
		var grid = new Muuri(initOptions.componentSelector, initOptions.pluginOptions);

		console.log('muuri initialized');

		_.bindEvents();
	};

	return self;
}(jQuery);

/**
 * init component
 */
Capitan.Component.muuri.init({
	//init with defaults...
});
