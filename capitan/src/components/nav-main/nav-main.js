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
          navItems: '.nav-main > ul',
          element: 'header',
          trigger: '.header__close',
          iconClose: 'util-icon--fa-var-close',
          iconBurger: 'util-icon--fa-var-bars'
        },
        classes: {
          isCurrent: 'is-current',
          hide: 'header--hide',
          show: 'header--show'
        }
      }
    }
  };

  _.bindEvents = function () {
    var o =  _.defaults.pluginOptions;

    Capitan.Vars.$doc.on('click touchend', o.selectors.trigger, _.defaults.componentSelector, function (e) {
      e.preventDefault();
      _.toggleMobileHeader($(this));
    });

    Capitan.Vars.$window.on('scroll', function (e) {
      e.preventDefault();
      var $target = $(e.target);

      _.closeAll($target, $target.find(o.selectors.trigger));
    });

    // Desktop Navigation Eventlistener

    Capitan.Vars.$doc.on('click', o.selectors.navItems, _.defaults.componentSelector, function (e) {
      e.preventDefault();
      var $target = $(e.target);
      // didaktik: target vs this
      // console.log('target: ',$target);
      // console.log('this: ',$(this));

      _.toggleNavigation($target, $(this));
    });
  };

  /**
  * Only Toggle current Marker, for now
  * @param $target should be a
  * @param $this should be ul
  **/
  _.toggleNavigation = function ($target, $this) {
    var o =  _.defaults.pluginOptions,
      to = o.classes,
      isCurrent = to.isCurrent;

      if (!$target.hasClass(isCurrent) || $target.hasClass(isCurrent)) {
        $this.find('.is-current').removeClass(isCurrent);
        $target.addClass(isCurrent);
      }
      else {
        $target.removeClass(isCurrent);
      }
  };

  /**
  * Mobile Header Toggle
  * @param $this should be header__close
  **/
  _.toggleMobileHeader = function ($this) {
    var o =  _.defaults.pluginOptions,
      to = o.classes;

    if (!$(o.selectors.element).hasClass(to.show)) {
      $(o.selectors.element).removeClass(to.hide);
      $(o.selectors.element).addClass(to.show);

      $this.removeClass(o.selectors.iconBurger);
      $this.addClass(o.selectors.iconClose).text(' Close');
    }
    else {
      _.closeAll($(o.selectors.element), $this);
    }
  };

  /**
  * Set Navigation back to inital state
  * @param $target should be header
  * @param $this should be header__close
  **/
  _.closeAll = function ($target, $this) {
    var o =  _.defaults.pluginOptions,
      to = o.classes;

      if (!$target.hasClass(o.selectors.element)) {
        $(o.selectors.element).removeClass(to.show);
        $(o.selectors.element).addClass(to.hide);
      }
      else {
        $target.removeClass(to.show);
        $target.addClass(to.hide);
      }

      $this.removeClass(o.selectors.iconClose);
      $this.addClass(o.selectors.iconBurger).text(' Menu');
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
