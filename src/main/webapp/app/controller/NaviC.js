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
            c.createStadt(50, 75, 'F');
            c.createStadt(90, 87, 'P');
            c.createStadt(100, 30, 'A');
            c.verbinde('F', 'P');
            c.verbinde('A', 'F');
            
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





