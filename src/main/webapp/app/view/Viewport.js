Ext.define('NAVI.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.panel.*',
        'Ext.toolbar.*',
        'Ext.button.*',
        'Ext.util.KeyNav',
        'Ext.menu.*',
        'Ext.form.*',
        'Ext.layout.container.Table',
        'Ext.layout.container.Border'
    ],


    layout: 'fit',
    items: [
        {
            xtype: 'naviLandschaft'
        }
    ]

});

