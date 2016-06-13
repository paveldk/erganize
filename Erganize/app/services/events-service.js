var Event = require("../models/event");

function EventService() { }

EventService.prototype.getAllEventsForUser = function(userInfo) {
       return Promise.resolve([new Event(1, "My First Event", "13.06.2016", true, [], [], [], "", [])]);
};

EventService.prototype.getEventDetails = function(eventId) {
    return Promise.resolve(new Event(1, "My First Event", "13.06.2016", true, [], [], [], "", []));
};

module.exports = new EventService();
 