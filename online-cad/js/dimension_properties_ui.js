function cadAppInitDimensionProperties(app) {
    var divDimensionProperties = $(".divDimensionProperties", app.appDiv)[0];
    var btnFlipDimension = $(".btnFlipDimension", divDimensionProperties)[0];
    var cFormOp = app.appModel.cDimensionFormOp;
    var cleanups = [];
    var observeClick = function(btn, callback) {
        var listener = function() {
            callback();
        };
        btn.addEventListener("click", listener);
        return function() {
            btn.removeEventListener("click", listener);
        };
    };
    cFormOp.listen(function(formOp) {
        cleanups.forEach(function(cleanup) { cleanup() });
        cleanups = [];
        divDimensionProperties.style.display = formOp.isSome ? "block" : "none";
        if (formOp.isNone) {
            return;
        }
        var form = formOp.fromSome();
        cleanups.push(observeClick(btnFlipDimension, function() {
            form.flipDimension();
        }));
    });
}
