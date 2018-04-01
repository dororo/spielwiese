Capitan.Component.slickSlider = function($) {

  // public methods / properties
  var self = {},
    _ = {},
    slickOptions = {},
    optionSets = {
      default: {
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        dots: false,
        arrows: false,
        infinite: true,
        autoplaySpeed: 5000,
        variableWidth: false,
        lazyLoad: 'ondemand',
        fade: false,
        responsive: [{
            breakpoint: Capitan.Vars.breakpoints.xs,
            settings: {
              slidesToShow: 1,
              arrows: false
            }
          },
          {
            breakpoint: Capitan.Vars.breakpoints.md,
            settings: {
              slidesToShow: 1,
              arrows: false
            }
          },
          {
            breakpoint: Capitan.Vars.breakpoints.lg,
            settings: {
              slidesToShow: 1,
              fade: true,
              arrows: true
            }
          }
        ]
      },
      imageGallery: {
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        dots: false,
        arrows: true,
        infinite: false
      }
    };


  /**
   * init plugin
   */
  _.initPlugin = function() {
    self.settings.$obj.each(function() {
      var $this = $(this);

      _.loadSlider($this);
    });

    //_.observe();
  };

  /**
   * initialize slider object
   *
   * @param $obj
   * @param settings
   */
  _.loadSlider = function($obj, settings) {
    var $this = $obj;

    if ($this.hasClass('slick-initialized')) {
      return;
    }

    if (!self.settings) {
      self.settings = settings;
    }

    if (self.settings.sliderNav) {
      var slideCount = $('> *', self.settings.sliderNav).length;
    }

    if (self.settings.preLoader) {
      $this.addClass(self.settings.preLoaderClass);
    }

    // reset slick options for every instance
    slickOptions = {};

    // apply optionset from data attribute if existing
    if ($this.data('optionset') !== '' && $this.data('optionset') !== undefined) {
      if (optionSets[$this.data('optionset')]) {
        $.extend(slickOptions, optionSets[$this.data('optionset')]);

        console.log(optionSets[$this.data('optionset')]);

        if ($this.data('optionset') === 'imageGallery') {
          _.wrapGallery($this);
        }
      } else {
        console.error('The optionset "' + $this.data('optionset') + '" is not defined.');
      }
    } else {
      $.extend(slickOptions, optionSets.default);
    }

    // if settings have been set as a parameter -> use them
    if (settings) {
      $.extend(slickOptions, settings);
    }

    // if settings have been set in backend -> use them
    if ($this.data('slick') !== '' && $this.data('slick') !== undefined) {
      $.extend(slickOptions, $this.data('slick'));
    }

    // if IE -> slider not draggable (IE mobile Bug)
    if (Capitan.Function.getBrowserVersion().browser === 'Explorer' && Capitan.Function.assertBreakpoint('lt', 'md')) {
      $.extend(slickOptions, {
        accessibility: false
      });
    }

    // fix for slider dimensions and height
    if (slickOptions.adaptiveHeight) {
      slick.$slider.slick('slickSetOption', 'adaptiveHeight', false, false);
    }

    // set adaptiveHeight after init
    $this.on('init', function(e, slick) {
      if (slickOptions.adaptiveHeight) {
        slick.$slider.slick('slickSetOption', 'adaptiveHeight', true, true);
      }

      if ($this.hasClass('slick-slider--instagram')) {
        setTimeout(function() {
          slick.$slider.addClass('is-loaded');
        }, 300);
      }
    });

    // Init slick slider
    $this.slick(slickOptions);

    $('.slick-arrow', $this).on('click', function() {
      if ($this.slick('slickGetOption', 'autoplay') === true) {
        $this.slick('slickSetOption', 'autoplay', false, false);
        $this.slick('slickPause');
      }
    });

    $('.slick-dots button', $this).on('click', function() {
      if ($this.slick('slickGetOption', 'autoplay') === true) {
        $this.slick('slickSetOption', 'autoplay', false, false);
        $this.slick('slickPause');
      }
    });

    $this.on('swipe', function() {
      if ($this.slick('slickGetOption', 'autoplay') === true) {
        $this.slick('slickSetOption', 'autoplay', false, false);
        $this.slick('slickPause');
      }
    });

    setTimeout(function() {
      $this.slick('setPosition');
    }, 500);

    //_.appendIMG();
  };

  /**
   * prepare gallery by wrapping links
   * @param $slider
   */
  _.wrapGallery = function($slider) {
    // fix for ck editor in typo3 that always sets a <p> tag around slides
    if ($('> p', $slider).length) {
      $('> p > *', $slider).unwrap();
    }

    // wrap images with fancybox gallery links
    $('> *', $slider).each(function() {
      var $this = $(this),
        caption = $this.attr('title') ? $this.attr('title') : '',
        sum = $('> *', $slider).length,
        index = $this.index(),
        legend = caption ? (index + 1) + '/' + sum + ' – ' + caption : (index + 1) + '/' + sum,
        href = $this.attr('src');

      $this.wrap('<a class="fancybox fancybox--gallery" data-fancybox="gallery-001" data-type="image" data-caption="' + legend + '"  data-options="{buttons:[\'close\']}" href="' + href + '"></a>');
    });

    $('<div class="slick-slider__caption"></div>').insertAfter($slider);

    $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var text = slick.$slider.find('.slick-current [data-caption]').data('caption') ? slick.$slider.find('.slick-current [data-caption]').data('caption') : '';

      $('.slick-slider__caption').text(text);
    });
  };

  /**
   * @constructor
   */
  self.init = function(settings, context) {
    self.settings = $.extend({
      $obj: $('.slick-slider'),
      $paging: $('.slick-slider__paging'),
      sliderNav: '.slick-slider__nav > ul',

      //classes
      sliderLoadingClass: 'slick-slider-loading',
      preLoaderClass: 'preloader',

      //options
      preLoader: true,

      //selectors
      imgWrapperSelector: '> .slick-slider__img-wrapper'
    }, settings);

    if (!self.settings.$obj.length) return;

    self.totalSlides = 0;

    _.initPlugin();
  };

  return self;
}(jQuery);


Capitan.Component.slickSlider.init();
