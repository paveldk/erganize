var topmost = require("ui/frame").topmost,
    page,
    PushNotificationsService = require("../../../services/push-notifications-service"),
    Observable = require("data/observable").Observable;

function navigatedTo(args) {
    page = args.object;
    
    console.log("Images");
    console.log(page.navigationContext.photos[0].image);
  
    page.bindingContext = page.navigationContext;
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