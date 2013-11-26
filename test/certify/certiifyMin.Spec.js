describe("certifyMin", function(){
    var form;
    var $scope;
    beforeEach(angular.mock.module("certify"));
    beforeEach(angular.mock.inject(function ($compile, $rootScope){
        $scope = $rootScope;
        var element = angular.element(
            '<form name="form">' +
                '<input ng-model="model.somenum" name="fieldname" certify-min="absolute_min" />' +
                '</form>'
        );
        $scope.model = { somenum: 1 }
        $scope.absolute_min = 0
        $compile(element)($scope);
        $rootScope.$digest();
        form = $scope.form;
    }));

    //validates that karma is running properly
    it("should be true",function(){
        expect(true).toBe(true);
    })

    describe('with unchanging absolute_min', function() {
        it('should pass with value greater than absolute_min', function() {
            console.log(form.somenum)
            form.fieldname.$setViewValue('3');
            expect($scope.model.somenum).toEqual('3');
            expect(form.fieldname.$valid).toBe(true);
        });
        it('should not pass with value equal to absolute_min', function() {
            form.fieldname.$setViewValue('0');
            expect($scope.model.somenum).toEqual('0');
            expect(form.fieldname.$valid).toBe(true);
        });
        it('should not pass with value less than absolute_min', function() {
            form.fieldname.$setViewValue('-1');
            expect($scope.model.somenum).toBeUndefined();
            expect(form.fieldname.$valid).toBe(false);
        });
    });
})
