Ext.define('NAVI.controller.NaviC', {
    extend: 'Ext.app.Controller',

    stores: [  ],

    views: ['Viewport', 'Landschaft', 'Buttons'],

    refs: [
          {
              ref: 'landschaft',
               selector: 'viewport naviLandschaft'
            }
    ],

    init: function() {
 
        this.control({
            'viewport button': {
                click: this.tuwas
            }
        });
    },
        
    tuwas: function() {
            var c = this.getLandschaft();
            c.createStadt();
            
    }
        
        
//
//    getLandschaft: function() {
//
//
//        var command = {
//            type:'CommandGetLandschaft'
////            ,
////            payload: null;
//        };
//        NAVI.controller.BusinessDelegate.execute(command, function() {
////            me.objectiveTreeRefresh(paths);
////            callback();
//        });
//
//
//    }


});





