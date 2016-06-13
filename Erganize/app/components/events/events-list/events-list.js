var eventService = require("../../../services/events-service"),
    eventListViewModel = require('./events-list-view-model');

function pageLoaded(args) {
    var page = args.object;

    console.log("in init");
    page.bindingContext = eventListViewModel;

    eventService.getAllEventsForUser()
    	.then(function(result) {
        	console.log("in here");
        	eventListViewModel.set("eventsList", result);
    	});
}

exports.pageLoaded = pageLoaded;