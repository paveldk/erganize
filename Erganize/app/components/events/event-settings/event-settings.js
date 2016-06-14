var pageData = require('./event-settings-view-model'),
    userService = require("../../../services/user-service"),
    ObservableArray = require("data/observable-array").ObservableArray,
    view = require("ui/core/view"),
    filteredUsers = new ObservableArray([]),
    attendingUsers = new ObservableArray([]),
    page;

function pageLoaded(args) {
    page = args.object;

    pageData.set("event", page.navigationContext);
    page.bindingContext = pageData;

    var participants = page.bindingContext.event.participants;
    
    for (var i = 0; i < participants.length; i++) {
        userService.getUserById(participants[i])
            .then(function (data) {
				attendingUsers.push({Email: data.result.Email});
            })
    }
}

function pullToRefreshInitiated() {
    // Simulate a call to a backend that comes back two seconds later
    setTimeout(function () {
        // global.invitedUsers.push({
        //     email: "george@telerik.com"
        // });
        // page.getViewById("list-view").notifyPullToRefreshFinished();
    }, 500);
};

// function onItemLoading(args) {
//     if (args.itemIndex % 2 == 0){
//         args.view.backgroundColor="#b3ecff";
//     }
//     else {
//         args.view.backgroundColor="#ccf2ff";
//     }
// }

function onSearch() {
    while (filteredUsers.length > 0) {
        filteredUsers.pop();
    }

    var searchBox = view.getViewById(page, "search-box");
    var searchText = searchBox.text.toLowerCase();

    userService.getAllUsers()
        .then(function (data) {
                var users = data.result;
                for (var i = 0; i < users.length; i++) {
                    if (users[i].Email.toLowerCase().indexOf(searchText) >= 0) {
                        filteredUsers.push(users[i]);
                    }
                }
            },
            function (error) {
                alert(JSON.stringify(error));
            });

    pageData.set("filteredUsers", filteredUsers);
}

function onInvite() {
    // global.invitedUsers.push();
}

exports.pageLoaded = pageLoaded;
exports.pullToRefreshInitiated = pullToRefreshInitiated;
exports.onSearch = onSearch;
exports.onInvite = onInvite;