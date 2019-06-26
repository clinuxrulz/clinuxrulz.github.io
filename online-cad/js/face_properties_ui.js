function cadAppInitFaceProperties(app) {
    var mkId = (function() {
        var counter = 0;
        return function() {
            return "cadAppFacePropertiesId" + (counter++);
        };
    })();
    var materialTypeGroupId = mkId();
    var divFaceProperties = $(".divFaceProperties", app.appDiv)[0];
    var radMaterialTypeSolidColour = $(".radMaterialTypeSolidColour", divFaceProperties)[0];
    var lblMaterialTypeSolidColour = $(".lblMaterialTypeSolidColour", divFaceProperties)[0];
    var colourSelectorMaterial = $(".colourSelectorMaterial", divFaceProperties)[0];
    var radMaterialTypeTexture = $(".radMaterialTypeTexture", divFaceProperties)[0];
    var lblMaterialTypeTexture = $(".lblMaterialTypeTexture", divFaceProperties)[0];
    var fileSelectorMaterial = $(".fileSelectorMaterial", divFaceProperties)[0];
    var materialTypeSolidColourId = mkId();
    radMaterialTypeSolidColour.name = materialTypeGroupId;
    radMaterialTypeSolidColour.id = materialTypeSolidColourId;
    lblMaterialTypeSolidColour.htmlFor = materialTypeSolidColourId;
    var materialTypeTextureId = mkId();
    radMaterialTypeTexture.name = materialTypeGroupId;
    radMaterialTypeTexture.id = materialTypeTextureId;
    lblMaterialTypeTexture.htmlFor = materialTypeTextureId;
    //
    var cFormOp = app.appModel.cFacePropertiesFormOp;
    var observeColourValue = function(colourPicker, callback) {
        var listener = function() {
            var colourOp = app.Colour.fromHex(colourPicker.value.substr(1));
            if (colourOp.isSome) {
                var colour = colourOp.fromSome();
                callback(colour);
            }
        };
        colourPicker.addEventListener("change", listener);
        return function() {
            colourPicker.removeEventListener("change", listener);
        };
    };
    var observeImageFile = function(fileSelector, callback) {
        var listener = function() {
            var files = fileSelector.files;
            if (files.length == 0) {
                callback(undefined);
                return;
            }
            var file = files[0];
            if (file.type.match("image/.*")) {
                var reader = new FileReader();
                reader.onload = function(evt) {
                    if (evt.target.readyState == FileReader.DONE) {
                        var image = document.createElement("img");
                        image.src = event.target.result;
                        callback(image);
                    }
                };
                reader.readAsDataURL(file);
            } else {
                window.alert("Not an image.");
            }
        };
        fileSelector.addEventListener("change", listener);
        return function() {
            fileSelector.removeEventListener("change", listener);
        };
    };
    var cleanups = [];
    cFormOp.listen(function(formOp) {
        cleanups.forEach(cleanup => cleanup());
        cleanups.splice(0, cleanups.length);
        divFaceProperties.style.display = formOp.isSome ? "block" : "none";
        if (formOp.isNone) {
            return;
        }
        var form = formOp.fromSome();
        var initUsingColour = form.cColourOpOp.sample().map(x => x.isSome).orSome(false);
        let initUsingTexture = form.cTextureOpOp.sample().map(x => x.isSome).orSome(false);
        if (initUsingColour) {
            radMaterialTypeSolidColour.checked = true;
        }
        if (initUsingTexture) {
            radMaterialTypeTexture.checked = true;
        }
        cleanups.push(
            observeColourValue(
                colourSelectorMaterial,
                function(materialColour) {
                    if (materialColour == undefined) {
                        return;
                    }
                    radMaterialTypeSolidColour.checked = true;
                    form.useColour(materialColour);
                }
            )
        );
        cleanups.push(
            observeImageFile(
                fileSelectorMaterial,
                function(image) {
                    if (image == undefined) {
                        return;
                    }
                    radMaterialTypeTexture.checked = true;
                    form.useTexture(image);
                }
            )
        );
    });
}
