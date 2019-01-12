/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Function.assertBreakpoint=function(a,b){"use strict";var c=Object.keys(Capitan.Vars.breakpoints),d=c.indexOf(Capitan.Vars.currentBreakpoint),e=c.indexOf(b);switch(a){case"eq":return d===e;case"lt":return d<e;case"ht":return d>e;default:return!1}};