Ext.application({
    name: 'NAVI',


    requires: [
        'NAVI.view.Viewport',
        'NAVI.controller.BusinessDelegate',
        'NAVI.controller.Proxy',
        'NAVI.Logger',
        'Ext.menu.Menu'
    ],


 
    controllers: ['NaviC'],
 

    launch: function() {
        NAVI.app = this; 
        

            Ext.create('NAVI.view.Viewport');
     

    }


});
