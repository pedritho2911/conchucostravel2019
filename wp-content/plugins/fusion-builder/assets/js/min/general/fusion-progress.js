! function(i) {
	"use strict";
	i.fn.fusion_draw_progress = function() {
		var s, r = i(this);
		i("html").hasClass("lt-ie9") ? (r.css("visibility", "visible"), r.each(function() {
			s = r.find(".progress").attr("aria-valuenow"), r.find(".progress").css("width", "0%"), r.find(".progress").animate({
				width: s + "%"
			}, "slow")
		})) : r.find(".progress").css("width", function() {
			return i(this).attr("aria-valuenow") + "%"
		})
	}
}(jQuery), jQuery(document).ready(function() {
	jQuery(".fusion-progressbar").not(".fusion-modal .fusion-progressbar").each(function() {
		var s = getWaypointOffset(jQuery(this));
		jQuery(this).waypoint(function() {
			jQuery(this).fusion_draw_progress()
		}, {
			triggerOnce: !0,
			offset: s
		})
	})
}), jQuery(window).load(function() {
	jQuery(".fusion-modal .fusion-progressbar").on("appear", function() {
		jQuery(this).fusion_draw_progress()
	})
});