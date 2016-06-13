var el = require("../providers/everlive");
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
    }
};

el.push.register(
    pushSettings, 
    function successCallback(data) {
        // This function will be called once the device is successfully registered
        console.log("SUCCESS!!!");
    },
    function errorCallback(error) {
        // This callback will be called any errors occurred during the device
        // registration process
        console.log("Error, " + error.message);
    }
);