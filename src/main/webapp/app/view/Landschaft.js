Ext.define('NAVI.view.Landschaft', {
    extend: 'Ext.panel.Panel',

    alias : 'widget.naviLandschaft',

    layout: 'fit',
//    width: 10000,
//    height: 300,

    items: [
    {
        xtype: 'draw',
        items: [
            {
            type: 'path', 
            path: ['M', 100, 100, 'l',-70, -60],
            stroke: '#ddd',
            'stroke-width': 3
        },{
            type: 'rect',
            stroke: '#ddd',
            'stroke-width': 3,
            height: 400,
            width: 800 
        }, {
            type: 'circle',
            fill: '#79BB3F',
            radius: 10,
            x: 100,
            y: 100, 
            opacity: 0.5
        },{
            type: 'text', 
            text: 'A',
            x: 96.5,
            y: 100
        }, 
        {
            type: 'circle',
            fill: '#79BB3F',
            radius: 10,
            x: 30,
            y: 40,
            opacity: 0.5
        },{
            type: 'text', 
            text: 'B',
            x: 26.5,
            y: 40
        }]
    }
    ],
    
    
    createStadt: function() {
        var draw = this.down('draw');
        var surface = draw.surface; 
        var circle = surface.add({
            type: 'circle',
            fill: '#79BB3F',
            radius: 50,
            x: 150,
            y: 100
            , 
            opacity: 0.5
        });
        circle.redraw();
 
    }

});