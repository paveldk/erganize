var frameModule = require("ui/frame"),
    authenticationService = require("../../services/authentication-service"),
    authenticationViewModel = require("./authentication-view-model");

function onSignInTapped() {
    authenticationService.signin({
        email: authenticationViewModel.get('email'),
        password: authenticationViewModel.get('password')
    }, function() {
		frameModule.topmost().navigate({
            moduleName: "components/events/events-list/events-list"
        });
    }, function(e) {
        console.log("error");
    });
}

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = authenticationViewModel;
    
    authenticationViewModel.on(authenticationViewModel.events.signinTapped, onSignInTapped);
}

exports.pageLoaded = pageLoaded;