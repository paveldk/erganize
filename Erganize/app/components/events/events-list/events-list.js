var eventService = require("../../../services/events-service"),
    eventListViewModel = require('./events-list-view-model');

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = eventListViewModel;

    eventService.getAllEventsForUser()
    	.then(function(result) {
        	eventListViewModel.set("eventsList", result);
    	});
}

exports.pageLoaded = pageLoaded;