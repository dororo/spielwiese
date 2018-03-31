Capitan.Component.instagram = function ($) {

  // public methods / properties
  var self = {
  	//...
  };

  var _ = {
    defaults: {
      componentSelector: '.instagram',
      pluginOptions: {
        clientId: 'secret',
        clientStatus: 'Sandbox Mode',
        redirectUri: window.location,
        selectors: {
          data: '.output',
          trigger: '.instagram-redirect',
          getAuth: 'instagram-auth'
        }
      }
    }
  };

  /**
  * Event Observer
  *
  */
  _.bindEvents = function () {
    var o = _.defaults.pluginOptions;

    Capitan.Vars.$doc.on('click', _.defaults.pluginOptions.selectors.trigger, function (e) {
      e.preventDefault();
      _.callInstaApi();
    });
  };

  _.callInstaApi = function () {
    var o = _.defaults.pluginOptions,
      uri = 'https://api.instagram.com/oauth/authorize/?client_id=' + o.clientId + '&redirect_uri=' +  o.redirectUri + '&response_type=token',
      token = '';

      window.open(uri);

      token = decodeURIComponent(window.location.search.substring(1).split("=")[0]);
console.log(token);

      _.setCookie('oauth', JSON.stringify(token), 30);

      // if (decodeURIComponent(window.location.search.substring(1).split("=")[0]) === 'access_token') {
      //   _.setCookie('oauth', JSON.stringify(token), 30);
      // }

  };


  /**
  *
  *
  **/
  _.getUrlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
  };


  /**
	 * get cookie helper
	 *
	 * @public
	 * @param name of cookie
	 * @param decode
	 * @returns {*}
	 */
	_.getCookie = function(name, decode) {
		var nameEQ = name + '=',
			ca = document.cookie.split(';'),
			c = null;

		if (decode === undefined) {
			decode = false;
		}

		for(var i=0;i < ca.length;i++) {
			c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1,c.length);
			}
			if (c.indexOf(nameEQ) === 0) {
				if(decode) {
					return decodeURIComponent(c.substring(nameEQ.length,c.length));
				} else {
					return c.substring(nameEQ.length,c.length);
				}

			}
		}
		return null;
	};

	/**
	 * set cookie helper
	 *
	 * @public
	 * @param name of cookie
	 * @param value of cookie
	 * @param days expired
	 * @param encode
	 * @returns {boolean}gr
	 *
	 */
	_.setCookie = function(name, value, days, encode){
		var date = new Date(),
			expires = '';

		if (days) {
			date.setTime(date.getTime()+(days*24*60*60*1000));
			expires = '; expires=' + date.toGMTString();
		}

		if (encode === undefined) {
			encode = false;
		}

		if(encode) {
			document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
		} else {
			document.cookie = name + '=' + value + expires + '; path=/';
		}

		return true;
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
      return console.error('Capitan.Component.instagram | componentSelector needed!');
    }

    //get component elements in context (whole document or just a fraction eg. ajax loaded content)
    componentElements = $(initOptions.componentSelector, context ||  document);

    //init the plugin external plugins
    //componentElements.instagram(initOptions.pluginOptions);

    _.bindEvents();
  };

  return self;
} (jQuery);

Capitan.Component.instagram.init ({

});
