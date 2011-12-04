Ext.define('NAVI.view.Landschaft', {
    extend: 'Ext.panel.Panel',
    
    
    
    
    

    alias : 'widget.naviLandschaft',

    layout: 'fit',

    items: [
    {
        xtype: 'draw',
        items: [{
            type: 'circle',
            fill: '#79BB3F',
            radius: 100,
            x: 100,
            y: 100
        }]
    }
    ]

});