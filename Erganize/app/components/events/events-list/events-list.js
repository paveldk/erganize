var frameModule = require("ui/frame"),
    eventService = require("../../../services/events-service"),
    eventListViewModel = require("./events-list-view-model");

function onEventTapped(data) {
    var eventInfo = data.eventInfo;

    frameModule.topmost().navigate({
        moduleName: "components/events/event-detail/event-detail",
        context: eventInfo
    });
}

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = eventListViewModel;

    eventService.getAllEventsForUser()
        .then(function (result) {
            eventListViewModel.set("eventsList", result);
        });

    eventListViewModel.on(eventListViewModel.events.eventTaped, onEventTapped);
}

exports.pageLoaded = pageLoaded;