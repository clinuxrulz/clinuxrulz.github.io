var initRoofEndProperties = (function() {
    var nextId = 1;
    var genId = function() {
        return "roofEndPropertiesId" + (nextId++);
    };
    var findElementByClassNameOfParent = function(parent, className) {
        var atNode, i, node;
        var stack = [];
        stack.push(parent);
        while (stack.length != 0) {
            atNode = stack.pop();
            for (i = 0; i < atNode.childNodes.length; ++i) {
                node = atNode.childNodes[i];
                if (node.className == className) {
                    return node;
                }
                stack.push(node);
            }
        }
        return undefined;
    };
    return function(div, callbacks) {
        var cboRoofEndType = findElementByClassNameOfParent(div, "cboRoofEndType");
        cboRoofEndType.id = genId();
        var divDutchGableDistIn = findElementByClassNameOfParent(div, "divDutchGableDistIn");
        var txtDutchGableDistIn = findElementByClassNameOfParent(div, "txtDutchGableDistIn");
        var dutchGableDistInSlider = findElementByClassNameOfParent(div, "dutchGableDistInSlider");
        $(dutchGableDistInSlider).slider({
            "min": 100,
            "max": 10000,
            "step": 100,
            "value": 1500,
            "slide": function(event, ui) {
                txtDutchGableDistIn.value = ui.value;
                callbacks.setRoofEndDutchGableDistIn(ui.value);
            }
        });
        txtDutchGableDistIn.value = "1500";
        txtDutchGableDistIn.addEventListener("input", function() {
            var value = parseFloat(txtDutchGableDistIn.value);
            if (!isNaN(value)) {
                $(dutchGableDistInSlider).slider({ "value": value });
                callbacks.setRoofEndDutchGableDistIn(value);
            }
        });
        cboRoofEndType.addEventListener("change", function() {
            divDutchGableDistIn.style.display = cboRoofEndType.value == "dutchGable" ? "block" : "none";
            switch (cboRoofEndType.value) {
                case "gable":
                    callbacks.setRoofEndToGable();
                    break;
                case "hip":
                    callbacks.setRoofEndToHip();
                    break;
                case "dutchGable":
                    callbacks.setRoofEndToDutchGable();
                    break;
                case "creeper":
                    callbacks.setRoofEndToCreeper();
                    break;
                default:
                    break;
            }
        });
        callbacks.listenToRoofEndData(function(roofEndData) {
            roofEndData.partialMatch(function() {}, {
                gable: function() { return function() {
                    cboRoofEndType.value = "gable";
                    divDutchGableDistIn.style.display = "none";
                }; },
                hip: function() { return function() {
                    cboRoofEndType.value = "hip";
                    divDutchGableDistIn.style.display = "none";
                }; },
                dutchGable: function(distIn) { return function() {
                    cboRoofEndType.value = "dutchGable";
                    divDutchGableDistIn.style.display = "block";
                    txtDutchGableDistIn.value = "" + distIn;
                    $(dutchGableDistInSlider).value = distIn;
                }; },
                creeper: function() { return function() {
                    cboRoofEndType.value = "creeper";
                    divDutchGableDistIn.style.display = "none";
                }; }
            })();
        });
    };
})();

initRoofEndProperties(
    document.getElementById("divEnd1RoofEndProperties"),
    {
        listenToRoofEndData: function(callback) {
            return app.SodiumUtil
                .streamFilterOption(
                    app.sodium.Operational
                        .defer(app.sFocusedBuildingIdOpChanged)
                        .snapshot1(app.cBuildingDataOp)
                )
                .map(x => x.end1RoofEndData)
                .listen(callback);
        },
        setRoofEndToGable: function() {
            app.setEnd1RoofEndToGable();
        },
        setRoofEndToHip: function() {
            app.setEnd1RoofEndToHip();
        },
        setRoofEndToDutchGable: function() {
            app.setEnd1RoofEndToDutchGable();
        },
        setRoofEndDutchGableDistIn: function(distIn) {
            app.setEnd1RoofEndDutchGableDistIn(distIn);
        },
        setRoofEndToCreeper: function() {
            app.setEnd1RoofEndToCreeper();
        }
    }
);

initRoofEndProperties(
    document.getElementById("divEnd2RoofEndProperties"),
    {
        listenToRoofEndData: function(callback) {
            return app.SodiumUtil
                .streamFilterOption(
                    app.sodium.Operational
                        .defer(app.sFocusedBuildingIdOpChanged)
                        .snapshot1(app.cBuildingDataOp)
                )
                .map(x => x.end2RoofEndData)
                .listen(callback);
        },
        setRoofEndToGable: function() {
            app.setEnd2RoofEndToGable();
        },
        setRoofEndToHip: function() {
            app.setEnd2RoofEndToHip();
        },
        setRoofEndToDutchGable: function() {
            app.setEnd2RoofEndToDutchGable();
        },
        setRoofEndDutchGableDistIn: function(distIn) {
            app.setEnd2RoofEndDutchGableDistIn(distIn);
        },
        setRoofEndToCreeper: function() {
            app.setEnd2RoofEndToCreeper();
        }
    }
);
