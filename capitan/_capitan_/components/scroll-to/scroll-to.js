/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Component.scrollTo=function(a){var b={},c={defaults:{componentSelector:".scroll-to",pluginOptions:{selectors:{up:".scroll-to--up",down:".scroll-to--down",footer:"footer",footerHide:"footer--hide",footerShow:"footer--show"},classes:{isActive:"is-active",isHidden:"is-hidden"},callbacks:{active:!1},errorMessages:{}}}};return c.bindEvents=function(b){Capitan.Vars.$window.on("scroll",function(b){var d=(a(c.defaults.componentSelector),c.defaults.pluginOptions.classes.isActive),e=c.defaults.pluginOptions.classes.isHidden,f=a(c.defaults.pluginOptions.selectors.up),g=a(c.defaults.pluginOptions.selectors.down),h=a(c.defaults.pluginOptions.selectors.footer),i=c.defaults.pluginOptions.selectors.footerHide,j=c.defaults.pluginOptions.selectors.footerShow;c.getPosition().currY>c.getPosition().posY?(c.getPosition().currY>Capitan.Vars.$body.outerHeight()-a(".stage").outerHeight()/2?(a(g).removeClass(d),a(g).addClass(e)):(a(g).removeClass(e),a(g).addClass(d)),a(f).removeClass(e),a(h).removeClass(j),a(h).addClass(i)):(a(f).removeClass(d),a(f).addClass(e),a(h).removeClass(i),a(h).addClass(j))})},c.getPosition=function(){var b=a("body"),d=(a(c.defaults.pluginOptions.callbacks.active),a(c.defaults.componentSelector).position().top);return{currY:b.position().top+d,posY:d}},b.init=function(b,d){a.extend(!0,{},c.defaults,b);c.bindEvents()},b}(jQuery),Capitan.Component.scrollTo.init({});