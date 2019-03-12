(function() {
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
    var cNumSideBays = app.building.cSideBayMarkers.map(function(x) { return x.length - 1; });
    var chkShowSideBaySizes = document.getElementById("chkShowSideBaySizes");
    var txtNumSideBays = document.getElementById("txtNumSideBays");
    var btnNumSideBaysReset = document.getElementById("btnNumSideBaysReset");
    var cPreferredNumSideBaysOp = app.cBuildingData.map(function(buildingData) { return buildingData.preferredNumSideBaysOp; });
    cPreferredNumSideBaysOp.listen(function(preferredNumSideBaysOp) { btnNumSideBaysReset.style.display = preferredNumSideBaysOp.isSome ? "block" : "none"; });
    cNumSideBays.listen(numSideBays => txtNumSideBays.value = "" + numSideBays);
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
