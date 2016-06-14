var navigationViewModel = require('./navigation-view-model'),
    topmost = require("ui/frame").topmost;
    
function pageLoaded(args) {
    var page = args.object;
    topmost().navigate("components/events/event-settings/event-settings");
}

exports.pageLoaded = pageLoaded;