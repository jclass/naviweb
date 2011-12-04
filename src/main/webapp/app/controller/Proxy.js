Ext.define('NAVI.controller.Proxy', {
    extend: 'Ext.data.proxy.Rest',
    alias : 'proxy.enpasos',
    requires: ['Ext.JSON'],
    processResponse: function(success, operation, request, response, callback, scope) {
        if (success && response && response.responseText) {
            var r = Ext.JSON.decode(response.responseText);
            if (!r.success && 'not logged in' == r.message) {
                var c = NAVI.app.getController('NAVI.controller.Users');
                c.logoutUser();
            }
        }
        this.callParent(arguments);
    }

});



