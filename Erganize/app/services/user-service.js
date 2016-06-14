var User = require("../models/user");

function UserService() { }

UserService.prototype.getAllUsers = function(userInfo) {
       return Promise.resolve([new User(1, "joe@abv.bg", "qwerty"), new User(2, "jim@abv.bg", "qwerty")]);
};

module.exports = new UserService();