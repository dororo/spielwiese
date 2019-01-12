/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Handle.setEventClass=function(){"use strict";var a={};a.handler=function(a,b){Capitan.Vars.$html.addClass(b)},Capitan.Vars.$doc.on("on-set-class",a.handler)}();