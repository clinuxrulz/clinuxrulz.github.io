
function cadAppInitSceneList(app) {
    var mkId = (function() {
        var counter = 0;
        return function() {
            return "cadAppSceneListId" + (counter++);
        };
    })();
    var scenesId = mkId();
    var divScenes = $(".divScenes", app.appDiv)[0];
    var lblScenes = $(".lblScenes", divScenes)[0];
    var lstScenes = $(".lstScenes", divScenes)[0];
    var btnAddScene = $(".btnAddScene", divScenes)[0];
    var btnDeleteScene = $(".btnDeleteScene", divScenes)[0];
    var btnRenameScene = $(".btnRenameScene", divScenes)[0];
    lstScenes.id = scenesId;
    lblScenes.htmlFor = scenesId;
    $(lstScenes).selectable({
        stop: function() {
            var sceneId = $(".ui-selected", this).attr("data-sceneId");
            if (sceneId != undefined) {
                sceneId = Number.parseInt(sceneId);
            }
            if (!isNaN(sceneId)) {
                app.appModel.selectSceneIdOp(app.Option.some(sceneId));
            } else {
                app.appModel.selectSceneIdOp(app.Option.none());
            }
        }
    });
    app.appModel.cCurrentDocumentOp.listen(function(currentDocumentOp) {
        if (currentDocumentOp.isSome) {
            $("li", lstScenes).removeClass("ui-selected");
        }
    });
    var mkSceneName = (function() {
        var counter = 0;
        return function() {
            return "Scene " + (++counter);
        };
    })();
    btnAddScene.addEventListener("click", function() {
        app.appModel.addScene(mkSceneName());
    });
    app.appModel.cCurrentSceneOp.listen(currentSceneOp => {
        btnDeleteScene.disabled = currentSceneOp.isNone;
        btnRenameScene.disabled = currentSceneOp.isNone;
    });
    btnDeleteScene.addEventListener("click", function() {
        let currentSceneOp = app.appModel.cCurrentSceneOp.sample();
        if (currentSceneOp.isNone) {
            return;
        }
        let currentScene = currentSceneOp.fromSome();
        let sceneId = currentScene.sceneId;
        app.appModel.deleteScene(sceneId);
    });
    var doRenameScene =
        function() {
            var targetLis = $("li.ui-selected", lstScenes);
            if (targetLis.length == 0) {
                return;
            }
            var targetLi = targetLis[0];
            var sceneId = Number.parseInt(targetLi.getAttribute("data-sceneId"));
            if (Number.isNaN(sceneId)) {
                return;
            }
            var sceneName = targetLi.getAttribute("data-sceneName");
            while (targetLi.lastChild) {
                targetLi.removeChild(targetLi.lastChild);
            }
            var txtNewName = document.createElement("input");
            txtNewName.type = "text";
            txtNewName.value = sceneName;
            txtNewName.style.color = "black";
            targetLi.appendChild(txtNewName);
            txtNewName.focus();
            txtNewName.select();
            var canceled = false;
            var finishEdit = function() {
                if (canceled) {
                    return;
                }
                targetLi.setAttribute("data-sceneName", txtNewName.value);
                window.setTimeout(function() {
                    app.appModel.renameScene(sceneId, txtNewName.value);
                });
            };
            var cancelEdit = function() {
                canceled = true;
                targetLi.innerText = sceneName;
            };
            txtNewName.addEventListener("keydown", function(ev) {
                var e = ev || window.event;
                if (e.key == "Enter") {
                    finishEdit();
                } else if (e.key == "Escape") {
                    cancelEdit();
                }
            });
            txtNewName.addEventListener("focusout", function(ev) {
                finishEdit();
            });
        };
    btnRenameScene.addEventListener("click", doRenameScene);
    var cleanups = [];
    app.appModel.scenesModel.cSceneModels.listen(sceneModels => {
        cleanups.forEach(function(cleanup) { cleanup(); });
        cleanups = [];
        while (lstScenes.lastChild) {
            lstScenes.removeChild(lstScenes.lastChild);
        }
        for (let i = 0; i < sceneModels.length; ++i) {
            let sceneModel = sceneModels[i];
            let cSceneName =
                sceneModel.cScene3dComponentOp.map(
                    function(scene3dComponentOp) {
                        return scene3dComponentOp
                            .map(
                                function(scene3dComponent) {
                                    return scene3dComponent.name;
                                }
                            )
                            .orSome("?");
                    }
                );
            let li = document.createElement("li");
            li.addEventListener("mousedown", (function() {
                var lastTime = undefined;
                return function() {
                    var time = new Date();
                    if (lastTime != undefined) {
                        var diff = time - lastTime;
                        if (diff < 500.0) {
                            doRenameScene();
                        }
                    }
                    lastTime = time;
                };
            })());
            li.setAttribute("data-sceneId", "" + sceneModel.sceneId);
            li.setAttribute("data-sceneName", "");
            li.classList.add("ui-widget-content");
            cleanups.push(cSceneName.listen(function(sceneName) {
                li.setAttribute("data-sceneName", sceneName);
                li.innerText = sceneName;
            }));
            lstScenes.appendChild(li);
        }
    });
}
