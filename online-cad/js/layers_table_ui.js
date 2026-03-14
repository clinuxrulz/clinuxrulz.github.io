function cadAppInitLayersTable(app) {
    var dlgLayers = $(".dlgLayers", app.appDiv)[0];
    $(dlgLayers).dialog({});
    var tblLayersTBody = $(".tblLayersTBody", dlgLayers)[0];
    app.appModel.cVisibleLayersTable.listen(function() {});
    app.appModel.cUniqueLayers.listen(function(uniqueLayers) {
        if (uniqueLayers.length == 0) {
            dlgLayers.style.display = "none";
            return;
        }
        dlgLayers.style.display = "block";
        var visibleLayersTable = app.appModel.cVisibleLayersTable.sample();
        while (tblLayersTBody.lastChild) {
            tblLayersTBody.removeChild(tblLayersTBody.lastChild);
        }
        for (var i = 0; i < uniqueLayers.length; ++i) {
            (function() {
                var layer = uniqueLayers[i];
                var tr = document.createElement("tr");
                {
                    var td = document.createElement("td");
                    td.innerText = layer;
                    tr.appendChild(td);
                }
                var visible = visibleLayersTable.getValue(layer);
                if (visible == undefined) {
                    visible = true;
                }
                {
                    var td = document.createElement("td");
                    var chkVisible = document.createElement("input");
                    chkVisible.addEventListener("change", function() {
                        app.setLayerVisible(layer, chkVisible.checked);
                    });
                    chkVisible.type = "checkbox";
                    chkVisible.checked = visible;
                    td.appendChild(chkVisible);
                    tr.appendChild(td);
                }
                tblLayersTBody.appendChild(tr);
            })();
        }
    });
}
