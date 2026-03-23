function cadAppInitLogIn(app) {
    var mkId = (function() {
        var counter = 0;
        return function() {
            return "cadAppLogInID" + (counter++);
        };
    })();
    var divLogIn = $(".divLogIn", app.appDiv)[0];
    var lblUsername = $(".lblUsername", divLogIn)[0];
    var txtUsername = $(".txtUsername", divLogIn)[0];
    var lblPassword = $(".lblPassword", divLogIn)[0];
    var txtPassword = $(".txtPassword", divLogIn)[0];
    var btnLogIn = $(".btnLogIn", divLogIn)[0];
    var usernameId = mkId();
    txtUsername.id = usernameId;
    lblUsername.htmlFor = usernameId;
    var passwordId = mkId();
    txtPassword.id = passwordId;
    lblPassword.htmlFor = passwordId;
    btnLogIn.addEventListener("click", function() {
        var username = txtUsername.value;
        var password = MD5(txtPassword.value);
        fetch(
            app.serverApiUrl +
            "?action=login" +
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
                    divLogIn.style.display = "none";
                    app.setSignedIn(username, password);
                } else if (responseType == "error") {
                    window.alert("Failed to log: " + response["message"]);
                }
            }
        );
    });
}
