/**
 * Capitan header.js v1.0.0
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2017-06-23
 * MIT License (MIT)
 */

Capitan.Component.header = (function($) {
    var self = {},
        _ = {
            componentSelector: '.js-header',
            compName: 'Header',
            elements: {
                $header: $('.js-header')
            },
            selectors: {},
            classes: {
                stickyHeaderModifier: 'is-header-sticky',
                hide: 'header--hide',
                show: 'header--show'
            },
            settings: {}
        };

    /**
     * Default Component constructor
     *
     * @param element
     * @param options
     * @constructor
     */
    function Component(element, options) {
        this.element = element;
        this.$el = $(this.element);

        //extend defaults with given options and optionsFromHTML
        this.options = $.extend(true, {}, _, options);

        this._defaults = _;
        this._name = this._defaults.compName;

        this.init();
    };

    /**
    * toggle sticky header
    * @param action
    */
    _.toggleStickyHeaderClass = function(action) {
      if(Capitan.Function.assertBreakpoint('ht', 'sm')) {
        if (action === 'add') {
          Capitan.Vars.$body.addClass(_.classes.stickyHeaderModifier);
        }
        else if ('remove') {
          Capitan.Vars.$body.removeClass(_.classes.stickyHeaderModifier);
        }
      }
      else {
        Capitan.Vars.$body.removeClass(_.classes.stickyHeaderModifier);
      }
    };

    // plugin implementation
    $.extend(Component.prototype, {
        // initialization logic
        init: function() {
            var self = this,
                o = this.options;

            $(window).on('scroll', function() {
                var currentPos = $(this).scrollTop();

                if (currentPos > ($('.stage').outerHeight() / 2)) {
                    _.toggleStickyHeaderClass('add');
                }
                else {
                    _.toggleStickyHeaderClass('remove');
                }

            });
        }
    });

	_.bindingEvents = function () {
		Capitan.Vars.$window.on('scroll', function() {
      var scrollTimer = null;

      // Check for timeout callback of scroll Event
      if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
      }

      // no scroll event triggered after 2s - null- scroll end, then fire function
      scrollTimer = setTimeout( function () {
        if (Capitan.Vars.$body.hasClass(_.classes.stickyHeaderModifier)) {
          _.toggleStickyHeaderClass('remove');
        }
      }, 2000);
		});
	};


  /**
   * Init component
   *
   * @param settings
   * @param context
   */
  self.init = function(settings, context) {
      var componentElements,
          initOptions = $.extend(true, {}, _, settings);

      console.info('Init: ' + _.compName);

      if(!initOptions.componentSelector){
          return console.error('Capitan.Component.header | componentSelector needed!');
      }

      _.bindingEvents();

      //get component elements in context (whole document or just a fraction eg. ajax loaded content)
      componentElements = $(initOptions.componentSelector, context || document);

      $(componentElements).each(function () {
          //check if plugin was already initialized on this element
          if (!$.data(this, initOptions.compName)) {
              // initialize plugin on this element and save reference to instance in data
              $.data(this, initOptions.compName, new Component(this, initOptions));
          }
      });
  };

  return self;
})(jQuery);

/**
 * Init Component
 */
Capitan.Component.header.init();
