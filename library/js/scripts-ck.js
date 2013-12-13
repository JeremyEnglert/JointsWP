/*
Joints Scripts File

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/// IE8 ployfill for GetComputed Style (for Responsive Script below)
window.getComputedStyle||(window.getComputedStyle=function(e,t){this.el=e;this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;t=="float"&&(t="styleFloat");n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()}));return e.currentStyle[t]?e.currentStyle[t]:null};return this});jQuery(document).ready(function(e){var t=e(window).width();t<481;t>481;t>=768&&e(".comment img[data-gravatar]").each(function(){e(this).attr("src",e(this).attr("data-gravatar"))});t>1030});(function(e){function c(){n.setAttribute("content",s);o=!0}function h(){n.setAttribute("content",i);o=!1}function p(t){l=t.accelerationIncludingGravity;u=Math.abs(l.x);a=Math.abs(l.y);f=Math.abs(l.z);!e.orientation&&(u>7||(f>6&&a<8||f<8&&a>6)&&u>5)?o&&h():o||c()}if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1))return;var t=e.document;if(!t.querySelector)return;var n=t.querySelector("meta[name=viewport]"),r=n&&n.getAttribute("content"),i=r+",maximum-scale=1",s=r+",maximum-scale=10",o=!0,u,a,f,l;if(!n)return;e.addEventListener("orientationchange",c,!1);e.addEventListener("devicemotion",p,!1)})(this);(function(e){e(document).foundation()})(jQuery);