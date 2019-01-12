/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Function.getComputedStyle=function(a,b,c){"use strict";return b=b||null,window.getComputedStyle(document.querySelector(a),b).getPropertyValue(c).replace(/\\/g,"").replace(/(^("|')|("|')$)/g,"")};