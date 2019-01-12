/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Component.header=function(a){function b(b,c){this.element=b,this.$el=a(this.element),this.options=a.extend(!0,{},d,c),this._defaults=d,this._name=this._defaults.compName,this.init()}var c={},d={componentSelector:".js-header",compName:"Header",elements:{$header:a(".js-header")},selectors:{},classes:{stickyHeaderModifier:"is-header-sticky",hide:"header--hide",show:"header--show"},settings:{}};return d.toggleStickyHeaderClass=function(a){Capitan.Function.assertBreakpoint("ht","sm")&&"add"===a?Capitan.Vars.$body.addClass(d.classes.stickyHeaderModifier):Capitan.Vars.$body.removeClass(d.classes.stickyHeaderModifier)},a.extend(b.prototype,{init:function(){this.options;a(window).on("scroll",function(){a(this).scrollTop()>a(".stage").outerHeight()/2?d.toggleStickyHeaderClass("add"):d.toggleStickyHeaderClass("remove")})}}),d.bindingEvents=function(){Capitan.Vars.$window.on("scroll",function(){var a=null;null!==a&&clearTimeout(a),a=setTimeout(function(){Capitan.Vars.$body.hasClass(d.classes.stickyHeaderModifier)&&d.toggleStickyHeaderClass("remove")},2e3)})},c.init=function(c,e){var f,g=a.extend(!0,{},d,c);g.componentSelector&&(d.bindingEvents(),f=a(g.componentSelector,e||document),a(f).each(function(){a.data(this,g.compName)||a.data(this,g.compName,new b(this,g))}))},c}(jQuery),Capitan.Component.header.init();