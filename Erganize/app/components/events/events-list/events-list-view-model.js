var EventsListViewModel,
    Observable = require('data/observable').Observable;

EventsListViewModel = new Observable({
    events: {
    	eventTaped: "eventTaped"   
    },
    
    eventsList: [],

    onEventTap: function (args) {
        console.log("tapped");
        console.log(JSON.parse(args));
        
        this.notify({
            eventName: this.events.eventTaped,
            searchTerm: this.get("searchTerm")
        });
    }
});

module.exports = EventsListViewModel;