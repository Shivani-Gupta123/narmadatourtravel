jQuery(function(e){if("undefined"!=typeof ezTOC){function t(){if(0!==e(".ez-toc-widget-container.ez-toc-affix").length){var t=30;void 0!==ezTOC.scroll_offset&&(t=parseInt(ezTOC.scroll_offset)),e(ezTOC.affixSelector).stick_in_parent({inner_scrolling:!1,offset_top:t})}if(e.fn.shrinkTOCWidth=function(){e(this).css({width:"auto",display:"table"}),/MSIE 7\./.test(navigator.userAgent)&&e(this).css("width","")},void 0!==ezTOC.visibility_hide_by_default){var i=e(".ez-toc-toggle:not(.ez-toc-loaded),.ez-toc-widget-sticky-toggle:not(.ez-toc-loaded)"),o=ezTOC.visibility_hide_by_default;e.each(i,function(t,i){var c=e(this);e(c).addClass("ez-toc-loaded");var n=e(c).parents("#ez-toc-container,#ez-toc-widget-container,#ez-toc-widget-sticky-container").find("ul.ez-toc-list,ul.ez-toc-widget-sticky-list");e(n).hasClass("eztoc-toggle-hide-by-default")&&(o=1),"undefined"!=typeof Cookies&&(Cookies?(1==Cookies.get("ezTOC_hidetoc-"+t)?e(c).data("visible",!1):e(c).data("visible",!0),Cookies.remove("ezTOC_hidetoc-"+t)):(e(c).data("visible",!0),Cookies.remove("ezTOC_hidetoc-"+t))),o&&e(c).data("visible",!1),e(c).data("visible")||n.hide(),e(c).on("click",function(i){i.preventDefault();let c=document.querySelector("#ez-toc-container");if(c)c.classList.toggle("toc_close");else{let l=document.querySelector(".ez-toc-widget-container,.ez-toc-widget-sticky-container");l.classList.toggle("toc_close")}e(this).data("visible")?(e(this).data("visible",!1),"undefined"!=typeof Cookies&&Cookies&&(o?Cookies.set("ezTOC_hidetoc-"+t,null,{path:"/"}):Cookies.set("ezTOC_hidetoc-"+t,"1",{expires:30,path:"/"})),n.hide("fast")):(e(this).data("visible",!0),"undefined"!=typeof Cookies&&Cookies&&(o?Cookies.set("ezTOC_hidetoc-"+t,"1",{expires:30,path:"/"}):Cookies.set("ezTOC_hidetoc-"+t,null,{path:"/"})),n.show("fast"))})})}var c,n,l,a=e("span.ez-toc-section").toArray(),s=(c=a,c.reduce(function(t,i){var o;return t[i.id]=e('.ez-toc-widget-container .ez-toc-list a[href="#'+e(o=i).attr("id")+'"]'),t},{})),r=e.map(s,function(e,t){return e}),d=(n=5,void 0!==ezTOC.smooth_scroll&&1===parseInt(ezTOC.smooth_scroll)&&(n=void 0!==ezTOC.scroll_offset?parseInt(ezTOC.scroll_offset):30),l=e("#wpadminbar"),l.length&&(n+=l.height()),n);function h(){var t,i,o,c,n,l=(t=d,i=a,o=e(window).scrollTop()+t+1,c=i[0],n=o-e(c).offset().top,i.forEach(function(t){var i=o-e(t).offset().top;i>0&&i<n&&(n=i,c=t)}),c);if(l){var h,f,z,u,g,v,p,b,m,k=s[l.id];(function e(t,i){i.forEach(function(e){t!==e&&e.parent().hasClass("active")&&e.parent().removeClass("active")})})(k,r),(z=(h=k).parent()).hasClass("active")||z.addClass("active"),m=(u=f=z,g=e(u),v=g.html(),g.parent().append('<li id="ez-toc-height-test" class="active">'+v+"</li>"),p=e("#ez-toc-height-test"),b=p.height(),p.remove(),b-(g.children("ul").first().height()||0)),e(".ez-toc-widget-container ul.ez-toc-list li.active").css("height",m+"px")}}function f(){e(window).off("load resize scroll",h)}a.length>0&&e(".ez-toc-widget-container").length&&e(window).on("load resize scroll",h)}e("#ez-toc-container").length&&!e("#ez-toc-container .ez-toc-toggle label span").html()&&e("#ez-toc-container .ez-toc-toggle label").html(ezTOC.fallbackIcon),ezTOC.init=function(){t()},t(),void 0!==ezTOC.ajax_toggle&&1===parseInt(ezTOC.ajax_toggle)&&e(document).ajaxComplete(function(){t()})}e(document).on("click","#ez-toc-open-sub-hd",function(t){e(this).attr("id","ez-toc-open-sub-hd-active"),t.preventDefault()}),e(document).on("click","#ez-toc-open-sub-hd-active",function(t){e(this).attr("id","ez-toc-open-sub-hd"),t.preventDefault()}),e("#ez-toc-more-links-enabler").click(function(){e(".ez-toc-more-link").show(),e("#ez-toc-more-links-enabler").hide(),e("#ez-toc-more-links-disabler").attr("style","display:inline-block")}),e("#ez-toc-more-links-disabler").click(function(){e(".ez-toc-more-link").hide(),e("#ez-toc-more-links-enabler").show(),e("#ez-toc-more-links-disabler").hide()}),1===parseInt(ezTOC.chamomile_theme_is_on)&&e("#ez-toc-container").find(".hamburger").remove()});