var spies=$("[data-spy]"),activeSpy=!1,windowWidth=$(window).width();export default function ScrollSpy(){if(windowWidth<=550)return $("header a").removeClass("active"),$("header a[href='#accueil']").addClass("active");var e=$(window).scrollTop()+$(window).height()/2,i=null;spies.each(function(){e>$(this).offset().top&&(i=$(this).attr("id"))}),i!==activeSpy&&(activeSpy=i,$("header a").removeClass("active"),$(`header a[href='#${activeSpy}']`).addClass("active"))}$(window).resize(function(){windowWidth=$(window).width(),ScrollSpy()});