(function() {
    var getFirstChild = function(el) {
        var firstChild = el.firstChild;
        while (firstChild != null && firstChild.nodeType == 3) { // skip TextNodes
            firstChild = firstChild.nextSibling;
        }
        return firstChild;
    };
    var divBayEditProperties = document.getElementById("bayEditProperties");
    var txtNumBays = $(".txtNumBays", divBayEditProperties)[0];
    var btnNumBaysReset = $(".btnNumBaysReset", divBayEditProperties)[0];
    var tblBaySizes = $(".tblBaySizes", divBayEditProperties)[0];
    var divRowTemplate = $(".divRowTemplate", divBayEditProperties)[0];
    var rowTemplate = getFirstChild(getFirstChild(getFirstChild(divRowTemplate)));
    var cFormOp =
        app.SodiumUtil.cellCalmRefEq(
            app.cShowFormOp.map(function(showFormOp) {
                if (showFormOp.isNone) {
                    return app.Option.none();
                }
                var showForm = showFormOp.fromSome();
                return showForm.partialMatch(app.Option.none(), {
                    bayEdit: function(form) {
                        return app.Option.some(form);
                    }
                });
            })
        );
    var watchTextField = function(textField, callback) {
        var listener = function() {
            callback(textField.value);
        };
        textField.addEventListener("input", listener);
        return function() {
            textField.removeEventListener("input", listener);
        };
    };
    var watchButtonClick = function(button, callback) {
        var listener = function() {
            callback();
        };
        button.addEventListener("click", listener);
        return function() {
            button.removeEventListener("click", listener);
        };
    };
    var cleanups = [];
    cFormOp.listen(function(formOp) {
        cleanups.forEach(function(cleanup) { cleanup(); });
        cleanups = [];
        divBayEditProperties.style.display = formOp.isSome ? "block" : "none";
        if (formOp.isNone) {
            return;
        }
        var form = formOp.fromSome();
        var cNumBays = app.SodiumUtil.cellCalmRefEq(form.ccBaySizes.map(function(baySizes) { return baySizes.length; }));
        cleanups.push(
            cNumBays.listen(function(numBays) {
                txtNumBays.value = "" + numBays;
            })
        );
        var cNumBaysResettable = app.SodiumUtil.cellCalmRefEq(form.cPreferredNumBaysOp.map(function(x) { return x.isSome; }));
        cleanups.push(
            cNumBaysResettable.listen(function(numBaysResettable) {
                btnNumBaysReset.style.display = numBaysResettable ? "block" : "none";
            })
        );
        cleanups.push(
            watchTextField(
                txtNumBays,
                function(numBaysText) {
                    var numBays = Number.parseInt(numBaysText);
                    if (Number.isNaN(numBays)) {
                        return;
                    }
                    form.setNumBays(numBays);
                }
            )
        );
        cleanups.push(
            watchButtonClick(
                btnNumBaysReset,
                function() {
                    form.resetNumBays();
                }
            )
        );
        var rows = [];
        cleanups.push(
            form.ccBaySizes.listen(function(cBaySizes) {
                while (rows.length > cBaySizes.length) {
                    var row = rows[rows.length-1];
                    row.cleanup();
                    rows.splice(rows.length-1, 1);
                }
                while (rows.length < cBaySizes.length) {
                    (function() {
                        var idx = rows.length;
                        var cBaySize = cBaySizes[idx]._1;
                        var cResettable = cBaySizes[idx]._2;
                        var rowCleanups = [];
                        var rowElement = rowTemplate.cloneNode(true);
                        tblBaySizes.appendChild(rowElement);
                        rowCleanups.push(function() {
                            tblBaySizes.removeChild(rowElement);
                        });
                        var baySizeSlider = $(".baySizeSlider", rowElement)[0];
                        var txtBaySize = $(".txtBaySize", rowElement)[0];
                        var btnReset = $(".btnReset", rowElement)[0];
                        rowCleanups.push(cBaySize.listen(function(baySize) {
                            $(baySizeSlider).slider({ "value": baySize });
                            txtBaySize.value = "" + baySize;
                        }));
                        rowCleanups.push(cResettable.listen(function(resettable) {
                            btnReset.style.display = resettable ? "block" : "none";
                        }));
                        $(baySizeSlider).slider({
                            "min": 1000,
                            "max": 6000,
                            "step": 100,
                            "value": cBaySize.sample(),
                            "slide": function(event, ui) {
                                txtBaySize.value = "" + ui.value;
                                form.changeBaySize(idx, ui.value);
                            }
                        });
                        txtBaySize.value = cBaySize.sample();
                        txtBaySize.addEventListener("input", function() {
                            var baySize = Number.parseFloat(txtBaySize.value);
                            if (Number.isNaN(baySize)) {
                                return;
                            }
                            $(baySizeSlider).slider({ value: baySize });
                            form.changeBaySize(idx, baySize);
                        });
                        btnReset.addEventListener("click", function() {
                            form.resetBaySize(idx);
                        });
                        var row = {
                            cleanup: function() {
                                rowCleanups.forEach(function(cleanup) { cleanup(); });
                                rowCleanups = [];
                            }
                        };
                        rows.push(row);
                    })();
                }
            })
        );
        cleanups.push(function() {
            for (var i = 0; i < rows.length; ++i) {
                var row = rows[i];
                row.cleanup();
            }
            rows = [];
        });
    });
})();
