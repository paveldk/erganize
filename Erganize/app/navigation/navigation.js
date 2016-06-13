var navigationViewModel = require('./navigation-view-model'),
    topmost = require("ui/frame").topmost;

var drawer;

function pageLoaded(args) {
    var page = args.object;
    drawer = page.getViewById("drawer");
}

function openDrawer() {
    drawer.toggleDrawerState();
}

function navigate(args) {
    var pageName = args.view.text;

    switch (pageName) {
        case "Events List":
            topmost().navigate("components/events/events-list/events-list");
            break;
        case "Event Settings":
            topmost().navigate("components/events/events-settings/events-settings");
            break;
    }
}

exports.pageLoaded = pageLoaded;
exports.openDrawer = openDrawer;
exports.navigate = navigate;