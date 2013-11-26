describe("certifyMax", function(){
    var form;
    var $scope;
    beforeEach(angular.mock.module("certify"));
    beforeEach(angular.mock.inject(function ($compile, $rootScope){
        $scope = $rootScope;
        var element = angular.element(
            '<form name="form">' +
                '<input ng-model="model.somenum" name="fieldname" certify-max="absolute_max" />' +
                '</form>'
        );
        $scope.model = { somenum: 1 }
        $scope.absolute_max = 10
        $compile(element)($scope);
        $rootScope.$digest();
        form = $scope.form;
    }));

    //validates that karma is running properly
    it("should be true",function(){
        expect(true).toBe(true);
    })

    describe('with unchanging absolute_min', function() {
        it('should pass with value less than absolute_max', function() {
            console.log(form.somenum)
            form.fieldname.$setViewValue('3');
            expect($scope.model.somenum).toEqual('3');
            expect(form.fieldname.$valid).toBe(true);
        });
        it('should pass with value equal to absolute_max', function() {
            form.fieldname.$setViewValue('10');
            expect($scope.model.somenum).toEqual('10');
            expect(form.fieldname.$valid).toBe(true);
        });
        it('should not pass with value greater than absolute_max', function() {
            form.fieldname.$setViewValue('11');
            expect($scope.model.somenum).toBeUndefined();
            expect(form.fieldname.$valid).toBe(false);
        });

    });
})
