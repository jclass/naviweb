Ext.define('NAVI.controller.BusinessDelegate', {
    statics: {

        getContextPath: function() {
            if (!NAVI.contextPath) {
                var base = document.getElementsByTagName('base')[0];
                if (base && base.href && (base.href.length > 0)) {
                    base = base.href;
                } else {
                    base = document.URL;
                }
                NAVI.contextPath = base.substr(0, base.indexOf("/", base.indexOf("/", base.indexOf("//") + 2) + 1));
            }
            return NAVI.contextPath;

        },


        callServer: function(parm) {
            var url = parm.url;
            var callback = parm.callback;
            var exceptioncallback = parm.exceptioncallback;
            var params = parm.params;

            Ext.Ajax.request({
                url: 'service/' + url,
                success: function(response) {
                    var object = Ext.JSON.decode(response.responseText);
                    if (object.success) {
                        if (callback)
                            callback(object.payload);
                    } else {
                        if (exceptioncallback) {
                            exceptioncallback(object.message);
                        } else {
                            if ("not logged in" == object.message) {
                                var c = NAVI.app.getController('NAVI.controller.Users');
                                c.logoutUser();
                            } else {
                                NAVI.controller.BusinessDelegate.exceptionHandling(object.message);
                            }
                        }
                    }
                },
                failure: function(ex) {
                    var message = 'server communication error';
                    if (ex && ex.status && ex.status && ex.statusText)
                        message = ex.statusText;
                    if (exceptioncallback) {
                        exceptioncallback(message);
                    } else {
                        NAVI.controller.BusinessDelegate.exceptionHandling(message);
                    }
                },
                params: params
            });
        },



        callServerJson: function(parm) {
            var url = parm.url;
            var callback = parm.callback;
            var exceptioncallback = parm.exceptioncallback;
            var params = parm.params;

            Ext.Ajax.request({
                url: 'service/' + url,
                success: function(response) {
                    var object = Ext.JSON.decode(response.responseText);
                    if (object.success) {
                        if (callback)
                            callback(object.payload);
                    } else {
                        if (exceptioncallback) {
                            exceptioncallback(object.message);
                        } else {
                            if ("not logged in" == object.message) {
                                var c = NAVI.app.getController('NAVI.controller.Users');
                                c.logoutUser();
                            } else {
                                NAVI.controller.BusinessDelegate.exceptionHandling(object.message);
                            }
                        }
                    }
                },
                failure: function(ex) {
                    var message = 'server communication error';

                    if (ex && ex.status && ex.status && ex.statusText)
                        message = ex.statusText;
                    if (exceptioncallback) {
                        exceptioncallback(message);
                    } else {
                        NAVI.controller.BusinessDelegate.exceptionHandling(message);
                    }
                },
                jsonData: params
            });
        },





        execute: function(command, callback) {
            NAVI.controller.BusinessDelegate.callServerJson({
                url: 'service/' + command.type,
                callback: callback,
                params:  command
            });
        },




        // private
        exceptionHandling: function(message) {
            Ext.MessageBox.alert('Fehler', message);
        }

    }


});