/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Util.consolePolyfill=function(){"use strict";window.console&&console.log||function(){for(var a=function(){},b=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],c=b.length,d=window.console={};c;)d[b[c]]=a,c-=1}()}();