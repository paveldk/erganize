var frameModule = require("ui/frame"),
    dialogs = require("ui/dialogs"),
    eventService = require("../../../services/events-service"),
    eventListViewModel = require("./events-list-view-model"),
    pushNotificationsService = require("../../../services/push-notifications-service");

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
    var notificationCallback = function(data) {
        dialogs.alert({
          title: "Notification",
          message: data,
          okButtonText: "Ok"
        });
    };
    pushNotificationsService.setNotificationCallback(notificationCallback);
    pushNotificationsService.register()
        .then(function(d) {
            console.log("Successfully initialized");
        })
        .catch(function(err) {
            console.log(err.message);
        });
}

exports.pageLoaded = pageLoaded;