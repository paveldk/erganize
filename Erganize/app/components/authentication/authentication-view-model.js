var EventsListViewModel,
    Observable = require('data/observable').Observable;

EventsListViewModel = new Observable({
    events: {
    	signinTapped: "signinTapped"   
    },
    
    password: "",
    email: "",

    onSignIn: function () {
        this.notify({
            eventName: this.events.signinTapped
        });
    }
});

module.exports = EventsListViewModel;