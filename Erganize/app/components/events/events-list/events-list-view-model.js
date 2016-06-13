var EventsListViewModel,
    Observable = require('data/observable').Observable;

EventsListViewModel = new Observable({
    events: {
    	eventTaped: "eventTaped"   
    },
    
    eventsList: [],

    onEventTap: function (args) {
        var tappedEvent = this.get("eventsList")[args.itemIndex];

        this.notify({
            eventName: this.events.eventTaped,
            eventInfo: tappedEvent
        });
    }
});

module.exports = EventsListViewModel;