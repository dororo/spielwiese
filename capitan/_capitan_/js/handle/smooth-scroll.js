/**
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 *
 * Date: 2019-01-12
 * MIT License (MIT)
 */

Capitan.Handle.smoothScroll=function(){"use strict";var a={classes:{hashes:$('a[href*="#"]').not('[href="#"]').not('[href="#0"]')}};a.handler=function(a){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=$(this.hash);b=b.length?b:$("[name="+this.hash.slice(1)+"]"),b.length&&(a.preventDefault(),$("html, body").animate({scrollTop:b.offset().top},1e3,function(){var a=$(b);if(a.focus(),a.is(":focus"))return!1;a.attr("tabindex","-1"),a.focus()}))}},a.classes.hashes.on("click",a.handler)}();