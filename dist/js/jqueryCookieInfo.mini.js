!function(o){o.cookieInfo=function(e="This website uses cookies to improve browsing experience and provide additional functionality.",n="OK",i="cookie-info"){localStorage.cookieInfo||(o("body").append('<div class="'+i+'"><span>'+e+'</span> <a class="'+i+'__button" href="#">'+n+"</a></div>"),o("."+i+"__button").on("click",function(e){e.preventDefault(),localStorage.cookieInfo=!0,o(this).parent().remove()}))}}(jQuery);