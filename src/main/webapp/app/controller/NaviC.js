Ext.define('NAVI.controller.NaviC', {
    extend: 'Ext.app.Controller',

    stores: [  ],

    views: ['Viewport', 'Landschaft'],

    refs: [
//        {
//            ref: 'work',
//            selector: 'viewport enpasosWork'
//        }
    ],



    getLandschaft: function() {


        var command = {
            type:'CommandGetLandschaft'
//            ,
//            payload: null;
        };
        NAVI.controller.BusinessDelegate.execute(command, function() {
//            me.objectiveTreeRefresh(paths);
//            callback();
        });


    }


});





