var createEventViewModel = require("./events-create-view-model").createEventViewModel;

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createEventViewModel();
}
exports.onNavigatingTo = onNavigatingTo;