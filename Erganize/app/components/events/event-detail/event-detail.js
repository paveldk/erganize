var topmost = require("ui/frame").topmost,
    page,
    PushNotificationsService = require("../../../services/push-notifications-service"),
    Observable = require("data/observable").Observable,
	authenticationService = require("../../../services/authentication-service"),
    everlive = require("../../../providers/everlive"),
    Status = require("../../../models/status");

function navigatedTo(args) {
    page = args.object;
  
    page.bindingContext = page.navigationContext;
      console.dir(page.bindingContext);
    page.bindingContext.newStatus = new Observable({
        text: ""
    });
}

function onSettings(args) {
    page = args.object;

    topmost().navigate({
        moduleName: "components/events/event-settings/event-settings",
        context: page.bindingContext
    });
}

function onPostNewStatus(args) {
    page = args.object;
    var newStatusText = page.bindingContext.newStatus;
    var currentUser = authenticationService.getCurrentUser();
    var statusDb = everlive.data("Status");
    
    var status = { "Text": newStatusText };
    
    statusDb.create(status)
    	.then(function (movieResult) {
        	console.dir(movieResult);
        })
    	.catch(function(err) {
        	console.log("Unable to add status to db" + err);
    	});;
    
    PushNotificationsService.sendNotification(newStatusText)
    	.then(function(d) {
        	console.log("Successfully sent push notification.");
        	page.bindingContext.newStatus = "";
    	})
    	.catch(function(err) {
        	console.log("Unable to send push notification.");
        	page.bindingContext.newStatus = "";
    	});
}

exports.navigatedTo = navigatedTo;
exports.onSettings = onSettings;
exports.onPostNewStatus = onPostNewStatus;