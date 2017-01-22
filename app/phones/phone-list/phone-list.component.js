/**
 * Created by timmy_machine on 14/01/17.
 */
"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneList').
    component('phoneList', {
        // Note: The URL is relative to our `index.html` file
        templateUrl: 'phones/phone-list/phone-list.template.html',
        controller: ['Phone',
            function PhoneListController(Phone) {
                this.phones = Phone.query();
                this.orderProp = 'age';
            }
        ]
    });