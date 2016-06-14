'use strict';
var _,
    dataService = require('../providers/everlive'),
    localSettings = require('application-settings'),
    consts;

consts = {
    accessTokenKey: 'accessToken',
    accessTokenTypeKey: 'accessTokenType',
    accessTokenPrincipalIdKey: 'accessTokenPrincipalId'
};

function AuthenticationService() {}

function validateArgs(args) {
    if (!args.email) {
        throw new Error('Service: login - missing email');
    }

    if (!args.password) {
        throw new Error('Service: login - missing password');
    }
}

AuthenticationService.prototype.signin = function(args, successCallback, errorCallback) {
    validateArgs(args);

    return dataService.Users.login(args.email, args.password)
        .then(function(e) {
            localSettings.setString(consts.accessTokenKey,
                e.result.access_token);
            localSettings.setString(consts.accessTokenTypeKey,
                e.result.token_type);
            localSettings.setString(consts.accessTokenPrincipalIdKey,
                e.result.principal_id);

            successCallback();
        }, errorCallback);
};

AuthenticationService.prototype.getCurrentUser = function() {
    return dataService.Users.currentUser();
};

AuthenticationService.prototype.isAuthenticated = function() {
    return localSettings.getString(consts.accessTokenKey) &&
        localSettings.getString(consts.accessTokenTypeKey) &&
        localSettings.getString(consts.accessTokenPrincipalIdKey);
};

AuthenticationService.prototype.setAuthorization = function() {
    dataService.Users.setAuthorization(
        localSettings.getString(consts.accessTokenKey),
        localSettings.getString(consts.accessTokenTypeKey),
        localSettings.getString(consts.accessTokenPrincipalIdKey));
};

module.exports = new AuthenticationService();