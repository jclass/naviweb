Ext.define('NAVI.view.Buttons', {
    extend: 'Ext.toolbar.Toolbar',

    alias : 'widget.naviButtons',
 

    items: [
    {
         
            // xtype: 'button', // default for Toolbars
            text: 'Create Landschaft',
            action: 'create'
         
    }, {
         
            // xtype: 'button', // default for Toolbars
            text: 'Landschaft vom Server holen',
            action: 'landschaftserver'
               
         
    }, {
         
            // xtype: 'button', // default for Toolbars
            text: 'Test Translate',
            action: 'translate'
               
         
    }
    ]

});