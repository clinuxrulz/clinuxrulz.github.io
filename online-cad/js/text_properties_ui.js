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
    var txtFontFamily = $(".txtFontFamily", divTextProperties)[0];
    txtFontFamily.id = fontFamilyId;
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
    var cleanups = [];
    cFormOp.listen(function(formOp) {
        cleanups.forEach(cleanup => cleanup());
        cleanups = [];
        divTextProperties.style.display = formOp.isSome ? "block" : "none";
        if (formOp.isNone) {
            return;
        }
        var form = formOp.fromSome();
        txtText.value = form.cTextOp.sample().orSome("");
        txtFontFamily.value = form.cFontFamilyOp.sample().orSome("");
        txtFontSize.value = "" + form.cFontSizeOp.sample().orSome("");
        setFontWeight(form.cFontWeightOp.sample().orSome(""));
        setFontStyle(form.cFontStyleOp.sample().orSome(""));
        cleanups.push(
            observeTextFieldValue(
                txtText,
                function(text) {
                    form.setText(text);
                }
            )
        );
        cleanups.push(
            observeTextFieldValue(
                txtFontFamily,
                function(fontFamily) {
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
    });
}
