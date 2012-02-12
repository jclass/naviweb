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
//            {
//            type: 'path', 
//            path: ['M', 100, 100, 'l',-70, -60],
//            stroke: '#ddd',
//            'stroke-width': 3
//        },
        {
            type: 'rect',
            stroke: '#ddd',
            'stroke-width': 3,
            height: 400,
            width: 800 
        }
//        , {
//            type: 'circle',
//            fill: '#79BB3F',
//            radius: 10,
//            x: 100,
//            y: 100, 
//            opacity: 0.5
//        },{
//            type: 'text', 
//            text: 'A',
//            x: 96.5,
//            y: 100
//        }, 
//        {
//            type: 'circle',
//            fill: '#79BB3F',
//            radius: 10,
//            x: 30,
//            y: 40,
//            opacity: 0.5
//        },{
//            type: 'text', 
//            text: 'B',
//            x: 26.5,
//            y: 40
//        }
]
    }
    ],
    
    verbinde: function(nameA, nameB) {
        var stadtA = this.staedte.get(nameA);
     
        var stadtB = this.staedte.get(nameB);
        var draw = this.down('draw');
        var surface = draw.surface; 
        var verbindung = surface.add({
            type: 'path', 
            path: ['M', stadtA.circle.x, stadtA.circle.y, 'l',stadtB.circle.x - stadtA.circle.x, stadtB.circle.y - stadtA.circle.y],
            stroke: '#ddd',
            'stroke-width': 3
        });
        verbindung.redraw();
        stadtA.circle.remove();
        stadtA.text.remove();
        stadtB.circle.remove();
        stadtB.text.remove();
        surface.add(stadtA.circle);
        surface.add(stadtA.text);
        surface.add(stadtB.circle);
        surface.add(stadtB.text);
        stadtA.circle.show(true);
        stadtA.text.show(true);
        stadtB.circle.show(true);
        stadtB.text.show(true);
    },
    
    
    createStadt: function(x, y, name) {
        if (!this.staedte) {
            this.staedte = new Ext.util.HashMap();
        }
        var draw = this.down('draw');
        var surface = draw.surface; 
        var circle = surface.add({
            type: 'circle',
            fill: '#79BB3F',
            radius: 10,
            x: x,
            y: y
            , 
            opacity: 0.8
        });
        circle.show(true);
        var text = surface.add({
            type: 'text', 
            text: name,
            x: x - 3.5,
            y: y
        });
        var stadt = {
            circle: circle, 
            text: text
        }
        this.staedte.add(name, stadt);
        text.show(true);

    }

});