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
    var cleanups = [];
    cFormOp.listen(function(formOp) {
        cleanups.forEach(cleanup => cleanup());
        cleanups.splice(0, cleanups.length);
        divFaceProperties.style.display = formOp.isSome ? "block" : "none";
        if (formOp.isNone) {
            return;
        }
        var form = formOp.fromSome();
        
    });
}
