/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Function.checkViewport=function(){"use strict";var a=window.innerWidth,b=window.innerHeight,c=a<992;return Capitan.Vars.$window.on("resize",function(d){return a=$(this).width(),b=$(this).height(),c=!(a>=992)}),c};