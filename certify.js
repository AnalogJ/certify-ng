var app = angular.module('simple', [])

app.directive('myCustomer', function() {
    return {
        template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
});


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