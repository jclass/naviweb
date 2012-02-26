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
            type: 'rect',
            stroke: '#ddd',
            'stroke-width': 3,
            height: 400,
            width: 800 
        }
]
    }
    ],
    
    
    
    show: function(daten) {
        this.daten = daten;
        
        Ext.Array.forEach(daten.strassen, function(strasse) {
            this.verbinde(strasse.stadt1, strasse.stadt2);
        }, this);
       
        Ext.Array.forEach(daten.staedte, function(stadt) {
            this.createStadt(stadt.x, stadt.y, stadt.name);
        }, this);
        

        
        
    },
    
    getStadt: function(name) {
        for(var i = 0; i < this.daten.staedte.length; i++) {
            var stadt = this.daten.staedte[i];
            if (stadt.name == name) {
                return stadt;
            }
        }
    },
    
    
    verbinde: function(nameA, nameB) {
//        if (!this.verbindungen) {
//            this.verbindungen = [new Ext.util.HashMap();
//        }
        var stadtA = this.getStadt(nameA);
     
        var stadtB = this.getStadt(nameB);
        var draw = this.down('draw');
        var surface = draw.surface; 
        var verbindung = surface.add({
            type: 'path', 
            path: ['M', stadtA.x, stadtA.y, 'l',stadtB.x - stadtA.x, stadtB.y - stadtA.y],
            stroke: '#ddd',
            'stroke-width': 3
        });
        verbindung.redraw();
//        stadtA.circle.remove();
//        stadtA.text.remove();
//        stadtB.circle.remove();
//        stadtB.text.remove();
//        surface.add(stadtA.circle);
//        surface.add(stadtB.circle);
//        surface.add(stadtB.text);
//        stadtA.circle.show(true);
//        
//        surface.add(stadtA.text);
//        stadtA.text.show(true);
//        stadtB.circle.show(true);
//        stadtB.text.show(true);
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