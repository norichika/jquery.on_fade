/*
 * jQuery Fade Plugin v1.0
 * https://github.com/norichika/jquery.on_fade
 *
 * Copyright 2013, Norichika Yamanaka
 * Dual licensed under the MIT licenses.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function ($) {
	var methods = {
		init: function(options) {
			var opts = $.extend($.fn.on_fade.defaults, options);
			return this.each(function() {
				var $this = $(this);

				// RollOver Method
				$this.on("mouseenter.on_fade mouseleave.on_fade", opts.overObj, function(event){
					if (event.type === 'mouseenter') {
						$(this).stop(true, false).fadeTo(opts.overTime, opts.overOpacity, opts.overEasing);
					} else {
						$(this).stop(true, false).fadeTo(opts.overTime, 1.0, opts.overEasing);
					}
				});
			});
		}
	};

	$.fn.on_fade = function(method) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.on_rollover' );
		}
	};
	$.fn.on_fade.defaults = {
			overObj: ".imgfade",
			overEasing: "swing",
			overTime: "500",
			overOpacity: "0.8"
	};
})(jQuery);
