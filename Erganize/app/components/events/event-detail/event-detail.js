var topmost = require("ui/frame").topmost,
    page;

function navigatedTo(args) {
    page = args.object;
    
    page.bindingContext = page.navigationContext;
}

function onSettings(args) {
    page = args.object;
    
    topmost().navigate({
        moduleName: "components/events/event-settings/event-settings",
        context: page.bindingContext
    });
}

exports.navigatedTo = navigatedTo;
exports.onSettings = onSettings;