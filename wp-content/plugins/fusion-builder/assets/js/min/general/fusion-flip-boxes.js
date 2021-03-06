! function(f) {
	"use strict";
	f.fn.fusionCalcFlipBoxesHeight = function() {
		var i, n, o = f(this),
			e = 0;
		o.find(".flip-box-front").css("min-height", ""), o.find(".flip-box-back").css("min-height", ""), o.find(".flip-box-front-inner").css("margin-top", ""), o.find(".flip-box-back-inner").css("margin-top", ""), o.css("min-height", ""), setTimeout(function() {
			o.find(".flip-box-front").outerHeight() > o.find(".flip-box-back").outerHeight() ? (n = o.find(".flip-box-front").height(), i = o.find(".flip-box-front").outerHeight(), e = (n - o.find(".flip-box-back-inner").outerHeight()) / 2, o.find(".flip-box-back").css("min-height", i), o.css("min-height", i), o.find(".flip-box-back-inner").css("margin-top", e)) : (n = o.find(".flip-box-back").height(), i = o.find(".flip-box-back").outerHeight(), e = (n - o.find(".flip-box-front-inner").outerHeight()) / 2, o.find(".flip-box-front").css("min-height", i), o.css("min-height", i), o.find(".flip-box-front-inner").css("margin-top", e))
		}, 100)
	}
}(jQuery), jQuery(window).load(function() {
	jQuery(".flip-box-inner-wrapper").each(function() {
		jQuery(this).fusionCalcFlipBoxesHeight()
	}), jQuery(window).resize(function() {
		jQuery(".flip-box-inner-wrapper").each(function() {
			jQuery(this).fusionCalcFlipBoxesHeight()
		})
	})
}), jQuery(document).ready(function() {
	jQuery(".fusion-flip-box").mouseover(function() {
		jQuery(this).addClass("hover")
	}), jQuery(".fusion-flip-box").mouseout(function() {
		jQuery(this).removeClass("hover")
	})
});