/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Function.getBreakpoint=function(){"use strict";for(var a=window.innerWidth,b=Object.keys(Capitan.Vars.breakpoints),c="",d=b.length-1;d>=0;d-=1){if(c=Capitan.Vars.breakpoints[b[d]],a>=c)return b[d];if(0===d&&a<c)return b[d]}};