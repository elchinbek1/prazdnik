$(document).ready(function(){$(".burger-menu").click(function(){$(this).toggleClass("active"),$(".header-mobile-menu").toggleClass("active"),$("body").toggleClass("_active")}),$(".js-button-campaign").click(function(){$("body").addClass("active"),$(".js-overlay-campaign").fadeIn(),$(".js-overlay-campaign").addClass("disabled")}),$(".js-close-campaign").click(function(){$(".js-overlay-campaign").fadeOut(),$("body").removeClass("active")}),$(document).mouseup(function(e){var a=$(".js-popup-campaign");e.target!=a[0]&&0===a.has(e.target).length&&($(".js-overlay-campaign").fadeOut(),$("body").removeClass("active"))});new Swiper(".calendar-slider",{slidesPerView:"auto",slidesPerView:2,spaceBetween:15,autoplay:{delay:1500,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40}}}),new Swiper(".animation-slider",{slidesPerView:"auto",slidesPerView:2,spaceBetween:15,autoplay:{delay:1500,disableOnInteraction:!1},navigation:{nextEl:".bubble-next",prevEl:".bubble-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:3,spaceBetween:40}}}),new Swiper(".uprage-slider",{slidesPerView:"auto",slidesPerView:4,spaceBetween:15,autoplay:{delay:1500,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:4,spaceBetween:40}}});class e{constructor(e){$(e).find(".tab-content").not(".active").hide(),$(e).find(".tab-item").click(function(){$(e).find(".tab-item").removeClass("active").eq($(this).index()).addClass("active"),$(e).find(".tab-content").hide().eq($(this).index()).slideDown(200)})}}var a=$(".select-show");for(let i of a)i=new e(i);$(".small-image").click(function(e){e.preventDefault(),$(".big-img img").attr("src",$(this).attr("href"))})});