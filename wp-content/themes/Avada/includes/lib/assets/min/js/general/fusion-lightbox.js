window.avadaLightBox = {}, void 0 === window.$ilInstances && (window.$ilInstances = []), window.avadaLightBox.initialize_lightbox = function() {
	"use strict";
	1 === Number(fusionLightboxVars.status_lightbox) && (window.avadaLightBox.set_title_and_caption(), window.avadaLightBox.activate_lightbox())
}, window.avadaLightBox.activate_lightbox = function(a) {
	"use strict";
	var b, c = [];
	void 0 === a && (a = jQuery("body")), a.find('[data-rel^="prettyPhoto["], [rel^="prettyPhoto["], [data-rel^="iLightbox["], [rel^="iLightbox["]').each(function() {
		var a, b, d, e, f, g = ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe", "svg", "mp4", "ogg", "webm"],
			h = 0,
			i = jQuery(this).attr("href");
		for (void 0 === i && (i = ""), a = 0; a < g.length; a++) h += String(i).toLowerCase().indexOf("." + g[a]);
		b = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/, d = i.match(b), d && (h = 1), b = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, d = i.match(b), d && (h = 1), -13 === parseInt(h, 10) && (jQuery(this).addClass("fusion-no-lightbox"), jQuery(this).removeAttr("data-rel rel")), jQuery(this).hasClass("fusion-no-lightbox") || (e = this.getAttribute("data-rel"), null != e && -1 === jQuery.inArray(e, c) && c.push(e), null != (f = this.getAttribute("data-rel")) && (jQuery(this).parents(".gallery").length && (f = f.replace("postimages", jQuery(this).parents(".gallery").attr("id")), jQuery(this).attr("data-rel", f)), -1 === jQuery.inArray(f, c) && c.push(f)))
	}), b = 1, a.find(".tiled-gallery").each(function() {
		jQuery(this).find(".tiled-gallery-item > a").each(function() {
			var a = this.getAttribute("data-rel");
			null == a && (a = "iLightbox[tiled-gallery-" + b + "]", jQuery(this).attr("data-rel", a)), -1 === jQuery.inArray(a, c) && c.push(a)
		}), b++
	}), jQuery.each(c, function(a, b) {
		1 === jQuery('[data-rel="' + b + '"], [rel="' + b + '"]').length ? window.$ilInstances.push(jQuery('[data-rel="' + b + '"], [rel="' + b + '"]').iLightBox(window.avadaLightBox.prepare_options(b, !1))) : window.$ilInstances.push(jQuery('[data-rel="' + b + '"], [rel="' + b + '"]').iLightBox(window.avadaLightBox.prepare_options(b)))
	}), a.find('a[rel="prettyPhoto"], a[data-rel="prettyPhoto"], a[rel="iLightbox"], a[data-rel="iLightbox"]').each(function() {
		var a = jQuery(this).attr("href");
		"" !== a && void 0 !== a && window.$ilInstances.push(jQuery(this).iLightBox(window.avadaLightBox.prepare_options("single")))
	}), a.find("#lightbox-link, .lightbox-link, .fusion-lightbox-link").each(function() {
		var a = jQuery(this).attr("href");
		"" !== a && void 0 !== a && window.$ilInstances.push(jQuery(this).iLightBox(window.avadaLightBox.prepare_options("single")))
	}), Boolean(Number(fusionLightboxVars.lightbox_post_images)) && a.find(".type-post .post-content a, #posts-container .post .post-content a, .fusion-blog-shortcode .post .post-content a, .type-avada_portfolio .project-content a, .fusion-portfolio .fusion-portfolio-wrapper .fusion-post-content, .summary-container .post-content a, .woocommerce-tabs .post-content a").has("img").each(function() {
		var a, b = ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe", "svg", "mp4", "ogg", "webm"],
			c = 0;
		for (a = 0; a < b.length; a++) c += String(jQuery(this).attr("href")).toLowerCase().indexOf("." + b[a]); - 13 === parseInt(c, 10) && (jQuery(this).addClass("fusion-no-lightbox"), jQuery(this).removeAttr("data-rel rel")), -1 !== String(jQuery(this).attr("rel")).indexOf("prettyPhoto") || -1 !== String(jQuery(this).attr("data-rel")).indexOf("prettyPhoto") || -1 !== String(jQuery(this).attr("rel")).indexOf("iLightbox") || -1 !== String(jQuery(this).attr("data-rel")).indexOf("iLightbox") || jQuery(this).hasClass("fusion-no-lightbox") || (jQuery(this).attr("data-caption", jQuery(this).parent().find("p.wp-caption-text").text()), window.$ilInstances.push(jQuery(this).iLightBox(window.avadaLightBox.prepare_options("post"))))
	})
}, window.avadaLightBox.set_title_and_caption = function() {
	"use strict";
	jQuery('a[rel^="prettyPhoto"], a[data-rel^="prettyPhoto"]').each(function() {
		jQuery(this).attr("data-caption") || (jQuery(this).attr("title") ? jQuery(this).attr("data-caption", jQuery(this).attr("title")) : jQuery(this).attr("data-caption", jQuery(this).parents(".gallery-item").find(".gallery-caption").text())), jQuery(this).attr("data-title") || jQuery(this).attr("data-title", jQuery(this).find("img").attr("alt"))
	}), jQuery('a[rel^="iLightbox"], a[data-rel^="iLightbox"]').each(function() {
		jQuery(this).attr("data-caption") || jQuery(this).attr("data-caption", jQuery(this).parents(".gallery-item").find(".gallery-caption").text())
	})
}, window.avadaLightBox.prepare_options = function(a, b) {
	"use strict";
	var c, d, e;
	return void 0 === b && (b = Boolean(Number(fusionLightboxVars.lightbox_gallery))), c = {
		Fast: 100,
		Slow: 800,
		Normal: 400
	}, d = {
		1: !1,
		0: !0
	}, e = {
		skin: fusionLightboxVars.lightbox_skin,
		smartRecognition: !1,
		minScale: .075,
		show: {
			title: Boolean(Number(fusionLightboxVars.lightbox_title)),
			speed: c[fusionLightboxVars.lightbox_animation_speed]
		},
		path: fusionLightboxVars.lightbox_path,
		controls: {
			slideshow: b,
			arrows: Boolean(Number(fusionLightboxVars.lightbox_arrows))
		},
		slideshow: {
			pauseTime: fusionLightboxVars.lightbox_slideshow_speed,
			pauseOnHover: !1,
			startPaused: d[Number(fusionLightboxVars.lightbox_autoplay)]
		},
		overlay: {
			opacity: fusionLightboxVars.lightbox_opacity
		},
		caption: {
			start: Boolean(Number(fusionLightboxVars.lightbox_desc)),
			show: "",
			hide: ""
		},
		isMobile: !0,
		callback: {
			onShow: function(a, b) {
				var c = jQuery(a.currentElement).find('iframe[src*="youtube.com"]');
				jQuery('.ilightbox-container iframe[src*="youtube.com"]').not(c).each(function() {
					this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
				})
			},
			onAfterChange: function(a) {
				var b = jQuery(a.currentElement).find('iframe[src*="youtube.com"]'),
					c = b.length ? b.attr("src") : "";
				jQuery('.ilightbox-container iframe[src*="youtube.com"]').not(b).each(function() {
					this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
				}), b.length && -1 !== c.indexOf("autoplay=1") && b[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
			}
		}
	}, Boolean(Number(fusionLightboxVars.lightbox_social)) && (e.social = {
		buttons: {
			facebook: !0,
			twitter: !0,
			googleplus: !0,
			reddit: !0,
			digg: !0,
			delicious: !0
		}
	}), Boolean(Number(fusionLightboxVars.lightbox_deeplinking)) && (e.linkId = a), e
}, window.avadaLightBox.refresh_lightbox = function() {
	"use strict";
	window.avadaLightBox.set_title_and_caption(), jQuery.each(window.$ilInstances, function(a, b) {
		b.hasOwnProperty("refresh") && b.refresh()
	})
}, void 0 === window.$ilInstances && (window.$ilInstances = []), jQuery(document).ajaxComplete(function() {
	"use strict";
	window.avadaLightBox.refresh_lightbox()
}), jQuery(window).load(function() {
	"use strict";
	window.avadaLightBox.initialize_lightbox()
});