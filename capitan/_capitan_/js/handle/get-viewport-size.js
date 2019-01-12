/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Handle.getViewportSize=function(){"use strict";var a={};a.handler=function(a){$(this).width(),$(this).height()},Capitan.Vars.$window.on("resize",a.handler)}();