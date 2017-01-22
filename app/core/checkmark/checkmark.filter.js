/**
 * Created by timmy_machine on 15/01/17.
 */

"use strict";

angular.
module('core').
filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});