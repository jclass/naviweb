Ext.define('NAVI.Logger', {
    statics: {
        log: function(arg) {
            if (window.console && window.console.log) {
                window.console.log(arg);
            }
        }
    }
});