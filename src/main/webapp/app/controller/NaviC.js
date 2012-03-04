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
            'viewport button[action=create]': {
                click: this.tuwas
            }, 
            
            'viewport button[action=landschaftserver]': {
                click: this.getLandschaftFromServer
            }
        });
    },
        
    tuwas: function() {
            var c = this.getLandschaft();
//            c.createStadt(50, 75, 'F');
//            c.createStadt(90, 87, 'P');
//            c.createStadt(100, 30, 'A');
//            c.verbinde('F', 'P');
//            c.verbinde('A', 'F');
            c.show({
                staedte: [
                    {
                        x: 50, 
                        y: 75, 
                        name: 'F'
                    }, {
                        x: 90, 
                        y: 87, 
                        name: 'P'
                    }, {
                        x: 100, 
                        y: 30, 
                        name: 'A'
                    }
                ],
                strassen: [
                    {
                        stadt1: 'F',
                        stadt2: 'P'
                    }, {
                        stadt1: 'A',
                        stadt2: 'F'
                    }
                ]
            });
            
    },
    
    
    landschaftAusgeben: function(maxX, maxY, landschaftServer)  {
        var landschaft = this.transform(landschaftServer);
        var c = this.getLandschaft();
        c.show(landschaft);
    },
    
    transform: function(landschaftServer) {
        Ext.Array.forEach(landschaftServer.staedte, function(stadt) {
            stadt.x = 122;
            stadt.y = 90;
        }, this);
        
        return landschaftServer;
    },
        
        

    getLandschaftFromServer: function() {


        var command = {
            type:'CommandGetLandschaft'
//            ,
//            payload: null;
        };
        
        var me = this;
        NAVI.controller.BusinessDelegate.execute(command, function(landschaft) {
            me.landschaftAusgeben(800, 400, landschaft)
            
        });


    }


});





