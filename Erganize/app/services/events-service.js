var Event = require("../models/event"),
    Status = require("../models/status"),
    Query = require("../everlive.all.min").Query,
    dataService = require('../providers/everlive'),
    eventData = dataService.data("Event"),
    authenticationService = require("./authentication-service");

function EventService() { }

EventService.prototype.getAllEventsForUser = function(userInfo) {
    return authenticationService.getCurrentUser()
        .then(function (user) {
            var events = [],
                eventIds = [];

            var query = new Query();

            query.where().eq("Creator", user.result.Id);

            return eventData.expand({
                    Picture: { 'SingleField': 'Uri' },
                    Photos: { 'SingleField': 'Uri' },
                	Statuses: true
                }).get(query)
                .then(function (result) {
                	if(result.result) {
                        result.result.forEach(function(item) {
                            eventIds.push(item.Id);
                            events.push(new Event(item.Id, item.Title, new Date(item.Date).toDateString(), item.IsPrivate, 
                                                 item.Organizers, item.Participants, item.Statuses, 
                                                 item.Picture, item.Photos, item.Description));
                        });
                    }

                        var query2 = new Query();

                        query2.where().eq("Participants", user.result.Id);

                        return eventData.expand({
                            Picture: { 'SingleField': 'Uri' },
                            Photos: { 'SingleField': 'Uri' },
                            Statuses: true
                        }).get(query2)
                            .then(function (result) {
                            	if(result.result) {
                                    result.result.forEach(function(item) {
                                        if(eventIds.indexOf(item.Id) === -1) {
                                            events.push(new Event(item.Id, item.Title, new Date(item.Date).toDateString(), item.IsPrivate, 
                                                             item.Organizers, item.Participants, item.Statuses, 
                                                             item.Picture, item.Photos, item.Description));
                                        }
                                    });
                                }

                                return events;
                            })
                            .then(null, function (err) {
                                console.log(JSON.stringify(err));
                            });
                })
                .then(null, function (err) {
                	console.log("event service error");
                    console.log(JSON.stringify(err));
                });
        });
};

EventService.prototype.getEventDetails = function(eventId) {
    return Promise.resolve(new Event(1, "My First Event", "13.06.2016", true, [], [], [], "", []));
};

module.exports = new EventService();
 