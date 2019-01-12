/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Function.getViewport=function(){var a={top:Capitan.Vars.$window.scrollTop(),left:Capitan.Vars.$window.scrollLeft()};a.right=a.left+Capitan.Vars.$window.width(),a.bottom=a.top+Capitan.Vars.$window.height();var b=this.offset();return b.right=b.left+this.outerWidth(),b.bottom=b.top+this.outerHeight(),!(a.right<b.left||a.left>b.right||a.bottom<b.top||a.top>b.bottom)};