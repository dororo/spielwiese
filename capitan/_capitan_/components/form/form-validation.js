/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Component.formValidation=function(a){var b={},c={defaults:{componentSelector:'.form[data-validate="true"]',pluginOptions:{selectors:{},classes:{},callbacks:{},errorMessages:{}}}};return b.init=function(b,d){var e,f=a.extend(!0,{},c.defaults,b);f.componentSelector&&(e=a(f.componentSelector,d||document),e.validate(f.pluginOptions))},b}(jQuery),Capitan.Component.formValidation.init({});