var pageData = require('./event-settings-view-model'),
    userService = require("../../../services/user-service"),
    ObservableArray = require("data/observable-array").ObservableArray,
    view = require("ui/core/view"),
    filteredUsers = new ObservableArray([]),
    page;

function pageLoaded(args) {
    page = args.object;
    
    pageData.set("event", page.navigationContext);
    
    page.bindingContext = pageData;   
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

function onItemLoading(args) {
    if (args.itemIndex % 2 == 0){
        args.view.backgroundColor="#b3ecff";
    }
    else {
        args.view.backgroundColor="#ccf2ff";
    }
}

function onSearch() {
    while (filteredUsers.length > 0) {
        filteredUsers.pop();
    }

    var searchBox = view.getViewById(page, "search-box");
	var searchText = searchBox.text.toLowerCase();
    
    userService.getAllUsers()
        .then(function (result) {             	
            for (var i = 0; i < result.length; i++) { 
                if (result[i].email.toLowerCase().indexOf(searchText) >= 0) {
                    filteredUsers.push(result[i]);
                }
            }
    });

    pageData.set("filteredUsers", filteredUsers);
}

function onInvite () {
    // global.invitedUsers.push();
}

exports.pageLoaded = pageLoaded;
exports.pullToRefreshInitiated = pullToRefreshInitiated;
exports.onItemLoading = onItemLoading;
exports.onSearch = onSearch;
exports.onInvite = onInvite;