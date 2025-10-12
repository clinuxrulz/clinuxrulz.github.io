function cadAppInitQuotes(app) {
    var divQuotes = $(".divQuotes", app.appDiv)[0];
    var divMustLogIn = $(".divMustLogIn", divQuotes)[0];
    var lblCurrentPage = $(".lblCurrentPage", divQuotes)[0];
    var btnPrevPage = $(".btnPrevPage", divQuotes)[0];
    var txtCurrentPage = $(".txtCurrentPage", divQuotes)[0];
    var btnNextPage = $(".btnNextPage", divQuotes)[0];
    var lblNumPages = $(".lblNumPages", divQuotes)[0];
    var tblQuotesTBody = $(".tblQuotesTBody")[0];
    var maxQuotesPerPage = 100;
    var numQuotes = 0;
    var numPages = 0;
    var currentPageIdx = 0;
    app.cSignedIn.listen(function(signedIn) {
        divMustLogIn.style.display = signedIn ? "none" : "block";
    });
    var refillQuotesTable = function(username, password) {
        while (tblQuotesTBody.lastChild) {
            tblQuotesTBody.removeChild(tblQuotesTBody.lastChild);
        }
        fetch(
            app.serverApiUrl +
            "?action=fetchQuotes" +
            "&username=" + encodeURIComponent(username) +
            "&password=" + password +
            "&offset=" + (currentPageIdx * maxQuotesPerPage) +
            "&limit=" + maxQuotesPerPage
        ).then(
            function(response) {
                return response.json();
            }
        ).then(
            function(response) {
                // repeated incase of double fetch
                while (tblQuotesTBody.lastChild) {
                    tblQuotesTBody.removeChild(tblQuotesTBody.lastChild);
                }
                //
                var responseType = response["responseType"];
                if (responseType == "success") {
                    var quotes = response["quotes"];
                    for (var i = 0; i < quotes.length; ++i) {
                        (function() {
                            var quote = quotes[i];
                            var quoteServerId = quote["id"];
                            var name = quote["name"];
                            var date = quote["date"];
                            var tr = document.createElement("tr");
                            var td = document.createElement("td");
                            var btnOpen = document.createElement("input");
                            btnOpen.type = "button";
                            btnOpen.value = "Open";
                            btnOpen.addEventListener("click", function() {
                                app.load(quoteServerId)
                                    .then(function(success) {
                                        if (!success) {
                                            window.alert("Failed to open quote.");
                                        }
                                    });
                            });
                            var btnDelete = document.createElement("input");
                            btnDelete.type = "button";
                            btnDelete.value = "Delete";
                            btnDelete.addEventListener("click", function() {
                                if (window.confirm("Are you sure you want to delete \"" + name + "\"?")) {
                                    app.deleteQuote(quoteServerId)
                                        .then(function(success) {
                                            if (success) {
                                                refillQuotesTable(username, password);
                                            } else {
                                                window.alert("Failed to delete quote.");
                                            }
                                        });
                                }
                            });
                            td.appendChild(btnOpen);
                            td.appendChild(btnDelete);
                            tr.appendChild(td);
                            td = document.createElement("td");
                            td.innerText = name;
                            tr.appendChild(td);
                            td = document.createElement("td");
                            td.innerText = date;
                            tr.appendChild(td);
                            tblQuotesTBody.appendChild(tr);
                        })();
                    }
                } else if (responseType == "error") {
                    window.alert(response["message"]);
                }
            }
        );
    };
    app.SodiumUtil
        .cellLift2(
            app.cUsernameOp,
            app.cPasswordOp,
            function(usernameOp, passwordOp) {
                return function() {
                    if (usernameOp.isNone || passwordOp.isNone) {
                        return;
                    }
                    var username = usernameOp.fromSome();
                    var password = passwordOp.fromSome();
                    fetch(
                        app.serverApiUrl +
                        "?action=fetchNumQuotes" +
                        "&username=" + encodeURIComponent(username) +
                        "&password=" + password
                    ).then(
                        function(response) {
                            return response.json();
                        }
                    ).then(
                        function(response) {
                            var responseType = response["responseType"];
                            if (responseType == "success") {
                                numQuotes = parseInt(response["numQuotes"]);
                                if (Number.isNaN(numQuotes)) {
                                    numQuotes = 0;
                                    lblNumPages.innerText = "of error";
                                    return;
                                }
                                currentPageIdx = 0;
                                numPages = Math.max(1, Math.ceil(numQuotes / maxQuotesPerPage));
                                txtCurrentPage.value = "" + (currentPageIdx + 1);
                                lblNumPages.innerText = "of " + numPages;
                                refillQuotesTable(username, password);
                            } else {
                                numQuotes = 0;
                                currentPageIdx = 0;
                                numPages = 0;
                                lblNumPages.innerText = "of error";
                            }
                        }
                    );
                };
            }
        )
        .listen(function(x) { x(); });
    //
    app.sRefreshQuotes.listen(function() {
        var usernameOp = app.cUsernameOp.sample();
        var passwordOp = app.cPasswordOp.sample();
        if (usernameOp.isNone || passwordOp.isNone) {
            return;
        }
        var username = usernameOp.fromSome();
        var password = passwordOp.fromSome();
        refillQuotesTable(username, password);
    });
}
