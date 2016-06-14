var User = require("../models/user"),
    el = require("../providers/everlive");

function UserService() { }

UserService.prototype.getAllUsers = function() {
    return el.Users.get();
};

UserService.prototype.getUserById = function(id) {
    return el.Users.getById(id);
}

module.exports = new UserService();