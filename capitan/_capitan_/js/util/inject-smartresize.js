/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Util.injectSmartResize=function(a,b){"use strict";var c=function(a,b,c){var d=null;return function(){var e=this,f=arguments;d?clearTimeout(d):c&&a.apply(e,f),d=setTimeout(function(){c||a.apply(e,f),d=null},b||100)}};a.fn[b]=function(a){return a?this.bind("resize",c(a)):this.trigger(b)}}(jQuery,"smartresize");