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
        var radRoofEndTypeGable = findElementByClassNameOfParent(div, "radRoofEndTypeGable");
        var roofEndTypeGableId = genId();
        radRoofEndTypeGable.id = roofEndTypeGableId;
        findElementByClassNameOfParent(div, "lblRoofEndTypeGable").setAttribute("for", roofEndTypeGableId);
        var radRoofEndTypeHip = findElementByClassNameOfParent(div, "radRoofEndTypeHip");
        var roofEndTypeHipId = genId();
        radRoofEndTypeHip.id = roofEndTypeHipId;
        findElementByClassNameOfParent(div, "lblRoofEndTypeHip").setAttribute("for", roofEndTypeHipId);
        var radRoofEndTypeDutchGable = findElementByClassNameOfParent(div, "radRoofEndTypeDutchGable");
        var roofEndTypeDutchGableId = genId();
        radRoofEndTypeDutchGable.id = roofEndTypeDutchGableId;
        findElementByClassNameOfParent(div, "lblRoofEndTypeDutchGable").setAttribute("for", roofEndTypeDutchGableId);
        var radRoofEndTypeCreeper = findElementByClassNameOfParent(div, "radRoofEndTypeCreeper");
        var roofEndTypeCreeperId = genId();
        radRoofEndTypeCreeper.id = roofEndTypeCreeperId;
        findElementByClassNameOfParent(div, "lblRoofEndTypeCreeper").setAttribute("for", roofEndTypeCreeperId);
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
        radRoofEndTypeGable.addEventListener("change", function() {
            if (radRoofEndTypeGable.checked) {
                divDutchGableDistIn.style.display = "none";
                callbacks.setRoofEndToGable();
            }
        });
        radRoofEndTypeHip.addEventListener("change", function() {
            if (radRoofEndTypeHip.checked) {
                divDutchGableDistIn.style.display = "none";
                callbacks.setRoofEndToHip();
            }
        });
        radRoofEndTypeDutchGable.addEventListener("change", function() {
            if (radRoofEndTypeDutchGable.checked) {
                divDutchGableDistIn.style.display = "block";
                callbacks.setRoofEndToDutchGable();
            }
        });
        radRoofEndTypeCreeper.addEventListener("change", function() {
            if (radRoofEndTypeCreeper.checked) {
                divDutchGableDistIn.style.display = "none";
                callbacks.setRoofEndToCreeper();
            }
        });
        callbacks.listenToRoofEndData(function(roofEndData) {
            roofEndData.partialMatch(function() {}, {
                gable: function() { return function() {
                    radRoofEndTypeGable.checked = true;
                    divDutchGableDistIn.style.display = "none";
                }; },
                hip: function() { return function() {
                    radRoofEndTypeHip.checked = true;
                    divDutchGableDistIn.style.display = "none";
                }; },
                dutchGable: function(distIn) { return function() {
                    radRoofEndTypeDutchGable.checked = true;
                    divDutchGableDistIn.style.display = "block";
                    txtDutchGableDistIn.value = "" + distIn;
                    $(dutchGableDistInSlider).value = distIn;
                }; },
                creeper: function() { return function() {
                    radRoofEndTypeCreeper.checked = true;
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
