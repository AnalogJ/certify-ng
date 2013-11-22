var app = angular.module('docsSimpleDirective', [])

app.directive('myCustomer', function() {
    return {
        template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
});