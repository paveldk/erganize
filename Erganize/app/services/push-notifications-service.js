var everlive = require("../providers/everlive");
var googleApiProjectNumber = '981974411720';

var pushSettings = {
    iOS: {
        badge: true,
        sound: true,
        alert: true,
        clearBadge: true
    },
    android: {
        projectNumber: googleApiProjectNumber
    },
    notificationCallbackIOS: function(e) {
        // logic for handling push in iOS
    },
    notificationCallbackAndroid: function(e) {
        console.log('notification call back android called');
        console.dir(e);
    }
};

function PushNotificationsService() { }

PushNotificationsService.prototype.register = function() {
	var pushNotificationsPromise = new Promise(function(resolve, reject) {
        everlive.push.register(
            pushSettings, 
            function successCallback(data) {
                // This function will be called once the device is successfully registered
                console.log("Successfully registered the device for push notifications!");
                resolve(data);
            },
            function errorCallback(error) {
                // This callback will be called any errors occurred during the device
                // registration process
                console.log("Error when registering device for push notifications " + error.message);
                reject(error);
            }
        );
    });

    return pushNotificationsPromise;
};

PushNotificationsService.prototype.sendNotification = function(message){
    var sendNotificationPromise = new Promise(function(resolve, reject) {
        everlive.push.notifications.create({ Message: message },
            function(data){
            	resolve(data);
            },
            function(error){
            	reject(error);
            });
        });
    
    return sendNotificationPromise;
}

PushNotificationsService.prototype.setNotificationCallback = function(notificationCallback) {
    if (notificationCallback && typeof notificationCallback === "function") {
    	pushSettings.notificationCallbackAndroid = pushSettings.notificationCallbackIOS = notificationCallback;
    }
}

module.exports = new PushNotificationsService();
