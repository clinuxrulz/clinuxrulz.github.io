(function() {
    var sInitBuildingData = app.SodiumUtil.streamFilterOption(app.sodium.Operational.defer(app.sFocusedBuildingIdOpChanged).snapshot1(app.cBuildingDataOp));
    var cboBuildingType = document.getElementById("cboBuildingType");
    var divBarnProperties = document.getElementById("barnProperties");
    cboBuildingType.addEventListener("change", function(ev) {
        if (cboBuildingType.value == "barn" || cboBuildingType.value == "skillionBarn") {
            divBarnProperties.style.display = "block";
        } else {
            divBarnProperties.style.display = "none";
        }
        app.setBuildingType(cboBuildingType.value);
    });
    var txtSpan = document.getElementById("txtSpan");
    var txtLength = document.getElementById("txtLength");
    var txtHeight = document.getElementById("txtHeight");
    var txtPitch = document.getElementById("txtPitch");
    $("#spanSlider").slider({
        "min": 6000,
        "max": 24000,
        "step": 500,
        "slide": function(event, ui) {
            txtSpan.value = ui.value;
            app.setSpan(ui.value);
        }
    });
    txtSpan.addEventListener("input", function(ev) {
        var value = parseFloat(txtSpan.value);
        if (!isNaN(value)) {
            $("#spanSlider").slider("value", value);
            app.setSpan(value);
        }
    });
    $("#lengthSlider").slider({
        "min": 6000,
        "max": 50000,
        "step": 500,
        "value": 12000,
        "slide": function(event, ui) {
            txtLength.value = ui.value;
            app.setLength(ui.value);
        }
    });
    txtLength.addEventListener("input", function(ev) {
        var value = parseFloat(txtLength.value);
        if (!isNaN(value)) {
            $("#lengthSlider").slider("value", value);
            app.setLength(value);
        }
    });
    $("#heightSlider").slider({
        "min": 2400,
        "max": 6000,
        "step": 100,
        "value": 2400,
        "slide": function(event, ui) {
            txtHeight.value = ui.value;
            app.setHeight(ui.value);
        }
    });
    txtHeight.addEventListener("input", function(ev) {
        var value = parseFloat(txtHeight.value);
        if (!isNaN(value)) {
            $("#heightSlider").slider("value", value);
            app.setHeight(value);
        }
    });
    $("#pitchSlider").slider({
        "min": 5,
        "max": 45,
        "step": 5,
        "value": 15,
        "slide": function(event, ui) {
            txtPitch.value = ui.value;
            app.setPitch(ui.value);
        }
    });
    txtPitch.addEventListener("input", function(ev) {
        var value = parseFloat(txtPitch.value);
        if (!isNaN(value)) {
            $("#pitchSlider").slider("value", value);
            app.setPitch(value);
        }
    });
    sInitBuildingData.listen(function(x) {
        cboBuildingType.value = x.buildingType;
        $("#spanSlider").slider({ "value": x.span });
        $("#lengthSlider").slider({ "value": x.length });
        $("#heightSlider").slider({ "value": x.height });
        $("#pitchSlider").slider({ "value": x.pitch });
        txtSpan.value = "" + x.span;
        txtLength.value = "" + x.length;
        txtHeight.value = "" + x.height;
        txtPitch.value = "" + x.pitch;
    });
    $("#divBuildingPropertiesAdvanceOptions").accordion({
        collapsible: true,
        heightStyle: "content",
        active: false
    });
    // Overhangs
    (function() {
        var chkDifferentOverhangs = document.getElementById("chkDifferentOverhangs");
        var divCommonOverhang = document.getElementById("divCommonOverhang");
        var divDifferentOverhangs = document.getElementById("divDifferentOverhangs");
        var txtOverhang = document.getElementById("txtOverhang");
        var txtSide1Overhang = document.getElementById("txtSide1Overhang");
        var txtSide2Overhang = document.getElementById("txtSide2Overhang");
        var txtEnd1Overhang = document.getElementById("txtEnd1Overhang");
        var txtEnd2Overhang = document.getElementById("txtEnd2Overhang");
        var lastOverhang = 0.0;
        var lastSide1Overhang = 0.0;
        var lastSide2Overhang = 0.0;
        var lastEnd1Overhang = 0.0;
        var lastEnd2Overhang = 0.0;
        $("#overhangSlider").slider({
            "min": 0,
            "max": 3000,
            "step": 100,
            "value": 0,
            "slide": function(event, ui) {
                lastOverhang = ui.value;
                txtOverhang.value = '' + lastOverhang;
                app.setOverhang(lastOverhang);
            }
        });
        $("#side1OverhangSlider").slider({
            "min": 0,
            "max": 3000,
            "step": 100,
            "value": 0,
            "slide": function(event, ui) {
                lastSide1Overhang = ui.value;
                txtSide1Overhang.value = '' + lastSide1Overhang;
                app.setSide1Overhang(lastSide1Overhang);
            }
        });
        $("#side2OverhangSlider").slider({
            "min": 0,
            "max": 3000,
            "step": 100,
            "value": 0,
            "slide": function(event, ui) {
                lastSide2Overhang = ui.value;
                txtSide2Overhang.value = '' + lastSide2Overhang;
                app.setSide2Overhang(lastSide2Overhang);
            }
        });
        $("#end1OverhangSlider").slider({
            "min": 0,
            "max": 3000,
            "step": 100,
            "value": 0,
            "slide": function(event, ui) {
                lastEnd1Overhang = ui.value;
                txtEnd1Overhang.value = '' + lastEnd1Overhang;
                app.setEnd1Overhang(lastEnd1Overhang);
            }
        });
        $("#end2OverhangSlider").slider({
            "min": 0,
            "max": 3000,
            "step": 100,
            "value": 0,
            "slide": function(event, ui) {
                lastEnd2Overhang = ui.value;
                txtEnd2Overhang.value = '' + lastEnd2Overhang;
                app.setEnd2Overhang(lastEnd2Overhang);
            }
        });
        txtOverhang.addEventListener("input", function() {
            var value = parseFloat(txtOverhang.value);
            if (!isNaN(value)) {
                lastOverhang = value;
                $("#overhangSlider").slider({ "value": lastOverhang });
                app.setOverhang(lastOverhang);
            }
        });
        txtSide1Overhang.addEventListener("input", function() {
            var value = parseFloat(txtSide1Overhang.value);
            if (!isNaN(value)) {
                lastSide1Overhang = value;
                $("#side1OverhangSlider").slider({ "value": lastSide1Overhang });
                app.setSide1Overhang(lastSide1Overhang);
            }
        });
        txtSide2Overhang.addEventListener("input", function() {
            var value = parseFloat(txtSide2Overhang.value);
            if (!isNaN(value)) {
                lastSide2Overhang = value;
                $("#side2OverhangSlider").slider({ "value": lastSide2Overhang });
                app.setSide2Overhang(lastSide2Overhang);
            }
        });
        txtEnd1Overhang.addEventListener("input", function() {
            var value = parseFloat(txtEnd1Overhang.value);
            if (!isNaN(value)) {
                lastEnd1Overhang = value;
                $("#end1OverhangSlider").slider({ "value": lastEnd1Overhang });
                app.setEnd1Overhang(lastEnd1Overhang);
            }
        });
        txtEnd2Overhang.addEventListener("input", function() {
            var value = parseFloat(txtEnd2Overhang.value);
            if (!isNaN(value)) {
                lastEnd2Overhang = value;
                $("#end2OverhangSlider").slider({ "value": lastEnd2Overhang });
                app.setEnd2Overhang(lastEnd2Overhang);
            }
        });
        chkDifferentOverhangs.addEventListener("change", function() {
            if (chkDifferentOverhangs.checked) {
                divCommonOverhang.style.display = "none";
                divDifferentOverhangs.style.display = "block";
                app.setSide1Overhang(lastSide1Overhang);
                app.setSide2Overhang(lastSide2Overhang);
                app.setEnd1Overhang(lastEnd1Overhang);
                app.setEnd2Overhang(lastEnd2Overhang);
            } else {
                divCommonOverhang.style.display = "block";
                divDifferentOverhangs.style.display = "none";
                app.setOverhang(lastOverhang);
            }
        });
        sInitBuildingData.listen(function(x) {
            var side1Overhang = x.side1Overhang;
            var side2Overhang = x.side2Overhang;
            var end1Overhang = x.end1Overhang;
            var end2Overhang = x.end2Overhang;
            if (side1Overhang == side2Overhang && side2Overhang == end1Overhang && end1Overhang == end2Overhang) {
                var overhang = side1Overhang;
                chkDifferentOverhangs.checked = false;
                divCommonOverhang.style.display = "block";
                divDifferentOverhangs.style.display = "none";
                $("#overhangSlider").slider({ "value": overhang });
                txtOverhang.value = "" + overhang;
            } else {
                chkDifferentOverhangs.checked = true;
                divCommonOverhang.style.display = "none";
                divDifferentOverhangs.style.display = "block";
                $("#side1OverhangSlider").slider({ "value": side1Overhang });
                $("#side2OverhangSlider").slider({ "value": side2Overhang });
                $("#end1OverhangSlider").slider({ "value": end1Overhang });
                $("#end2OverhangSlider").slider({ "value": end2Overhang });
                txtSide1Overhang.value = "" + side1Overhang;
                txtSide2Overhang.value = "" + side2Overhang;
                txtEnd1Overhang.value = "" + end1Overhang;
                txtEnd2Overhang.value = "" + end2Overhang;
            }
        });
    })();
    //
    var cSideBayMarkers = app.sodium.Cell.switchC(app.cBuildingOp.map(function(buildingOp) { return buildingOp.map(function(building) { return building.cSideBayMarkers; }).orSome_(function() { return new app.sodium.Cell([]); }); }));
    var cNumSideBays = cSideBayMarkers.map(function(x) { return x.length - 1; });
    var chkShowSideBaySizes = document.getElementById("chkShowSideBaySizes");
    var txtNumSideBays = document.getElementById("txtNumSideBays");
    var btnNumSideBaysReset = document.getElementById("btnNumSideBaysReset");
    var cPreferredNumSideBaysOp = app.cBuildingDataOp.map(function(buildingDataOp) { return buildingDataOp.bind(function(buildingData) { return buildingData.preferredNumSideBaysOp; }); });
    cPreferredNumSideBaysOp.listen(function(preferredNumSideBaysOp) { btnNumSideBaysReset.style.display = preferredNumSideBaysOp.isSome ? "block" : "none"; });
    cNumSideBays.listen(function(numSideBays) { return txtNumSideBays.value = "" + numSideBays; });
    txtNumSideBays.addEventListener("input", function() {
        var num = parseInt(txtNumSideBays.value);
        if (!isNaN(num) && num > 0) {
            app.setPreferredNumBays(num);
        }
    });
    btnNumSideBaysReset.addEventListener("click", function() {
        app.unsetPreferredNumBays();
    });
    var divSideBaySizes = document.getElementById("sideBaySizes");
    var tblSideBaySizes = document.getElementById("tblSideBaySizes");
    chkShowSideBaySizes.addEventListener("change", function() {
        if (chkShowSideBaySizes.checked) {
            divSideBaySizes.style.display = "block";
        } else {
            divSideBaySizes.style.display = "none";
        }
        app.setShowingBaySizes(chkShowSideBaySizes.checked);
    });
    app.ccSideBaySizeResettableList.listen(
        (function() {
            var rows = [];
            return function(cSideBaySizeResettableList) {
                while (rows.length > cSideBaySizeResettableList.length) {
                    (function() {
                        var row = rows.splice(rows.length-1, 1)[0];
                        row.cleanup();
                        tblSideBaySizes.removeChild(row.node);
                    })();
                }
                while (rows.length < cSideBaySizeResettableList.length) {
                    (function() {
                        var cleanups = [];
                        var bayIndex = rows.length;
                        var row = document.createElement("tr");
                        var col1 = document.createElement("td");
                        var baySizeSlider = document.createElement("div");
                        var txtBaySize = document.createElement("input");
                        $(baySizeSlider).slider({
                            "min": 1000,
                            "max": 6000,
                            "step": 100,
                            "value": 3000,
                            "slide": function(event, ui) {
                                txtBaySize.value = ui.value;
                                app.setPreferredBaySize(bayIndex, ui.value);
                            }
                        });
                        txtBaySize.addEventListener("input", function() {
                            var value = parseFloat(txtBaySize.value);
                            if (!isNaN(value)) {
                                $(baySizeSlider).slider({ value: value });
                                app.setPreferredBaySize(bayIndex, value);
                            }
                        });
                        col1.appendChild(baySizeSlider);
                        col1.appendChild(txtBaySize);
                        var col2 = document.createElement("td");
                        var btnReset = document.createElement("button");
                        btnReset.innerText = "Reset";
                        btnReset.addEventListener("click", function() {
                            app.unsetPreferredBaySize(bayIndex);
                        });
                        col2.appendChild(btnReset);
                        txtBaySize.type = "text";
                        row.appendChild(col1);
                        row.appendChild(col2);
                        tblSideBaySizes.appendChild(row);
                        let cSideBaySizeResettable = cSideBaySizeResettableList[bayIndex];
                        let cSideBaySize = cSideBaySizeResettable._1;
                        let cResettable = cSideBaySizeResettable._2;
                        cleanups.push(cResettable.listen(function(resettable) {
                            btnReset.style.display = resettable ? "block" : "none";
                        }));
                        cleanups.push(cSideBaySize.listen(function(baySize) {
                            let roundedBaySize = Math.round(baySize);
                            txtBaySize.value = "" + roundedBaySize;
                            $(baySizeSlider).slider({ value: roundedBaySize });
                        }));
                        tblSideBaySizes.appendChild(row);
                        var row2 = {
                            cleanup: function() {
                                cleanups.forEach(function(cleanup) { cleanup(); });
                            },
                            node: row
                        };
                        rows.push(row2);
                    })();
                }
            };
        })()
    );
})();
