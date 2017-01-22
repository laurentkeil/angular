/**
 * Created by timmy_machine on 15/01/17.
 */

"use strict";

angular.
module('core.phone').
factory('Phone', ['$resource',
    function($resource) {
        return $resource('phones/phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {phoneId: 'phones'},
                isArray: true
            }
        });
    }
]);