function cadAppInitStrokeProperties(app) {
    var mkId = (function() {
        var counter = 0;
        return function() {
            return "cadAppStrokePropertiesId" + (counter++);
        };
    })();
    var cFormOp = app.appModel.cStrokeFormOp;
    var divStrokeProperties = $(".divStrokeProperties", app.appDiv)[0];
    var strokeColourId = mkId();
    var lblStrokeColour = $(".lblStrokeColour", divStrokeProperties)[0];
    var strokeColourSelector = $(".strokeColourSelector", divStrokeProperties)[0];
    strokeColourSelector.id = strokeColourId;
    lblStrokeColour.htmlFor = strokeColourId;
    var strokeWidthId = mkId();
    var lblStrokeWidth = $(".lblStrokeWidth", divStrokeProperties)[0];
    var txtStrokeWidth = $(".txtStrokeWidth", divStrokeProperties)[0];
    txtStrokeWidth.id = strokeWidthId;
    lblStrokeWidth.htmlFor = strokeWidthId;
    var dashStyleId = mkId();
    var lblDashStyle = $(".lblDashStyle", divStrokeProperties)[0];
    var cboDashStyle = $(".cboDashStyle", divStrokeProperties)[0];
    cboDashStyle.id = dashStyleId;
    lblDashStyle.htmlFor = dashStyleId;
    var dashArrayOpToDashStyle = function(dashArrayOp) {
        if (dashArrayOp.isNone) {
            return "solid";
        }
        let dashArray = dashArrayOp.fromSome();
        if (dashArray.length == 2 && dashArray[0] == 0.5 && dashArray[1] == 0.5) {
            return "dash1";
        } else if (dashArray.length == 2 && dashArray[0] == 0.5 && dashArray[1] == 0.2) {
            return "dash2";
        } else {
            return "solid";
        }
    };
    var dashStyleToDashArrayOp = function(dashStyle) {
        switch (dashStyle) {
            default:
            case "solid":
                return app.Option.none();
            case "dash1":
                return app.Option.some([0.5, 0.5]);
            case "dash2":
                return app.Option.some([0.5, 0.2]);
        }
    }
    var setDashStyle = function(dashStyle) {
        var options = cboDashStyle.options;
        for (var i = 0; i < options.length; ++i) {
            var option = options[i];
            if (option.value == dashStyle) {
                option.selected = true;
                break;
            }
        }
    };
    var observeTextFieldValue = function(textField, callback) {
        var listener = function() {
            callback(textField.value);
        };
        textField.addEventListener("input", listener);
        return function() {
            textField.removeEventListener("input", listener);
        };
    };
    var observeComboBoxValue = function(comboBox, callback) {
        var listener = function() {
            if (comboBox.selectedIndex == -1) {
                callback(undefined);
                return;
            }
            callback(comboBox.options[comboBox.selectedIndex].value);
        };
        comboBox.addEventListener("change", listener);
        return function() {
            comboBox.removeEventListener("change", listener);
        };
    };
    var observeColourValue = function(colourPicker, callback) {
        var listener = function() {
            var colourOp = app.Colour.fromHex(colourPicker.value.substr(1));
            if (colourOp.isSome) {
                var colour = colourOp.fromSome();
                callback(colour);
            }
        };
        colourPicker.addEventListener("change", listener);
        return function() {
            colourPicker.removeEventListener("change", listener);
        };
    };
    var cleanups = [];
    cFormOp.listen(function(formOp) {
        cleanups.forEach(function(cleanup) { cleanup(); });
        cleanups = [];
        divStrokeProperties.style.display = formOp.isSome ? "block" : "none";
        if (formOp.isNone) {
            return;
        }
        var form = formOp.fromSome();
        strokeColourSelector.value = form.cStrokeColourOp.sample().map(function(colour) { return "#" + colour.toHex(); }).orSome("");
        txtStrokeWidth.value = "" + form.cStrokeWidthOp.sample().orSome("");
        setDashStyle(dashArrayOpToDashStyle(form.cDashArrayOpOp.sample().orSome(app.Option.none())));
        cleanups.push(
            observeColourValue(
                strokeColourSelector,
                function(strokeColour) {
                    if (strokeColour == undefined) {
                        return;
                    }
                    form.setStrokeColour(strokeColour);
                }
            )
        );
        cleanups.push(
            observeComboBoxValue(
                cboDashStyle,
                function(dashStyle) {
                    if (dashStyle == undefined) {
                        return;
                    }
                    let dashArrayOp = dashStyleToDashArrayOp(dashStyle);
                    form.setDashArrayOp(dashArrayOp);
                }
            )
        );
        cleanups.push(
            observeTextFieldValue(
                txtStrokeWidth,
                function(strokeWidth) {
                    var strokeWidth2 = Number.parseFloat(strokeWidth);
                    if (Number.isNaN(strokeWidth2)) {
                        return;
                    }
                    form.setStrokeWidth(strokeWidth2);
                }
            )
        );
    });
}
