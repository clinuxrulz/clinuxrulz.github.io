
(function() {
    var divInsertBuilding = document.getElementById("divInsertBuilding");
    var radInsertBuildingTLCorner = document.getElementById("radInsertBuildingTLCorner");
    var radInsertBuildingTCCorner = document.getElementById("radInsertBuildingTCCorner");
    var radInsertBuildingTRCorner = document.getElementById("radInsertBuildingTRCorner");
    var radInsertBuildingCLCorner = document.getElementById("radInsertBuildingCLCorner");
    var radInsertBuildingCRCorner = document.getElementById("radInsertBuildingCRCorner");
    var radInsertBuildingBLCorner = document.getElementById("radInsertBuildingBLCorner");
    var radInsertBuildingBCCorner = document.getElementById("radInsertBuildingBCCorner");
    var radInsertBuildingBRCorner = document.getElementById("radInsertBuildingBRCorner");
    var radInsertBuildingRot0 = document.getElementById("radInsertBuildingRot0");
    var radInsertBuildingRot90 = document.getElementById("radInsertBuildingRot90");
    var radInsertBuildingRotCustom = document.getElementById("radInsertBuildingRotCustom");
    var divInsertBuildingRotCustom = document.getElementById("divInsertBuildingRotCustom");
    var txtInsertBuildingRotCustom = document.getElementById("txtInsertBuildingRotCustom");
    var cFormOp =
        app.SodiumUtil.cellCalmRefEq(
            app.cShowFormOp.map(function(showFormOp) {
                if (showFormOp.isNone) {
                    return app.Option.none();
                }
                var showForm = showFormOp.fromSome();
                return showForm.partialMatch(app.Option.none(), {
                    buildingPosition: function(form) {
                        return app.Option.some(form);
                    }
                });
            })
        );
    cFormOp.listen(function(formOp) {
        divInsertBuilding.style.display = formOp.isSome ? "block" : "none";
        if (formOp.isNone) {
            return;
        }
        var form = formOp.fromSome();
        var BuildingPositionCorner = form.BuildingPositionCorner;
        switch (form.cInitBuildingPositionCorner) {
            case BuildingPositionCorner.TopLeft:
                radInsertBuildingTLCorner.checked = true;
                break;
            case BuildingPositionCorner.TopCentre:
                radInsertBuildingTCCorner.checked = true;
                break;
            case BuildingPositionCorner.TopRight:
                radInsertBuildingTRCorner.checked = true;
                break;
            case BuildingPositionCorner.CentreLeft:
                radInsertBuildingCLCorner.checked = true;
                break;
            case BuildingPositionCorner.CentreRight:
                radInsertBuildingCRCorner.checked = true;
                break;
            default:
            case BuildingPositionCorner.BottomLeft:
                radInsertBuildingBLCorner.checked = true;
                break;
            case BuildingPositionCorner.BottomCentre:
                radInsertBuildingBCCorner.checked = true;
                break;
            case BuildingPositionCorner.BottomRight:
                radInsertBuildingBRCorner.checked = true;
                break;
        }
        var angle = form.cInitAngle.sample();
        if (angle == 0) {
            radInsertBuildingRot0.checked = true;
            divInsertBuildingRotCustom.style.display = "none";
        } else if (angle == 90) {
            radInsertBuildingRot90.checked = true;
            divInsertBuildingRotCustom.style.display = "none";
        } else {
            radInsertBuildingRotCustom.checked = true;
            divInsertBuildingRotCustom.style.display = "block";
        }
    });
    radInsertBuildingTLCorner.addEventListener("change", function() {
        if (radInsertBuildingTLCorner.checked) {
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                var BuildingPositionCorner = form.BuildingPositionCorner;
                form.setBuildingPositionCorner(BuildingPositionCorner.TopLeft);
            }
        }
    });
    radInsertBuildingTCCorner.addEventListener("change", function() {
        if (radInsertBuildingTCCorner.checked) {
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                var BuildingPositionCorner = form.BuildingPositionCorner;
                form.setBuildingPositionCorner(BuildingPositionCorner.TopCentre);
            }
        }
    });
    radInsertBuildingTRCorner.addEventListener("change", function() {
        if (radInsertBuildingTRCorner.checked) {
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                var BuildingPositionCorner = form.BuildingPositionCorner;
                form.setBuildingPositionCorner(BuildingPositionCorner.TopRight);
            }
        }
    });
    radInsertBuildingCLCorner.addEventListener("change", function() {
        if (radInsertBuildingCLCorner.checked) {
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                var BuildingPositionCorner = form.BuildingPositionCorner;
                form.setBuildingPositionCorner(BuildingPositionCorner.CentreLeft);
            }
        }
    });
    radInsertBuildingCRCorner.addEventListener("change", function() {
        if (radInsertBuildingCRCorner.checked) {
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                var BuildingPositionCorner = form.BuildingPositionCorner;
                form.setBuildingPositionCorner(BuildingPositionCorner.CentreRight);
            }
        }
    });
    radInsertBuildingBLCorner.addEventListener("change", function() {
        if (radInsertBuildingBLCorner.checked) {
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                var BuildingPositionCorner = form.BuildingPositionCorner;
                form.setBuildingPositionCorner(BuildingPositionCorner.BottomLeft);
            }
        }
    });
    radInsertBuildingBCCorner.addEventListener("change", function() {
        if (radInsertBuildingBCCorner.checked) {
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                var BuildingPositionCorner = form.BuildingPositionCorner;
                form.setBuildingPositionCorner(BuildingPositionCorner.BottomCentre);
            }
        }
    });
    radInsertBuildingBRCorner.addEventListener("change", function() {
        if (radInsertBuildingBRCorner.checked) {
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                var BuildingPositionCorner = form.BuildingPositionCorner;
                form.setBuildingPositionCorner(BuildingPositionCorner.BottomRight);
            }
        }
    });
    radInsertBuildingRot0.addEventListener("change", function() {
        if (radInsertBuildingRot0.checked) {
            divInsertBuildingRotCustom.style.display = "none";
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                form.setAngle(0.0);
            }
        }
    });
    radInsertBuildingRot90.addEventListener("change", function() {
        if (radInsertBuildingRot90.checked) {
            divInsertBuildingRotCustom.style.display = "none";
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                form.setAngle(90.0);
            }
        }
    });
    radInsertBuildingRotCustom.addEventListener("change", function() {
        if (radInsertBuildingRotCustom.checked) {
            divInsertBuildingRotCustom.style.display = "block";
            var formOp = cFormOp.sample();
            if (formOp.isSome) {
                var form = formOp.fromSome();
                var angle = parseFloat(txtInsertBuildingRotCustom.value);
                if (!isNaN(angle)) {
                    form.setAngle(angle);
                }
            }
        }
    });
    txtInsertBuildingRotCustom.addEventListener("input", function() {
        var formOp = cFormOp.sample();
        if (formOp.isSome) {
            var form = formOp.fromSome();
            var angle = parseFloat(txtInsertBuildingRotCustom.value);
            if (!isNaN(angle)) {
                form.setAngle(angle);
            }
        }
    });
})();
