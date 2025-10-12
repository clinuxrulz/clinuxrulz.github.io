function cadAppMainUI(app) {
    // debug leak
    (function() {
        var lblSodiumObjectCount = $(".lblSodiumObjectCount", app.appDiv)[0];
        var lastCount = 0;
        window.setInterval(function() {
            var count = app.numSodiumObjects;
            if (count != lastCount) {
                lblSodiumObjectCount.innerText = "sodium object count: " + count;
                lastCount = count;
            }
        }, 500);
    }());
    //
    var btnNew = $(".btnNew", app.appDiv)[0];
    var btnSave = $(".btnSave", app.appDiv)[0];
    var btnSaveAs = $(".btnSaveAs", app.appDiv)[0];
    var btnUndo = $(".btnUndo", app.appDiv)[0];
    var btnRedo = $(".btnRedo", app.appDiv)[0];
    var btnDrawCurve = $(".btnDrawCurve", app.appDiv)[0];
    var btnDrawLine = app.findElementWithClassName(app.appDiv, "btnDrawLine");
    var btnDrawCircle = app.findElementWithClassName(app.appDiv, "btnDrawCircle");
    var btnFillet = app.findElementWithClassName(app.appDiv, "btnFillet");
    var btnExtend = $(".btnExtend", app.appDiv)[0];
    var btnTrim = $(".btnTrim", app.appDiv)[0];
    var btnOffset = $(".btnOffset", app.appDiv)[0];
    var btnMove = $(".btnMove", app.appDiv)[0];
    var btnScale = $(".btnScale", app.appDiv)[0];
    var btnRotate = $(".btnRotate", app.appDiv)[0];
    var btnExtrude = $(".btnExtrude", app.appDiv)[0];
    var btnAddViewport = $(".btnAddViewport", app.appDiv)[0];
    var btnCrossSection = app.findElementWithClassName(app.appDiv, "btnCrossSection");
    var btnAddDetail = $(".btnAddDetail", app.appDiv)[0];
    var btnAddDimension = $(".btnAddDimension", app.appDiv)[0];
    var btnAddText = $(".btnAddText", app.appDiv)[0];
    var btnCropImages = $(".btnCropImages", app.appDiv)[0];
    var btnCalcScale = $(".btnCalcScale", app.appDiv)[0];
    var btnPrintPage = $(".btnPrintPage", app.appDiv)[0];
    var btnRepairGeometry = $(".btnRepairGeometry", app.appDiv)[0];
    var btnInsertWall = $(".btnInsertWall", app.appDiv)[0];
    app.appModel.cHasUndo.listen(function(hasUndo) {
        btnUndo.disabled = !hasUndo;
    });
    app.appModel.cHasRedo.listen(function(hasRedo) {
        btnRedo.disabled = !hasRedo;
    });
    app.appModel.cCurrentSceneOp.listen(function(currentSceneOp) {
        btnExtrude.disabled = currentSceneOp.isNone;
    });
    btnNew.addEventListener("click", function() {
        app.new_();
    });
    btnSave.addEventListener("click", function() {
        let resultOp = app.save();
        if (resultOp.isSome) {
            let result = resultOp.fromSome();
            result
                .then(function(pass) {
                    if (!pass) {
                        window.alert("Failed to save.");
                    }
                })
                .catch(function(e) {
                    window.alert("Failed to save.");
                    console.log(e);
                });
        }
    });
    btnSaveAs.addEventListener("click", function() {
        let resultOp = app.saveAs();
        if (resultOp.isSome) {
            let result = resultOp.fromSome();
            result
                .then(function(pass) {
                    if (!pass) {
                        window.alert("Failed to save.");
                    }
                })
                .catch(function(e) {
                    window.alert("Failed to save.");
                    console.log(e);
                });
        }
    });
    btnUndo.addEventListener("click", function() {
        app.doOperation(app.Operation.undo());
    });
    btnRedo.addEventListener("click", function() {
        app.doOperation(app.Operation.redo());
    });
    btnDrawCurve.addEventListener("click", function() {
        app.doOperation(app.Operation.drawCurve());
    });
    btnDrawLine.addEventListener("click", function() {
        app.doOperation(app.Operation.drawLine());
    });
    btnDrawCircle.addEventListener("click", function() {
        app.doOperation(app.Operation.drawCircle());
    });
    btnFillet.addEventListener("click", function() {
        app.doOperation(app.Operation.fillet());
    });
    btnExtend.addEventListener("click", function() {
        app.doOperation(app.Operation.extend());
    });
    btnTrim.addEventListener("click", function() {
        app.doOperation(app.Operation.trim());
    });
    btnOffset.addEventListener("click", function() {
        app.doOperation(app.Operation.offset());
    });
    btnMove.addEventListener("click", function() {
        app.doOperation(app.Operation.move());
    });
    btnScale.addEventListener("click", function() {
        app.doOperation(app.Operation.scale());
    });
    btnRotate.addEventListener("click", function() {
        app.doOperation(app.Operation.rotate());
    });
    btnExtrude.addEventListener("click", function() {
        app.doOperation(app.Operation.extrude());
    });
    btnAddViewport.addEventListener("click", function() {
        app.doOperation(app.Operation.addViewport());
    });
    btnCrossSection.addEventListener("click", function() {
        app.doOperation(app.Operation.crossSection());
    });
    btnAddDetail.addEventListener("click", function() {
        app.doOperation(app.Operation.addDetail());
    });
    btnAddDimension.addEventListener("click", function() {
        app.doOperation(app.Operation.addDimension());
    });
    btnCropImages.addEventListener("click", function() {
        app.doOperation(app.Operation.cropImages());
    });
    btnCalcScale.addEventListener("click", function() {
        app.doOperation(app.Operation.calcScale());
    });
    btnAddText.addEventListener("click", function() {
        app.doOperation(app.Operation.addText());
    });
    btnPrintPage.addEventListener("click", function() {
        app.printPage();
    });
    btnRepairGeometry.addEventListener("click", function() {
        app.repairGeometry();
    });
    btnInsertWall.addEventListener("click", function() {
        app.doOperation(app.Operation.insertWall());
    });
    // documents
    (function() {
        var lstDocuments = app.findElementWithClassName(app.appDiv, "lstDocuments");
        var btnAddDocument = app.findElementWithClassName(app.appDiv, "btnAddDocument");
        var btnDeleteDocument = $(".btnDeleteDocument", app.appDiv)[0];
        var btnRenameDocument = $(".btnRenameDocument", app.appDiv)[0];
        $(lstDocuments).selectable({
            stop: function() {
                var documentId = $(".ui-selected", this).attr("data-documentId");
                if (documentId != undefined) {
                    documentId = parseInt(documentId);
                }
                if (!isNaN(documentId)) {
                    app.selectDocumentId(documentId);
                } else {
                    app.deselectDocument();
                }
            }
        });
        app.appModel.cCurrentSceneOp.listen(function(currentSceneOp) {
            if (currentSceneOp.isSome) {
                $("li", lstDocuments).removeClass("ui-selected");
            }
        });
        btnAddDocument.addEventListener("click", (function() {
            var counter = 0;
            return function() {
                app.appModel.testAddDocument("Document " + (++counter));
            };
        })());
        btnDeleteDocument.addEventListener("click", function() {
            var docOp = app.appModel.cCurrentDocumentOp.sample();
            if (docOp.isNone) {
                return;
            }
            var doc = docOp.fromSome();
            app.appModel.deleteDocument(doc.documentId);
        });
        var doRenameDocument =
            function() {
                var targetLis = $("li.ui-selected", lstDocuments);
                if (targetLis.length == 0) {
                    return;
                }
                var targetLi = targetLis[0];
                var documentId = Number.parseInt(targetLi.getAttribute("data-documentId"));
                if (Number.isNaN(documentId)) {
                    return;
                }
                var documentName = targetLi.getAttribute("data-documentName");
                while (targetLi.lastChild) {
                    targetLi.removeChild(targetLi.lastChild);
                }
                var txtNewName = document.createElement("input");
                txtNewName.type = "text";
                txtNewName.value = documentName;
                txtNewName.style.color = "black";
                targetLi.appendChild(txtNewName);
                txtNewName.focus();
                txtNewName.select();
                var canceled = false;
                var finishEdit = function() {
                    if (canceled) {
                        return;
                    }
                    targetLi.setAttribute("data-documentName", txtNewName.value);
                    window.setTimeout(function() {
                        app.appModel.renameDocument(documentId, txtNewName.value);
                    });
                };
                var cancelEdit = function() {
                    canceled = true;
                    targetLi.innerText = documentName;
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
        btnRenameDocument.addEventListener("click", doRenameDocument);
        app.appModel.cCurrentDocumentOp.listen(function(currentDocumentOp) {
            btnDeleteDocument.disabled = currentDocumentOp.isNone;
            btnRenameDocument.disabled = currentDocumentOp.isNone;
        });
        app.sShowOpenQuote.listen(function() {
            var documents = app.appModel.documentsModel.cDocuments.sample();
            if (documents.length == 0) {
                return;
            }
            var document = documents[0];
            for (let i = 0; i < lstDocuments.childNodes.length; ++i) {
                let childNode = lstDocuments.childNodes[i];
                if (childNode.classList.contains("ui-widget-content")) {
                    var documentId = childNode.getAttribute("data-documentId");
                    if (documentId == document.documentId) {
                        childNode.classList.add("ui-selected");
                    } else {
                        childNode.classList.remove("ui-selected");
                    }
                }
            }
            app.selectDocumentId(document.documentId);
        });
        app.appModel.documentsModel.cDocuments.listen(
            (function() {
                var innerCleanups = [];
                return function(documents) {
                    var lastLis = $("li.ui-selected", lstDocuments);
                    var documentIdSelected = lastLis.length != 0 ? lastLis[0].getAttribute("data-documentId") : undefined;
                    while (lstDocuments.lastChild) {
                        lstDocuments.removeChild(lstDocuments.lastChild);
                    }
                    innerCleanups.forEach(function(cleanup) { cleanup(); });
                    innerCleanups.splice(0, innerCleanups.length);
                    for (let i = 0; i < documents.length; ++i) {
                        let document2 = documents[i];
                        let li = document.createElement("li");
                        li.addEventListener("mousedown", (function() {
                            var lastTime = undefined;
                            return function() {
                                var time = new Date();
                                if (lastTime != undefined) {
                                    var diff = time - lastTime;
                                    if (diff < 500.0) {
                                        doRenameDocument();
                                    }
                                }
                                lastTime = time;
                            };
                        })());
                        li.setAttribute("data-documentId", "" + document2.documentId);
                        li.setAttribute("data-documentName", document2.cDocumentOp.sample().map(function(doc) { return doc.documentName; }).orSome(""));
                        li.classList.add("ui-widget-content");
                        if (documentIdSelected != undefined && documentIdSelected == document2.documentId) {
                            li.classList.add("ui-selected");
                        }
                        innerCleanups.push(
                            document2
                                .cDocumentOp
                                .map(
                                    function(documentOp) {
                                        return documentOp.map(document => document.documentName).orSome("");
                                    }
                                )
                                .listen(
                                    function(documentName) {
                                        li.innerText = documentName;
                                    }
                                )
                        );
                        lstDocuments.appendChild(li);
                    }
                };
            })()
        );
    })();
    // load main tabs
    (function() {
        /** @type {HTMLDivElement} */
        var mainTabs = app.findElementWithClassName(app.appDiv, "mainTabs");
        /** @type {HTMLDivElement} */
        var mainTabsView = app.findElementWithClassName(app.appDiv, "mainTabsView");
        var showMainTab = function(mainTabName) {
            var i;
            /** @type {ChildNode} */
            var child;
            for (i = 0; i < mainTabsView.childNodes.length; ++i) {
                child = mainTabsView.childNodes[i];
                if (child instanceof HTMLElement) {
                    if (child.classList.contains("mainTab")) {
                        if (child.classList.contains(mainTabName)) {
                            child.style.display = "inline-flex";
                        } else {
                            child.style.display = "none";
                        }
                    }
                }
            }
        };
        var initTabButton = function(button, mainTabName) {
            var clickCallback = function() {
                showMainTab(mainTabName);
            };
            button.addEventListener("click", clickCallback);
            return function() {
                button.removeEventListener("click", clickCallback);
            };
        };
        initTabButton(app.findElementWithClassName(mainTabs, "cadQuotesTab"), "cadQuotesTabView");
        initTabButton(app.findElementWithClassName(mainTabs, "cadMainTab"), "cadMainTabView");
        initTabButton(app.findElementWithClassName(mainTabs, "cadPluginsTab"), "cadPluginsTabView");
        app.sShowOpenQuote.listen(function() {
            showMainTab("cadMainTabView");
        });
        var genTabName = (function() {
            var nextTabId = 1;
            return function() {
                return "mainTab" + (nextTabId++);
            };
        })();
        var genTabViewName = (function() {
            var nextTabViewId = 1;
            return function() {
                return "mainTabView" + (nextTabViewId++);
            };
        })();
        var addTab = function(button, view) {
            let cleanups = [];
            var tabName = genTabName();
            var tabViewName = genTabViewName();
            button.classList.add(tabName);
            view.classList.add(tabViewName);
            view.classList.add("mainTab");
            view.style.display = "none";
            mainTabs.prepend(button);
            mainTabsView.appendChild(view);
            cleanups.push(function() {
                mainTabs.removeChild(button);
                mainTabsView.removeChild(view);
            });
            cleanups.push(initTabButton(button, tabViewName));
            return function() {
                cleanups.forEach(function(cleanup) { cleanup() });
            };
        };
        app._addTab = addTab;
    })();
    // message above canvas
    (function() {
        var divMessage = $(".divMessage", app.appDiv)[0];
        app.appModel.cMessageOp.listen(function(messageOp) {
            if (messageOp.isSome) {
                var message = messageOp.fromSome();
                divMessage.innerText = message;
            } else {
                divMessage.innerText = "";
            }
        });
        var divCameraMessage = $(".divCameraMessage", app.appDiv)[0];
        app.appModel.cCameraMessageOp.listen(function(messageOp) {
            if (messageOp.isSome) {
                var message = messageOp.fromSome();
                divCameraMessage.innerHTML = message;
            } else {
                while (divCameraMessage.lastChild) {
                    divCameraMessage.removeChild(divCameraMessage.lastChild);
                }
            }
        });
    })();
    // plugins
    (function() {
        var divPlugins = $(".divPlugins", app.appDiv)[0];
        fetch(app.appPath + "/config.json")
            .then(responce => responce.json())
            .then(config => {
                if (config.serverApiUrl) {
                    app.serverApiUrl = config.serverApiUrl;
                }
                var plugins = config.plugins;
                for (var i = 0; i < plugins.length; ++i) {
                    (function() {
                        var idx = i;
                        var loaded = false;
                        var plugin = plugins[i];
                        var chkLoadPlugin = document.createElement("input");
                        chkLoadPlugin.id = "chkLoadPlugin" + idx;
                        chkLoadPlugin.type = "checkbox";
                        var label = document.createElement("label");
                        label.htmlFor = chkLoadPlugin.id;
                        label.innerText = plugin.displayName;
                        chkLoadPlugin.addEventListener("change", function() {
                            if (chkLoadPlugin.checked && !loaded) {
                                app.loadPlugin(plugin.path, plugin.moduleName);
                                loaded = true;
                            }
                        });
                        divPlugins.appendChild(chkLoadPlugin);
                        divPlugins.appendChild(label);
                        divPlugins.appendChild(document.createElement("br"));
                    })();
                }
            });
    })();
    //
}
