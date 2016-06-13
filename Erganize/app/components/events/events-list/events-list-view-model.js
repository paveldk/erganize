var EventsListViewModel,
    Observable = require('data/observable').Observable;

EventsListViewModel = new Observable({
    eventsList: []
});

module.exports = EventsListViewModel;