/**
 * Created by timmy_machine on 15/01/17.
 */

"use strict";

angular.
module('phoneDetail').
component('phoneDetail', {
    templateUrl: 'phones/phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
        function PhoneDetailController($routeParams, Phone) {
            var self = this;

            self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
                self.setImage(phone.images[0]);
            });

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };

        }
    ]
});