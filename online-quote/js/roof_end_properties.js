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
    };
})();

initRoofEndProperties(
    document.getElementById("divEnd1RoofEndProperties"),
    {
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
