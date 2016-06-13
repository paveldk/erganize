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
    wp8: {
        channelName: 'EverlivePushChannel'
    },
    notificationCallbackIOS: function(e) {
        // logic for handling push in iOS
    },
    notificationCallbackAndroid: function(e) {
        console.log('notification call back android called');
    },
    notificationCallbackWP8: function(e) {
        // logic for handling push in Windows Phone. Not available in NativeScript.
    },
    customParameters: {
        myParameter1: "MyValue1",
        myParameter2: "MyValue2"
    }
};

el.push.register(
    pushSettings, 
    function successCallback(data) {
        console.log("SUCCESS!!!");
        // This function will be called once the device is successfully registered
    },
    function errorCallback(error) {
        console.log("Error, " + error.message);
        // This callback will be called any errors occurred during the device
        // registration process
    }
);