describe("Spec v2: a", function() {


// ShoppingListApp modulü için bi tane mock service tanımlanır ve before each içinde dependency
// olarak çağrılabilmesi için $provide ile oluşturulur.
  beforeEach(function () {
      beforeEach(module('ShoppingListApp'));
    module(function ($provide) {
      $provide.service('ShoppingListServiceErrorMock', function () {
        var service = this;
        service.addItem = function (name, quantity) {
          console.log("JASMINE TEST");

          throw new Error("Test message.");
        };

        service.getItems = function () {
          return null;
        };
      });
    });


  });

  var $controller;
  var testController;

  beforeEach(inject(function (_$controller_, ShoppingListServiceErrorMock) {
    $controller = _$controller_;


// ShoppingListService  yerine kullanılacak olan mock service belirlenir
// tanımlanan controller hangi controller in kopyası olduğu ve dependency leri belirlenir
    testController =
      $controller('ShoppingListController',
                  {ShoppingListService: ShoppingListServiceErrorMock});

  }));

  it("should change error message in controller", function() {
    testController.addItem();
    expect(testController.errorMessage).toBe("Test message.");
      expect(testController.itemName).toBe("----");

  });

});
