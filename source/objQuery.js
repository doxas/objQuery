/* ----------------------------------------------------------------------------
 * objQuery v0.0.1
 *
 * obj file loader plugin
 * ------------------------------------------------------------------------- */;

(function($){
    $.fn.sample = function(options){
        var defaults = {
           name   : 'Suzuki Taro',
           age    : 20
        };
        var params = $.extend(defaults, options);
		 console.log(params.name + ":" + params.age);

        return(this);
    };
})(jQuery);
