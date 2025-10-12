function cadAppInitTextProperties(app) {
    var mkId = (function() {
        var counter = 0;
        return function() {
            return "cadAppTextPropertiesId" + (counter++);
        };
    })();
    var cFormOp = app.appModel.cTextFormOp;
    var divTextProperties = $(".divTextProperties", app.appDiv)[0];
    var textId = mkId();
    var lblText = $(".lblText", divTextProperties)[0];
    var txtText = $(".txtText", divTextProperties)[0];
    txtText.id = textId;
    lblText.htmlFor = textId;
    var fontFamilyId = mkId();
    var lblFontFamily = $(".lblFontFamily", divTextProperties)[0];
    var cboFontFamily = $(".cboFontFamily", divTextProperties)[0];
    cboFontFamily.id = fontFamilyId;
    lblFontFamily.htmlFor = fontFamilyId;
    var fontSizeId = mkId();
    var lblFontSize = $(".lblFontSize", divTextProperties)[0];
    var txtFontSize = $(".txtFontSize", divTextProperties)[0];
    txtFontSize.id = fontSizeId;
    lblFontSize.htmlFor = fontSizeId;
    var fontWeightId = mkId();
    var lblFontWeight = $(".lblFontWeight", divTextProperties)[0];
    var cboFontWeight = $(".cboFontWeight", divTextProperties)[0];
    cboFontWeight.id = fontWeightId;
    lblFontWeight.htmlFor = fontWeightId;
    var fontStyleId = mkId();
    var lblFontStyle = $(".lblFontStyle", divTextProperties)[0];
    var cboFontStyle = $(".cboFontStyle", divTextProperties)[0];
    cboFontStyle.id = fontStyleId;
    lblFontStyle.htmlFor = fontStyleId;
    var fontColourId = mkId();
    var lblFontColour = $(".lblFontColour", divTextProperties)[0];
    var fontColourSelector = $(".fontColourSelector", divTextProperties)[0];
    fontColourSelector.id = fontColourId;
    lblFontColour.htmlFor = fontColourId;
    var setFontFamily = function(fontFamily) {
        var options = cboFontFamily.options;
        for (var i = 0; i < options.length; ++i) {
            var option = options[i];
            if (option.value == fontFamily) {
                option.selected = true;
                break;
            }
        }
    };
    var setFontWeight = function(fontWeight) {
        var options = cboFontWeight.options;
        for (var i = 0; i < options.length; ++i) {
            var option = options[i];
            if (option.value == fontWeight) {
                option.selected = true;
                break;
            }
        }
    };
    var setFontStyle = function(fontStyle) {
        var options = cboFontStyle.options;
        for (var i = 0; i < options.length; ++i) {
            var option = options[i];
            if (option.value == fontStyle) {
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
        divTextProperties.style.display = formOp.isSome ? "block" : "none";
        if (formOp.isNone) {
            return;
        }
        var form = formOp.fromSome();
        txtText.value = form.cTextOp.sample().orSome("");
        setFontFamily(form.cFontFamilyOp.sample().orSome(""));
        txtFontSize.value = "" + form.cFontSizeOp.sample().orSome("");
        setFontWeight(form.cFontWeightOp.sample().orSome(""));
        setFontStyle(form.cFontStyleOp.sample().orSome(""));
        fontColourSelector.value = form.cFontColourOp.sample().map(function(colour) { return "#" + colour.toHex(); }).orSome("");
        cleanups.push(
            observeTextFieldValue(
                txtText,
                function(text) {
                    form.setText(text);
                }
            )
        );
        cleanups.push(
            observeComboBoxValue(
                cboFontFamily,
                function(fontFamily) {
                    if (fontFamily == undefined) {
                        return;
                    }
                    form.setFontFamily(fontFamily);
                }
            )
        );
        cleanups.push(
            observeTextFieldValue(
                txtFontSize,
                function(fontSize) {
                    var fontSize2 = Number.parseFloat(fontSize);
                    if (Number.isNaN(fontSize2)) {
                        return;
                    }
                    form.setFontSize(fontSize2);
                }
            )
        );
        cleanups.push(
            observeComboBoxValue(
                cboFontWeight,
                function(fontWeight) {
                    if (fontWeight == undefined) {
                        return;
                    }
                    form.setFontWeight(fontWeight);
                }
            )
        );
        cleanups.push(
            observeComboBoxValue(
                cboFontStyle,
                function(fontStyle) {
                    if (fontStyle == undefined) {
                        return;
                    }
                    form.setFontStyle(fontStyle);
                }
            )
        );
        cleanups.push(
            observeColourValue(
                fontColourSelector,
                function(fontColour) {
                    if (fontColour == undefined) {
                        return;
                    }
                    form.setFontColour(fontColour);
                }
            )
        )
    });
}
