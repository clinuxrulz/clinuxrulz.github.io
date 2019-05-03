function cadAppMainUI(app) {
    var btnDrawLine = app.findElementWithClassName(app.appDiv, "btnDrawLine");
    var btnDrawCircle = app.findElementWithClassName(app.appDiv, "btnDrawCircle");
    var btnFillet = app.findElementWithClassName(app.appDiv, "btnFillet");
    var btnTrim = $(".btnTrim", app.appDiv)[0];
    var btnCrossSection = app.findElementWithClassName(app.appDiv, "btnCrossSection");
    var btnAddDimension = $(".btnAddDimension", app.appDiv)[0];
    var btnPrintPage = $(".btnPrintPage", app.appDiv)[0];
    btnDrawLine.addEventListener("click", function() {
        app.doOperation(app.Operation.drawLine());
    });
    btnDrawCircle.addEventListener("click", function() {
        app.doOperation(app.Operation.drawCircle());
    });
    btnFillet.addEventListener("click", function() {
        app.doOperation(app.Operation.fillet());
    });
    btnTrim.addEventListener("click", function() {
        app.doOperation(app.Operation.trim());
    });
    btnCrossSection.addEventListener("click", function() {
        app.doOperation(app.Operation.crossSection());
    });
    btnAddDimension.addEventListener("click", function() {
        app.doOperation(app.Operation.addDimension());
    });
    btnPrintPage.addEventListener("click", function() {
        app.printPage();
    });
    // documents
    (function() {
        var lstDocuments = app.findElementWithClassName(app.appDiv, "lstDocuments");
        var btnAddDocument = app.findElementWithClassName(app.appDiv, "btnAddDocument");
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
        btnAddDocument.addEventListener("click", (function() {
            var counter = 0;
            return function() {
                app.appModel.testAddDocument("Document " + (++counter));
            };
        })());
        app.appModel.documentsModel.cDocuments.listen(
            (function() {
                var innerCleanups = [];
                return function(documents) {
                    while (lstDocuments.lastChild) {
                        lstDocuments.removeChild(lstDocuments.lastChild);
                    }
                    innerCleanups.forEach(function(cleanup) { cleanup(); });
                    innerCleanups.splice(0, innerCleanups.length);
                    for (let i = 0; i < documents.length; ++i) {
                        let document2 = documents[i];
                        let li = document.createElement("li");
                        li.setAttribute("data-documentId", "" + document2.documentId);
                        li.classList.add("ui-widget-content");
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
        initTabButton(app.findElementWithClassName(mainTabs, "cadMainTab"), "cadMainTabView");
        initTabButton(app.findElementWithClassName(mainTabs, "cadPluginsTab"), "cadPluginsTabView");
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
    })();
    // plugins
    (function() {
        var divPlugins = $(".divPlugins", app.appDiv)[0];
        fetch(app.appPath + "/config.json")
            .then(responce => responce.json())
            .then(config => {
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
