var topmost = require("ui/frame").topmost;

function navigate(args) {
    var pageName = args.view.text;

    switch (pageName) {
        case "Profile":
            // topmost().navigate("components/events/events-list/events-list");
            break;
        case "My Events":
            topmost().navigate("components/events/events-list/events-list");
            break;
        case "Create Event":
            // topmost().navigate("components/events/events-list/events-list");
            break;
        case "Logout":
            // topmost().navigate("components/events/event-settings/event-settings");
            break;
    }
}

exports.navigate = navigate;