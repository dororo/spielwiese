/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Function.getBrowserVersion=function(){var a={init:function(){this.browser=this.searchString(this.dataBrowser)||"Other",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"Unknown"},searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string;if(this.versionSearchString=a[b].subString,-1!==c.indexOf(a[b].subString))return a[b].identity}},searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(-1!==b){var c=a.indexOf("rv:");return"Trident"===this.versionSearchString&&-1!==c?parseFloat(a.substring(c+3)):parseFloat(a.substring(b+this.versionSearchString.length+1))}},dataBrowser:[{string:navigator.userAgent,subString:"Edge",identity:"MS Edge"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Opera",identity:"Opera"},{string:navigator.userAgent,subString:"OPR",identity:"Opera"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"Safari",identity:"Safari"}]};return a.init(),{browser:a.browser,version:a.version}};