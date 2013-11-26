describe("certifyMin", function(){
    var element;
    var $scope;
    beforeEach(angular.mock.module("simple"));
    beforeEach(angular.mock.inject(function ($compile, $rootScope){
        $scope = $rootScope;
        element = angular.element("<div>{{ 2 + 2 }}</div>");
        $compile(element)($rootScope);
        $rootScope.$digest();
    }));

    it("should equal 4", function(){
        expect(element.html()).toBe("4");
    })


    it("should be true",function(){
        expect(true).toBe(true);
    })
})
