var frameModule = require("ui/frame"),
    authenticationViewModel = require("./authentication-view-model");

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = authenticationViewModel;
}

exports.pageLoaded = pageLoaded;