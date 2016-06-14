var navigationViewModel = require('./navigation-view-model'),
    topmost = require("ui/frame").topmost;
    
function pageLoaded(args) {
    var page = args.object;
    topmost().navigate("components/events/events-list/events-list");
}

exports.pageLoaded = pageLoaded;