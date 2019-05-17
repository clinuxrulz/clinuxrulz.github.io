
var openPropertiesAppCallback = function(propertiesName) {};
var addOpeningButtonClickCallback = function(openingType) {};
var toggleBaysButtonClickCallback = function() {};
var toggleWallsButtonClickCallback = function() {};
var uiLoadedCallback = function() {};
function openProperties(propertiesName) {
    var i;
    var x = document.getElementsByClassName("properties");
    // toggle behavour
    if (document.getElementById(propertiesName).style.display != "none") {
        document.getElementById(propertiesName).style.display = "none";
        return;
    }
    //
    for (i = 0; i < x.length; ++i) {
        x[i].style.display = "none"; 
    }
    document.getElementById(propertiesName).style.display = "block";
    openPropertiesAppCallback(propertiesName);
}
function setAddOpeningPropertiesVisible(visible) {
    var addOpeningProperties = document.getElementById("addOpeningProperties");
    addOpeningProperties.style.display = visible ? "block" : "none";
}
function initAvailableSheetingProfiles(profiles) {
    var i, j;
    var x = document.getElementsByClassName("sheetingProfiles");
    for (i = 0; i < x.length; ++i) {
        var cboSheetingProfiles = x[i];
        cboSheetingProfiles.innerHTML = "";
        for (j = 0; j < profiles.length; ++j) {
            var option = document.createElement("option");
            option.setAttribute("value", profiles[j].value);
            option.innerText = profiles[j].name;
            cboSheetingProfiles.appendChild(option);
        }
    }
}
function initAvailableColours(colours) {
    var i;
    var x = document.getElementsByClassName("colours");
    for (i = 0; i < x.length; ++i) {
        (function() {
            var j;
            var cboColours = x[i];
            cboColours.innerHTML = "";
            for (j = 0; j < colours.length; ++j) {
                var option = document.createElement("option");
                option.setAttribute("value", colours[j].value);
                option.style = "color:" + colours[j].textColour + ";background:" + colours[j].colour;
                option.innerText = colours[j].name;
                cboColours.appendChild(option);
            }
            cboColours.addEventListener("change", function() {
                var j;
                for (j = 0; j < colours.length; ++j) {
                    if (cboColours.value == colours[j].value) {
                        cboColours.style = "color:" + colours[j].textColour + ";background:" + colours[j].colour;
                    }
                }
            });
        })();
    }
}
function updateCboColour(cboColour) {
    var i;
    var child;
    for (i = 0; i < cboColour.children.length; ++i) {
        child = cboColour.children[i];
        if (child.value == cboColour.value) {
            cboColour.style = "color:" + child.style.color + ";background:" + child.style.background;
            break;
        }
    }
}
function appLoaded(app) {
    w3.includeHTML(function() {
        uiLoadedCallback();
        var sInitCladdingData = app.SodiumUtil.streamFilterOption(app.sodium.Operational.defer(app.sFocusedBuildingIdOpChanged).snapshot1(app.cBuildingDataOp)).map(function(x) { return x.claddingData; });
        var cboWallSheetingProfile = document.getElementById("cboWallSheetingProfile");
        var cboRoofSheetingProfile = document.getElementById("cboRoofSheetingProfile");
        var cboWallSheetingColour = document.getElementById("cboWallSheetingColour");
        var cboRoofSheetingColour = document.getElementById("cboRoofSheetingColour");
        var cboGutterColour = document.getElementById("cboGutterColour");
        var cboBargeColour = document.getElementById("cboBargeColour");
        var cboRidgeColour = document.getElementById("cboRidgeColour");
        cboWallSheetingProfile.addEventListener("change", function() {
            app.setWallSheetingProfile(cboWallSheetingProfile.value);
        });
        cboRoofSheetingProfile.addEventListener("change", function() {
            app.setRoofSheetingProfile(cboRoofSheetingProfile.value);
        });
        cboWallSheetingColour.addEventListener("change", function() {
            app.setWallSheetingColour(cboWallSheetingColour.value);
        });
        cboRoofSheetingColour.addEventListener("change", function() {
            app.setRoofSheetingColour(cboRoofSheetingColour.value);
        });
        cboGutterColour.addEventListener("change", function() {
            app.setGutterColour(cboGutterColour.value);
        });
        cboBargeColour.addEventListener("change", function() {
            app.setBargeColour(cboBargeColour.value);
        });
        cboRidgeColour.addEventListener("change", function() {
            app.setRidgeColour(cboRidgeColour.value);
        });
        if (app.claddingDataOp.isSome) {
            var claddingData = app.claddingDataOp.fromSome();
            cboWallSheetingProfile.value = claddingData.wallSheetingProfile;
            cboRoofSheetingProfile.value = claddingData.roofSheetingProfile;
            cboWallSheetingColour.value = claddingData.wallSheetingColour;
            cboRoofSheetingColour.value = claddingData.roofSheetingColour;
            cboGutterColour.value = claddingData.gutterColour;
            cboBargeColour.value = claddingData.bargeColour;
            cboRidgeColour.value = claddingData.ridgeColour;
        }
        sInitCladdingData.listen(function(claddingData) {
            cboWallSheetingProfile.value = claddingData.wallSheetingProfile;
            cboRoofSheetingProfile.value = claddingData.roofSheetingProfile;
            cboWallSheetingColour.value = claddingData.wallSheetingColour;
            cboRoofSheetingColour.value = claddingData.roofSheetingColour;
            cboGutterColour.value = claddingData.gutterColour;
            cboBargeColour.value = claddingData.bargeColour;
            cboRidgeColour.value = claddingData.ridgeColour;
            updateCboColour(cboWallSheetingColour);
            updateCboColour(cboRoofSheetingColour);
            updateCboColour(cboGutterColour);
            updateCboColour(cboBargeColour);
            updateCboColour(cboRidgeColour);
        });
        updateCboColour(cboWallSheetingColour);
        updateCboColour(cboRoofSheetingColour);
        updateCboColour(cboGutterColour);
        updateCboColour(cboBargeColour);
        updateCboColour(cboRidgeColour);
        initUI(app);
    });
}
function initUI(app) {
    var appPath = window["shedDesignerAppPath"];
    $(function() {
        new cScriptLoader([
            appPath + "/js/building_properties.js",
            appPath + "/js/roof_end_properties.js",
            appPath + "/js/insert_building.js"
        ]).loadFiles();
        // floor system properties
        (function() {
            var chkFloorSystemEnabled = document.getElementById("chkFloorSystemEnabled");
            var divFloorSystemProperties = document.getElementById("divFloorSystemProperties");
            var txtFloorSystemHeight = document.getElementById("txtFloorSystemHeight");
            $("#floorSystemHeightSlider").slider({
                "min": 500,
                "max": 1500,
                "step": 100,
                "value": 1000,
                "slide": function(event, ui) {
                    txtFloorSystemHeight.value = ui.value;
                    app.setFloorSystemHeight(ui.value);
                }
            });
            txtFloorSystemHeight.value = "1000";
            chkFloorSystemEnabled.addEventListener("change", function() {
                app.setFloorSystemEnabled(chkFloorSystemEnabled.checked);
                if (chkFloorSystemEnabled.checked) {
                    divFloorSystemProperties.style.display = "block";
                } else {
                    divFloorSystemProperties.style.display = "none";
                }
            });
            txtFloorSystemHeight.addEventListener("input", function() {
                var value = parseFloat(txtFloorSystemHeight.value);
                if (!isNaN(value)) {
                    app.setFloorSystemHeight(value);
                    $("#floorSystemHeightSlider").slider({"value": value});
                }
            });
        })();
        // barn properties
        (function() {
            var txtLeftWingSpan = document.getElementById("txtLeftWingSpan");
            txtLeftWingSpan.value = "3000";
            $("#leftWingSpanSlider").slider({
                "min": 2000,
                "max": 6000,
                "step": 500,
                "value": 3000,
                "slide": function(event, ui) {
                    txtLeftWingSpan.value = ui.value;
                    app.setLeftWingSpan(ui.value);
                }
            });
            txtLeftWingSpan.addEventListener("input", function(ev) {
                $("#leftWingSpanSlider").slider("value", txtLeftWingSpan.value);
                let value2 = parseFloat(txtLeftWingSpan.value);
                if (!isNaN(value2)) {
                    app.setLeftWingSpan(value2);
                }
            });
            var txtLeftWingHeight = document.getElementById("txtLeftWingHeight");
            txtLeftWingHeight.value = "2000";
            $("#leftWingHeightSlider").slider({
                "min": 1500,
                "max": 6000,
                "step": 100,
                "value": 2000,
                "slide": function(event, ui) {
                    txtLeftWingHeight.value = ui.value;
                    app.setLeftWingHeight(ui.value);
                }
            });
            txtLeftWingHeight.addEventListener("input", function(ev) {
                $("#leftWingHeightSlider").slider("value", txtLeftWingHeight.value);
                let value2 = parseFloat(txtLeftWingHeight.value);
                if (!isNaN(value2)) {
                    app.setLeftWingHeight(value2);
                }
            });
            var txtLeftWingPitch = document.getElementById("txtLeftWingPitch");
            txtLeftWingPitch.value = "5";
            $("#leftWingPitchSlider").slider({
                "min": 5,
                "max": 25,
                "step": 5,
                "value": 5,
                "slide": function(event, ui) {
                    txtLeftWingPitch.value = ui.value;
                    app.setLeftWingPitch(ui.value);
                }
            });
            txtLeftWingPitch.addEventListener("input", function(ev) {
                $("#leftWingPitchSlider").slider("value", txtLeftWingPitch.value);
                let value2 = parseFloat(txtLeftWingPitch.value);
                if (!isNaN(value2)) {
                    app.setLeftWingPitch(value2);
                }
            });
            var chkRightWingSameAsLeft = document.getElementById("chkRightWingSameAsLeft");
            var lblLefts = document.getElementsByClassName("barnPropertiesLblLeft");
            var divBarnRightWingProperties = document.getElementById("barnRightWingProperties");
            chkRightWingSameAsLeft.addEventListener("change", function() {
                if (chkRightWingSameAsLeft.checked) {
                    divBarnRightWingProperties.style.display = "none";
                    for (var i = 0; i < lblLefts.length; ++i) {
                        var lblLeft = lblLefts[i];
                        lblLeft.style.display = "none";
                    }
                } else {
                    divBarnRightWingProperties.style.display = "block";
                    for (var i = 0; i < lblLefts.length; ++i) {
                        var lblLeft = lblLefts[i];
                        lblLeft.style.display = "block";
                    }
                }
                app.setRightWingSameAsLeftWing(chkRightWingSameAsLeft.checked);
            });
            var txtRightWingSpan = document.getElementById("txtRightWingSpan");
            txtRightWingSpan.value = "3000";
            $("#rightWingSpanSlider").slider({
                "min": 2000,
                "max": 6000,
                "step": 500,
                "value": 3000,
                "slide": function(event, ui) {
                    txtRightWingSpan.value = ui.value;
                    app.setRightWingSpan(ui.value);
                }
            });
            txtRightWingSpan.addEventListener("input", function(ev) {
                $("#rightWingSpanSlider").slider("value", txtRightWingSpan.value);
                let value2 = parseFloat(txtRightWingSpan.value);
                if (!isNaN(value2)) {
                    app.setRightWingSpan(value2);
                }
            });
            var txtRightWingHeight = document.getElementById("txtRightWingHeight");
            txtRightWingHeight.value = "2000";
            $("#rightWingHeightSlider").slider({
                "min": 1500,
                "max": 6000,
                "step": 100,
                "value": 2000,
                "slide": function(event, ui) {
                    txtRightWingHeight.value = ui.value;
                    app.setRightWingHeight(ui.value);
                }
            });
            txtRightWingHeight.addEventListener("input", function(ev) {
                $("#rightWingHeightSlider").slider("value", txtRightWingHeight.value);
                let value2 = parseFloat(txtRightWingHeight.value);
                if (!isNaN(value2)) {
                    app.setRightWingHeight(value2);
                }
            });
            var txtRightWingPitch = document.getElementById("txtRightWingPitch");
            txtRightWingPitch.value = "5";
            $("#rightWingPitchSlider").slider({
                "min": 5,
                "max": 25,
                "step": 5,
                "value": 5,
                "slide": function(event, ui) {
                    txtRightWingPitch.value = ui.value;
                    app.setLeftWingPitch(ui.value);
                }
            });
            txtRightWingPitch.addEventListener("input", function(ev) {
                $("#rightWingPitchSlider").slider("value", txtRightWingPitch.value);
                let value2 = parseFloat(txtRightWingPitch.value);
                if (!isNaN(value2)) {
                    app.setRightWingPitch(value2);
                }
            });
        })();
        // opening properties
        (function() {
            var txtOpeningWidth = document.getElementById("txtOpeningWidth");
            var txtOpeningHeight = document.getElementById("txtOpeningHeight");
            var txtOpeningHeadHeight = document.getElementById("txtOpeningHeadHeight");
            var chkOpeningHeadHeightSameAsOpeningHeight = document.getElementById("chkOpeningHeadHeightSameAsHeight");
            var divOpeningHeadHeight = document.getElementById("divOpeningHeadHeight");
            chkOpeningHeadHeightSameAsOpeningHeight.addEventListener("change", function() {
                if (chkOpeningHeadHeightSameAsOpeningHeight.checked) {
                    divOpeningHeadHeight.style.display = "none";
                    var value = parseFloat(txtOpeningHeight.value);
                    if (!isNaN(value)) {
                        app.setOpeningHeight(value);
                        $("#openingHeightSlider").slider({ value: value });
                        if (chkOpeningHeadHeightSameAsOpeningHeight.checked) {
                            app.setOpeningHeadHeight(value);
                            $("#openingHeadHeightSlider").slider({ value: value });
                        }
                    }
                } else {
                    divOpeningHeadHeight.style.display = "block";
                }
            });
            app.sSetOpeningProperties.listen(function(openingProperties) {
                txtOpeningWidth.value = '' + openingProperties.width;
                txtOpeningHeight.value = '' + openingProperties.height;
                txtOpeningHeadHeight.value = '' + openingProperties.headHeight;
                $("#openingWidthSlider").slider({ "value": openingProperties.width });
                $("#openingHeightSlider").slider({ "value": openingProperties.height });
                $("#openingHeadHeightSlider").slider({ "value": openingProperties.headHeight });
                if (openingProperties.headHeight == openingProperties.height) {
                    chkOpeningHeadHeightSameAsOpeningHeight.checked = true;
                }
            });
            $("#openingWidthSlider").slider({
                "min": 100,
                "max": 6000,
                "step": 100,
                "value": 1000,
                "slide": function(event, ui) {
                    txtOpeningWidth.value = ui.value;
                    app.setOpeningWidth(ui.value);
                }
            });
            $("#openingHeightSlider").slider({
                "min": 100,
                "max": 6000,
                "step": 100,
                "value": 1000,
                "slide": function(event, ui) {
                    txtOpeningHeight.value = ui.value;
                    app.setOpeningHeight(ui.value);
                    if (chkOpeningHeadHeightSameAsOpeningHeight.checked) {
                        txtOpeningHeadHeight.value = ui.value;
                        app.setOpeningHeadHeight(ui.value);
                    }
                }
            });
            $("#openingHeadHeightSlider").slider({
                "min": 100,
                "max": 6000,
                "step": 100,
                "value": 1000,
                "slide": function(event, ui) {
                    txtOpeningHeadHeight.value = ui.value;
                    app.setOpeningHeadHeight(ui.value);
                }
            });
            txtOpeningWidth.addEventListener("input", function() {
                var value = parseFloat(txtOpeningWidth.value);
                if (!isNaN(value)) {
                    app.setOpeningWidth(value);
                    $("#openingWidthSlider").slider({ value: value });
                }
            });
            txtOpeningHeight.addEventListener("input", function() {
                var value = parseFloat(txtOpeningHeight.value);
                if (!isNaN(value)) {
                    app.setOpeningHeight(value);
                    $("#openingHeightSlider").slider({ value: value });
                    if (chkOpeningHeadHeightSameAsOpeningHeight.checked) {
                        app.setOpeningHeadHeight(value);
                        $("#openingHeadHeightSlider").slider({ value: value });
                    }
                }
            });
            txtOpeningHeadHeight.addEventListener("input", function() {
                var value = parseFloat(txtOpeningHeadHeight.value);
                if (!isNaN(value)) {
                    app.setOpeningHeadHeight(value);
                    $("#openingHeadHeightSlider").slider({ value: value });
                }
            });
        })();
        // mezzanineProperties
        (function() {
            let divMezzanineProperties = document.getElementById("mezzanineProperties");
            let txtMezzanineHeight = document.getElementById("txtMezzanineHeight");
            $("#mezzanineHeightSlider").slider({
                "min": 500,
                "max": 6000,
                "step": 100,
                "value": 2400,
                "slide": function(event, ui) {
                    app.setMezzanineHeight(ui.value);
                    txtMezzanineHeight.value = ui.value;
                }
            });
            txtMezzanineHeight.addEventListener("input", function() {
                var value = parseFloat(txtMezzanineHeight.value);
                if (!isNaN(value)) {
                    app.setMezzanineHeight(value);
                    $("#mezzanineHeightSlider").slider({ value: value });
                }
            });
            app.cMezzanineFormPropertiesVisible.listen(function(visible) {
                divMezzanineProperties.style.display = visible ? "block" : "none";
            });
            app.sSetFormProperties.listen(function(formProperties) {
                formProperties.partialMatch(
                    function() {},
                    {
                        mezzanine: function(mezzanineFormProperties) {
                            return function() {
                                $("#mezzanineHeightSlider").slider({value: mezzanineFormProperties.height});
                                txtMezzanineHeight.value = "" + mezzanineFormProperties.height;
                            };
                        }
                    }
                )();
            });
        })();
        //
        (function() {
            var btnEditBays = document.getElementById("btnEditBays");
            btnEditBays.addEventListener("click", function() {
                app.editBays();
            });
        })();
        (function() {
            var btnSheetingStyle = document.getElementById("btnSheetingStyle");
            btnSheetingStyle.addEventListener("click", function() {
                app.insertSheetingStyle();
            });
        })();
        (function() {
            var btnAddSkylight = document.getElementById("btnAddSkylight");
            btnAddSkylight.addEventListener("click", function() {
                app.insertSkylight();
            });
        })();
        (function() {
            var btnAddWhirlybird = document.getElementById("btnAddWhirlybird");
            btnAddWhirlybird.addEventListener("click", function() {
                app.insertWhirlybird();
            });
        })();
        (function() {
            var chkAnimate = document.getElementById("chkAnimate");
            chkAnimate.addEventListener("change", function() {
                app.setAnimate(chkAnimate.checked);
            });
        })();
        (function() {
            var btnToggleLeanTo = document.getElementById("btnToggleLeanTo");
            btnToggleLeanTo.addEventListener("click", function() {
                app.toggleLeanTo();
            });
            var btnInsertMezzanine = document.getElementById("btnInsertMezzanine");
            btnInsertMezzanine.addEventListener("click", function() {
                app.insertMezzanine();
            });
            var btnInsertBuilding = document.getElementById("btnInsertBuilding");
            btnInsertBuilding.addEventListener("click", function() {
                app.insertBuilding();
            });
            var txtLeanToSpan = document.getElementById("txtLeanToSpan");
            var txtLeanToHeight = document.getElementById("txtLeanToHeight");
            var txtLeanToPitch = document.getElementById("txtLeanToPitch");
            var leanToPropertiesDiv = document.getElementById("toggleLeanToProperties");
            var leanToFormProperties = app.leanToFormProperties;
            txtLeanToSpan.value = '' + leanToFormProperties.span;
            txtLeanToHeight.value = '' + leanToFormProperties.height;
            txtLeanToPitch.value = '' + leanToFormProperties.pitch;
            txtLeanToSpan.addEventListener("input", function() {
                let value = parseFloat(txtLeanToSpan.value);
                if (!isNaN(value)) {
                    app.leanToFormPropertiesSetSpan(value);
                }
            });
            txtLeanToHeight.addEventListener("input", function() {
                let value = parseFloat(txtLeanToHeight.value);
                if (!isNaN(value)) {
                    app.leanToFormPropertiesSetHeight(value);
                }
            });
            txtLeanToPitch.addEventListener("input", function() {
                let value = parseFloat(txtLeanToPitch.value);
                if (!isNaN(value)) {
                    app.leanToFormPropertiesSetPitch(value);
                }
            });
            app.cLeanToFormPropertiesVisible.listen(function(visible) {
                if (visible) {
                    leanToPropertiesDiv.style.display = "block";
                } else {
                    leanToPropertiesDiv.style.display = "none";
                }
            });
        })();
        //
        (function() {
            var scriptLoader = new cScriptLoader(
                [
                    appPath + "/js/bay_edit_properties.js",
                    appPath + "/js/wall_sheeting_style_properties.js"
                ]
            );
            scriptLoader.loadFiles();
        })();
        //doLoadFromAddressBar(app);
    });
}
function doLoadFromAddressBar(app) {
    var appPath = window["shedDesignerAppPath"];
    var data = window.location.search.substring(1);
    if (data.length != 0 && data != 'm') {
        app.loadBuildingFromCompressedBase64(data);
    }
    var scriptLoader = new cScriptLoader([appPath + "/js/GLTFExporter.js"]);
    scriptLoader.loadFiles();
}
function updateShareLink() {
    var shareLink = document.getElementById("shareLink");
    app.saveBuildingToCompressedBase64()
        .then(function(data) {
            let url = window.location.href + "?" + data;
            shareLink.href = url;
            shareLink.innerText = "link";
        });
}
function download() {
    app.downloadGLTF();
}

function closeSide() {
    var buttons = document.querySelectorAll('.properties');
    for (var i=0; i<buttons.length; i++) {
        buttons[i].style.display = 'none';
    }
    var buttons = document.querySelectorAll('#addOpeningProperties,#mezzanineProperties,#bayEditProperties,#wallSheetingStyleProperties');
    for (var i=0; i<buttons.length; i++) {
        buttons[i].style.display = 'none';
    }
    var buttons = document.querySelectorAll('.propcontainer');
    for (var i=0; i<buttons.length; i++) {
        buttons[i].style.overflow = 'auto';
    }
}
