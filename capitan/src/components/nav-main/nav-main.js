Capitan.Component.mainMenu = function ($) {

  // public methods / properties
  var self = {
  	//...
  };

  var _ = {
    defaults: {
      componentSelector: '.header',
      pluginOptions: {
        selectors: {
          element: 'header',
          trigger: '.header__close',
          hide: 'header--hide',
          show: 'header--show',
          iconClose: 'util-icon--fa-var-close',
          iconBurger: 'util-icon--fa-var-bars'
        }
      }
    }
  };

  _.bindEvents = function () {
    var o =  _.defaults.pluginOptions;

    Capitan.Vars.$doc.on('click', _.defaults.pluginOptions.selectors.trigger, function (e) {
      e.preventDefault();

      _.toggleMobileHeader();
    });
  };

  _.toggleMobileHeader = function () {
    var o =  _.defaults.pluginOptions;

    if (!$(o.selectors.element).hasClass(o.selectors.show)) {
      $(o.selectors.element).removeClass(o.selectors.hide);
      $(o.selectors.element).addClass(o.selectors.show);

      $(o.selectors.trigger).removeClass(o.selectors.iconBurger);
      $(o.selectors.trigger).addClass(o.selectors.iconClose).text(' Close');
    }
    else {
      $(o.selectors.element).removeClass(o.selectors.show);
      $(o.selectors.element).addClass(o.selectors.hide);

      $(o.selectors.trigger).removeClass(o.selectors.iconClose);
      $(o.selectors.trigger).addClass(o.selectors.iconBurger).text(' Menu');
    }
  }

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
      return console.error('Capitan.Component.mainMenu | componentSelector needed!');
    }

    //get component elements in context (whole document or just a fraction eg. ajax loaded content)
    componentElements = $(initOptions.componentSelector, context ||  document);

    //init the plugin external plugins
    //componentElements.mainMenu(initOptions.pluginOptions);

    _.bindEvents();
  };

  return self;
}(jQuery);


Capitan.Component.mainMenu.init();
