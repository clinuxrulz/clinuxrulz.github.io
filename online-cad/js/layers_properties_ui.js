function cadAppInitLayersProperties(app) {
    var dlgLayers = $(".divLayers", app.appDiv)[0];
    var txtLayer = $(".txtLayer", dlgLayers)[0];
    var observeTextFieldValue = function(textField, callback) {
        var listener = function() {
            callback(textField.value);
        };
        textField.addEventListener("input", listener);
        return function() {
            textField.removeEventListener("input", listener);
        };
    };
    var cleanups = [];
    app.appModel.cLayersPropertiesFormOp.listen(function(formOp) {
        cleanups.forEach(function(cleanup) { cleanup(); });
        cleanups.splice(0, cleanups.length);
        dlgLayers.style.display = formOp.isSome ? "block" : "none";
        if (formOp.isNone) {
            return;
        }
        var form = formOp.fromSome();
        txtLayer.value = app.Option.join(form.cLayerOpOp.sample()).orSome("");
        cleanups.push(observeTextFieldValue(txtLayer, function(text) {
            let layer = text.trim();
            if (layer.length == 0) {
                form.setLayerOp(app.Option.none());
            } else {
                form.setLayerOp(app.Option.some(layer));
            }
        }));
    });
}
