var app = angular.module('certify', [])

app.directive('certifyMin', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) {

            scope.$watch(attr.certifyMin, function(){
                ctrl.$setViewValue(ctrl.$viewValue);
            });
            var minValidator = function(value) {
                var min = scope.$eval(attr.certifyMin) || 0;
                if (!isEmpty(value) && value < min) {
                    ctrl.$setValidity('certifyMin', false);
                    return undefined;
                } else {
                    ctrl.$setValidity('certifyMin', true);
                    return value;
                }
            };

            ctrl.$parsers.push(minValidator);
            ctrl.$formatters.push(minValidator);
        }
    };
});

app.directive('certifyMax', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) {
            scope.$watch(attr.certifyMax, function(){
                ctrl.$setViewValue(ctrl.$viewValue);
            });
            var maxValidator = function(value) {
                var max = scope.$eval(attr.certifyMax) || Infinity;
                if (!isEmpty(value) && value > max) {
                    ctrl.$setValidity('certifyMax', false);
                    return undefined;
                } else {
                    ctrl.$setValidity('certifyMax', true);
                    return value;
                }
            };

            ctrl.$parsers.push(maxValidator);
            ctrl.$formatters.push(maxValidator);
        }
    };
});


// Helper functions
function isEmpty(value) {
    return angular.isUndefined(value) || value === '' || value === null || value !== value;
}


/*
Dynamically Enable/Disable Validation::


* CreditCard
  Required
  Checklist/Array Required
  MinLength
  MaxLength
  Regex
  Array/ChecklistMinChecked
  ArrayChecklistMaxChecked
 Phone Number
 Remote
 Date
 Digits
 Email
 EqualTo
 FileExtensions
 Integer
 Max
 Min
 Numeric
 Url/UrlStrict
 Year
 AlphaNum
* */