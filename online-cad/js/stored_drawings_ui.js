function cadAppInitStoredDrawings(app) {
    var mkId = (function() {
        var counter = 0;
        return function() {
            return "cadAppStoredDrawingsId" + (counter++);
        };
    })();
    var divStoredDrawings = $(".divStoredDrawings", app.appDiv)[0];
    var storedDrawingsId = mkId();
    var lblStoredDrawings = $(".lblStoredDrawings", divStoredDrawings)[0];
    var lstStoredDrawings = $(".lstStoredDrawings", divStoredDrawings)[0];
    var btnCreateStoredDrawing = $(".btnCreateStoredDrawing", divStoredDrawings)[0];
    var btnUseStoredDrawing = $(".btnUseStoredDrawing", divStoredDrawings)[0];
    var btnDeleteStoredDrawing = $(".btnDeleteStoredDrawing", divStoredDrawings)[0];
    $(lstStoredDrawings).selectable({
        stop: function() {
            var storedDrawingId = $(".ui-selected", this).attr("data-storedDrawingId");
            if (storedDrawingId != undefined) {
                storedDrawingId = Number.parseInt(storedDrawingId);
            }
            if (!isNaN(storedDrawingId)) {
                app.selectStoredDrawingId(storedDrawingId);
            } else {
                app.deselectStoredDrawing();
            }
        }
    });
    lstStoredDrawings.id = storedDrawingsId;
    lblStoredDrawings.htmlFor = storedDrawingsId;
    app.appModel.cStoredDrawingInfoList.listen(
        function(storedDrawingInfoList) {
            while (lstStoredDrawings.lastChild) {
                lstStoredDrawings.removeChild(lstStoredDrawings.lastChild);
            }
            for (var i = 0; i < storedDrawingInfoList.length; ++i) {
                let storedDrawingInfo = storedDrawingInfoList[i];
                let li = document.createElement("li");
                li.setAttribute("data-storedDrawingId", "" + storedDrawingInfo.id);
                li.setAttribute("data-storedDrawingName", storedDrawingInfo.name);
                li.classList.add("ui-widget-content");
                li.innerText = storedDrawingInfo.name;
                lstStoredDrawings.appendChild(li);
            }
        }
    );
    btnCreateStoredDrawing.addEventListener("click", function() {
        app.doOperation(app.Operation.createStoredDrawing());
    });
    app.appModel.cSelectedStoredDrawingInfoOp.listen(function(selectedStoredDrawingInfoOp) {
        btnUseStoredDrawing.disabled = selectedStoredDrawingInfoOp.isNone;
        btnDeleteStoredDrawing.disabled = selectedStoredDrawingInfoOp.isNone;
    });
    btnUseStoredDrawing.addEventListener("click", function() {
        app.doOperation(app.Operation.useStoredDrawing());
    });
    btnDeleteStoredDrawing.addEventListener("click", function() {
        var storedDrawingIdOp = app.appModel.cSelectedStoredDrawingInfoOp.sample().map(function(info) { return info.id; });
        if (storedDrawingIdOp.isNone) {
            return;
        }
        var storedDrawingId = storedDrawingIdOp.fromSome();
        app.deleteStoredDrawingId(storedDrawingId);
    });
}
