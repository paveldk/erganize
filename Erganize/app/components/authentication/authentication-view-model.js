var EventsListViewModel,
    Observable = require('data/observable').Observable;

EventsListViewModel = new Observable({
    events: {
    	signinTapped: "signinTapped"   
    },
    
    password: "",
    email: "",

    onSignin: function (args) {
        
    }
});

module.exports = EventsListViewModel;