(function() {
    var divSheetingStyle = document.getElementById("wallSheetingStyleProperties");
    var radFull = document.getElementById("radWallSheetingStyleFull");
    var radSkirted = document.getElementById("radWallSheetingStyleSkirted");
    var radGableInfill = document.getElementById("radWallSheetingStyleGableInfill");
    var divSkirtedProperties = document.getElementById("wallSheetingStyleSkirtedProperties");
    var divGableInfillProperties = document.getElementById("wallSheetingStyleGableInfillProperties");
    var txtSkirtedBaseHeight = document.getElementById("txtWallSheetingStyleSkirtedBaseHeight");
    var txtSkirtedHeadHeight = document.getElementById("txtWallSheetingStyleSkirtedHeadHeight");
    var txtGableInfillHeight = document.getElementById("txtWallSheetingStyleGableInfillHeight");
    var cFormOp =
        app.SodiumUtil.cellCalmRefEq(
            app.cShowFormOp.map(function(showFormOp) {
                if (showFormOp.isNone) {
                    return app.Option.none();
                }
                var showForm = showFormOp.fromSome();
                return showForm.partialMatch(app.Option.none(), {
                    baySheetingStyle: function(form) {
                        return app.Option.some(form);
                    }
                });
            })
        );
    cFormOp.listen(function(formOp) {
        divSheetingStyle.style.display = formOp.isSome ? "block" : "none";
        if (formOp.isNone) {
            return;
        }
        var form = formOp.fromSome();
        var initBaySheetingStyleData = form.params.cInitBaySheetingStyle.sample();
        initBaySheetingStyleData.partialMatch(function() {}, {
            full: function(id) {
                return function() {
                    radFull.checked = true;
                    divSkirtedProperties.style.display = "none";
                    divGableInfillProperties.style.display = "none";
                };
            },
            skirted: function(id, baseHeight, headHeight) {
                return function() {
                    radSkirted.checked = true;
                    divSkirtedProperties.style.display = "block";
                    divGableInfillProperties.style.display = "none";
                    txtSkirtedBaseHeight.value = "" + baseHeight;
                    txtSkirtedHeadHeight.value = "" + headHeight;
                };
            },
            gableInfill: function(id, height) {
                return function() {
                    radGableInfill.checked = true;
                    divSkirtedProperties.style.display = "none";
                    divGableInfillProperties.style.display = "block";
                    txtGableInfillHeight.value = "" + height;
                };
            }
        })();
    });
    var withForm = function(k) {
        var formOp = cFormOp.sample();
        if (formOp.isSome) {
            var form = formOp.fromSome();
            k(form);
        }
    };
    $("#wallSheetingStyleSkirtedBaseHeightSlider").slider({
        min: 100,
        max: 6000,
        step: 100,
        value: 1000,
        slide: function(event, ui) {
            txtSkirtedBaseHeight.value = "" + ui.value;
            withForm(function(form) {
                form.setSkirtedBaseHeight(ui.value);
            });
        }
    });
    txtSkirtedBaseHeight.value = "" + 1000;
    $("#wallSheetingStyleSkirtedHeadHeightSlider").slider({
        min: 100,
        max: 6000,
        step: 100,
        value: 1500,
        slide: function(event, ui) {
            txtSkirtedHeadHeight.value = "" + ui.value;
            withForm(function(form) {
                form.setSkirtedHeadHeight(ui.value);
            });
        }
    });
    txtSkirtedHeadHeight.value = "" + 1500;
    $("#wallSheetingStyleGableInfillHeightSlider").slider({
        min: 100,
        max: 6000,
        step: 100,
        value: 2000,
        slide: function(event, ui) {
            txtGableInfillHeight.value = "" + ui.value;
            withForm(function(form) {
                form.setGableInfillHeight(ui.value);
            });
        }
    });
    txtGableInfillHeight.value = "" + 2000;
    txtSkirtedBaseHeight.addEventListener("input", function() {
        var value = parseFloat(txtSkirtedBaseHeight.value);
        if (!isNaN(value)) {
            $("#wallSheetingStyleSkirtedBaseHeightSlider").slider({
                value: value
            });
            withForm(function(form) {
                form.setSkirtedBaseHeight(ui.value);
            });
        }
    });
    txtSkirtedHeadHeight.addEventListener("input", function() {
        var value = parseFloat(txtSkirtedHeadHeight.value);
        if (!isNaN(value)) {
            $("#wallSheetingStyleSkirtedHeadHeightSlider").slider({
                value: value
            });
            withForm(function(form) {
                form.setSkirtedHeadHeight(ui.value);
            });
        }
    });
    txtGableInfillHeight.addEventListener("input", function() {
        var value = parseFloat(txtGableInfillHeight.value);
        if (!isNaN(value)) {
            $("#wallSheetingStyleGableInfillHeightSlider").slider({
                value: value
            });
            withForm(function(form) {
                form.setGableInfillHeight(ui.value);
            });
        }
    });
    radFull.addEventListener("change", function() {
        if (radFull.checked) {
            divSkirtedProperties.style.display = "none";
            divGableInfillProperties.style.display = "none";
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                form.fullSelected();
            }
        }
    });
    radSkirted.addEventListener("change", function() {
        if (radSkirted.checked) {
            divSkirtedProperties.style.display = "block";
            divGableInfillProperties.style.display = "none";
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                form.skirtedSelected();
            }
        }
    });
    radGableInfill.addEventListener("change", function() {
        if (radGableInfill.checked) {
            divSkirtedProperties.style.display = "none";
            divGableInfillProperties.style.display = "block";
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                form.gableInfillSelected();
            }
        }
    });
})();
