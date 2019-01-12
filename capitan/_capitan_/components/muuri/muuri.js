/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Component.muuri=function(a){var b={},c={defaults:{componentSelector:".muuri",pluginOptions:{items:"*",showDuration:300,showEasing:"ease",hideDuration:300,hideEasing:"ease",showAnimation:null,hideAnimation:null,visibleStyles:{opacity:1,scale:1},hiddenStyles:{opacity:0,scale:.5},layout:{fillGaps:!0,horizontal:!1,alignRight:!1,alignBottom:!1,rounding:!0},layoutOnResize:100,layoutOnInit:!0,layoutDuration:300,layoutEasing:"ease",sortData:null,dragEnabled:!0,dragContainer:document.body,dragStartPredicate:{distance:0,delay:0,handle:!1},dragAxis:null,dragSort:!0,dragSortInterval:100,dragSortPredicate:{threshold:50,action:"move"},dragSortGroup:null,dragSortWith:null,dragReleaseDuration:300,dragReleaseEasing:"ease",dragHammerSettings:{touchAction:"none"},containerClass:"muuri",itemClass:"muuri-item",itemVisibleClass:"muuri-item-shown",itemHiddenClass:"muuri-item-hidden",itemPositioningClass:"muuri-item-positioning",itemDraggingClass:"muuri-item-dragging",itemReleasingClass:"muuri-item-releasing"}}};return c.bindEvents=function(a){},b.init=function(b,d){var e=a.extend(!0,{},c.defaults,b);if(e.componentSelector){a(e.componentSelector,d||document);new Muuri(e.componentSelector,e.pluginOptions);c.bindEvents()}},b}(jQuery),Capitan.Component.muuri.init({});