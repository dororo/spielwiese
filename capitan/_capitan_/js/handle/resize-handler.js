/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Handle.resizeHandler=function(){"use strict";var a={};a.handler=function(){var a="",b="";Capitan.Vars.currentBreakpoint=Capitan.Function.getBreakpoint(),Capitan.Vars.currentOrientation=Capitan.Function.getOrientation(),a="on-breakpoint-"+Capitan.Vars.currentBreakpoint,b="on-orientation-"+Capitan.Vars.currentOrientation,Capitan.Vars.$html.hasClass(a)||(Capitan.Vars.$html[0].className=Capitan.Vars.$html[0].className.replace(/\s?on-breakpoint-(xs|sm|md|lg|xl)/g,""),Capitan.Vars.$doc.trigger("on-set-class",[a]),Capitan.Vars.$doc.trigger("on-changed-breakpoint",[Capitan.Vars.currentBreakpoint])),Capitan.Vars.$html.hasClass(b)||(Capitan.Vars.$html[0].className=Capitan.Vars.$html[0].className.replace(/\s?on-orientation-(landscape|portrait)/g,""),Capitan.Vars.$doc.trigger("on-set-class",[b]))},Capitan.Vars.$window.smartresize(a.handler),a.handler()}();