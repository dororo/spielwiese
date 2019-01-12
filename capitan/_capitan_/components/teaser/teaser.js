/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Component.teaser=function(a){var b={},c={defaults:{componentSelector:".teaser--flip",pluginOptions:{selectors:{close:"util-icon--fa-var-close"},classes:{},callbacks:{},errorMessages:{}}}};return c.bindEvents=function(b){a("body").on("click",".teaser--flip",function(b){var d=a(b.currentTarget);c.toggle(d)}),a("body").on("click",".teaser--flip__front",function(b){var d=a(b.currentTarget);c.open(d)}),a("body").on("click",".util-icon--fa-var-close",function(b){var d=a(b.currentTarget);c.close(d)})},c.toggle=function(b){!0===Capitan.Function.checkViewport()&&(b.closest(c.defaults.componentSelector).hasClass("flipped")?b.closest(c.defaults.componentSelector).removeClass("flipped"):(a("body").find(".flipped").removeClass("flipped"),b.closest(c.defaults.componentSelector).addClass("flipped")))},c.open=function(b){!1===Capitan.Function.checkViewport()&&(b.closest(c.defaults.componentSelector).hasClass("flipped")?c.toggle(b):(a("body").find(".flipped").removeClass("flipped"),b.closest(c.defaults.componentSelector).addClass("flipped")))},c.close=function(a){!1===Capitan.Function.checkViewport()&&a.closest(c.defaults.componentSelector).hasClass("flipped")&&a.find(c.defaults.pluginOptions.selectors.close)&&a.closest(c.defaults.componentSelector).removeClass("flipped")},b.init=function(b,d){a.extend(!0,{},c.defaults,b);c.bindEvents()},b}(jQuery),Capitan.Component.teaser.init({});