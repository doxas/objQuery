/* ----------------------------------------------------------------------------
 * objQuery v0.0.1
 *
 * obj file loader plugin
 *
 * todo
 *      複数オブジェクト渡された場合
 * ------------------------------------------------------------------------- */;

(function($){
    // constant
    var objQuery = function(option, callBack){
        this.option = option;
        var x = new Ajax(function(){
            callBack();
        });
        x.initialize();
        x.requestGet(opstion.path);
    };

    // class
    function Ajax(callBackFunction){
        var response = '';
        this.h;
        this.callBack = null;
        if(callBackFunction){
            this.callBack = function(){
                if(this.readyState === 4){
                    response = this.responseText;
                    callBackFunction();
                }
            };
        }else{
            this.callBack = null;
        }
        this.initialize = function(){
            if(window.XMLHttpRequest){this.h = new XMLHttpRequest();}
            if(this.h){
                response = '';
                return true;
            }else{
                return false;
            }
        };
        this.requestGet = function(url){
            if(!this.h){return false;}
            this.h.abort();
            this.h.open('get', url, true);
            if(this.callBack != null){
                this.h.onreadystatechange = this.callBack;
            }
            this.h.send(null);
        };
        this.getResponse = function(){
            return response;
        };
    }
    function DefaultParameter(){}
    DefaultParameter.prototype.target = null;
    DefaultParameter.prototype.path   = null;
    DefaultParameter.prototype.camera = {
        position: [0.0, 0.0, 10.0],
        center  : [0.0, 0.0, 0.0],
        up      : [0.0, 1.0, 0.0],
        fovy    : 60,
        aspect  : 1.0,
        near    : 0.1,
        far     : 10.0
    };
    DefaultParameter.prototype.translate = [0.0, 0.0, 0.0];      // x, y, z
    DefaultParameter.prototype.rotate    = [0.0, 0.0, 0.0, 1.0]; // cos, x, y, z
    DefaultParameter.prototype.scale     = [1.0, 1.0, 1.0];      // x, y, z

    // instance
    $.fn.objQuery = function(options){
        var defaults = {
           name   : 'Suzuki Taro',
           age    : 20
        };
        var params = $.extend(defaults, options);
        var obj = new objQuery(this, params);

        // exec

        return this;
    };
})(jQuery);
