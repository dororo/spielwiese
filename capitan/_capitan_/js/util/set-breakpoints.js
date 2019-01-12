/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Util.setBreakpoints=function(){"use strict";Capitan.Vars.breakpoints=JSON.stringify(Capitan.Function.getComputedStyle("body",":before","content"))}();